<?php //>

return new class() extends matrix\web\MemberController {

    use mazulight\Api;

    protected function process($form) {
        $model = model('Family');
        $family = $model->find(['id' => @$form['id'], 'member_id' => MEMBER_ID]);

        if (!$family) {
            return ['error' => 'error.data-not-found'];
        }

        if (!$model->delete($family)) {
            return ['error' => 'error.delete-failed'];
        }

        return ['success' => true];
    }

};
