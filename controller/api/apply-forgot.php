<?php //>

use matrix\utility\Func;

return new class() extends matrix\web\Controller {

    use mazulight\Api;

    protected function validate($form) {
        $errors = [];

        foreach (['username'] as $name) {
            if (!strlen(@$form[$name])) {
                $errors[] = ['name' => $name, 'type' => 'required'];
            }
        }

        if (!$errors) {
            $pattern = cfg('frontend.mobile-pattern');

            if (!preg_match("/^{$pattern}$/", $form['username'])) {
                $errors[] = ['name' => 'username', 'type' => 'regex'];
            }
        }

        return $errors;
    }

    protected function process($form) {
        $data = array_intersect_key($form, array_flip(['username']));
        $data['code'] = str_pad(rand(0, 999999), 6, '0', STR_PAD_LEFT);
        $data['time'] = time();

        //--

        if (!model('Member')->count(['username' => $data['username']])) {
            return ['error' => 'error.mobile-not-found'];
        }

        //--

        $cooldown = cfg('system.sms-cooldown');

        if (Func::count_sms(['receiver' => $data['username']], $cooldown)) {
            return ['error' => 'error.retry-sms-later'];
        }

        if (Func::count_sms(REMOTE_ADDR, $cooldown) > 10) {
            return ['error' => 'error.retry-sms-later'];
        }

        $options = load_cfg('sms');
        $options['mobile'] = $data['username'];
        $options['text'] = render(i18n('sms.forgot'), ['code' => $data['code']]);

        if (!Func::send_sms($options)) {
            return ['error' => 'error.sms-failed'];
        }

        //--

        $file = tempnam(create_folder(APP_DATA . 'apply-forgot'), date('Ymd-'));

        file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

        chmod($file, 0644);

        return [
            'success' => true,
            'token' => basename($file),
        ];
    }

};
