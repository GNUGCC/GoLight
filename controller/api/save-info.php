<?php //>

return new class() extends matrix\web\MemberController {

    use matrix\web\member\RememberMe, mazulight\Api;

    protected function validate($form) {
        $errors = [];

        foreach (['name', 'gender', 'birthday', 'address'] as $name) {
            if (!strlen(@$form[$name])) {
                $errors[] = ['name' => $name, 'type' => 'required'];
            }
        }

        if (!$errors) {
            if (!i18n("gender.{$form['gender']}")) {
                $errors[] = ['name' => 'gender', 'type' => 'not-found'];
            }

            $options = ['validation' => 'date', 'pattern' => cfg('system.date')];

            if (validate($form['birthday'], $options) !== true) {
                $errors[] = ['name' => 'birthday', 'type' => 'regex'];
            }

            if (strlen(@$form['password'])) {
                if (strlen(@$form['new_password']) < 6) {
                    $errors[] = ['name' => 'new_password', 'type' => 'password-length'];
                }

                if ($form['new_password'] !== @$form['confirm']) {
                    $errors[] = ['name' => 'new_password', 'type' => 'password-dismatch'];
                }
            }
        }

        return $errors;
    }

    protected function process($form) {
        $member = $this->member();
        $password = @$form['password'];

        if ($password) {
            if ($member['password'] !== md5("{$member['id']}::{$password}")) {
                return ['error' => 'error.password-not-matched'];
            }

            $member['password'] = $form['new_password'];
        }

        $member['name'] = $form['name'];
        $member['gender'] = $form['gender'];
        $member['birthday'] = $form['birthday'];
        $member['address'] = $form['address'];

        $member = model('Member')->update($member);

        if (!member) {
            return ['error' => 'error.update-failed'];
        }

        if ($password) {
            $this->set('Member', $member);

            if ($this->get('RememberMember')) {
                $this->remember($member);
            }

            model('MemberLog')->insert(['member_id' => $member['id'], 'type' => 3]);
        }

        return ['success' => true];
    }

};
