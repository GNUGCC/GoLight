<?php //>

use matrix\utility\Func;

return new class() extends matrix\web\Controller {

    use mazulight\Api;

    protected function process($form) {
        $file = APP_DATA . 'apply-register/' . @$form['token'];

        if ($file !== realpath($file) || !is_file($file)) {
            return;
        }

        $data = json_decode(file_get_contents($file), true);

        if (!$data || !@$data['code']) {
            return;
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
        $options['text'] = render(i18n('sms.register'), ['code' => $data['code']]);

        if (!Func::send_sms($options)) {
            return ['error' => 'error.sms-failed'];
        }

        return ['success' => true];
    }

};
