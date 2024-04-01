<?php //>

return new class() extends matrix\web\Controller {

    use mazulight\Api;

    protected function validate($form) {
        $errors = [];

        foreach (['password'] as $name) {
            if (!strlen(@$form[$name])) {
                $errors[] = ['name' => $name, 'type' => 'required'];
            }
        }

        if (!$errors) {
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
        $file = APP_DATA . 'apply-forgot/' . @$form['token'];

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

        //--

        $model = model('Member');
        $member = $model->find(['username' => $data['username']]);

        if (!$member) {
            return ['error' => 'error.data-not-found'];
        }

        $member['password'] = $form['password'];

        if (!$model->update($member)) {
            return ['error' => 'error.update-failed'];
        }

        unlink($file);

        model('MemberLog')->insert(['member_id' => $member['id'], 'type' => 5]);

        return ['success' => true];
    }

};
