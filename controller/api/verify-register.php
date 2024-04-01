<?php //>

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

        if ($data['code'] !== @$form['code']) {
            return ['error' => 'error.verification-code-not-matched'];
        }

        if (time() - $data['time'] > cfg('system.verification-code-timeout')) {
            return ['error' => 'error.verification-code-timeout'];
        }

        $member = model('Member')->insert($data);

        if (!$member) {
            return ['error' => 'error.insert-failed'];
        }

        unlink($file);

        return ['success' => true];
    }

};
