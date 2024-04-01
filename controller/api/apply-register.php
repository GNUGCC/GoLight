<?php //>

use matrix\utility\Func;

return new class() extends matrix\web\Controller {

    use mazulight\Api;

    protected function validate($form) {
        $errors = [];

        foreach (['name', 'gender', 'birthday', 'address', 'username', 'password'] as $name) {
            if (!strlen(@$form[$name])) {
                $errors[] = ['name' => $name, 'type' => 'required'];
            }
        }

        if (!$errors) {
            if (!i18n("options/gender.{$form['gender']}", '')) {
                $errors[] = ['name' => 'gender', 'type' => 'not-found'];
            }

            $options = ['validation' => 'date', 'pattern' => cfg('system.date')];

            if (validate($form['birthday'], $options) !== true) {
                $errors[] = ['name' => 'birthday', 'type' => 'regex'];
            }

            $pattern = cfg('frontend.mobile-pattern');

            if (!preg_match("/^{$pattern}$/", $form['username'])) {
                $errors[] = ['name' => 'username', 'type' => 'regex'];
            }

            if (strlen($form['password']) < 6) {
                $errors[] = ['name' => 'password', 'type' => 'password-length'];
            }

            if ($form['password'] !== @$form['confirm']) {
                $errors[] = ['name' => 'password', 'type' => 'password-dismatch'];
            }
        }

        return $errors;
    }

    protected function process($form) {
        $data = array_intersect_key($form, array_flip(['name', 'gender', 'birthday', 'address', 'username', 'password']));
        $data['code'] = str_pad(rand(0, 999999), 6, '0', STR_PAD_LEFT);
        $data['time'] = time();

        //--

        if (model('Member')->count(['username' => $data['username']])) {
            return ['error' => 'error.mobile-exists'];
        }

        //--

        $cooldown = cfg('system.sms-cooldown');

        if (Func::count_sms(['receiver' => $data['username']], $cooldown)) {
            return ['error' => 'error.retry-sms-later']; //同一手機在 $cooldown 時間內只能發送 1 則簡訊
        }

        if (Func::count_sms(REMOTE_ADDR, $cooldown) > 10) {
            return ['error' => 'error.retry-sms-later']; //同一 IP 在 $cooldown 時間內不能超過 10 則簡訊
        }

        $options = load_cfg('sms');
        $options['mobile'] = $data['username'];
        $options['text'] = render(i18n('sms.register'), ['code' => $data['code']]);

        if (!Func::send_sms($options)) {
            return ['error' => 'error.sms-failed'];
        }

        //--

        $file = tempnam(create_folder(APP_DATA . 'apply-register'), date('Ymd-'));

        file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

        chmod($file, 0644);

        return [
            'success' => true,
            'token' => basename($file),
        ];
    }

};
