<?php //>

return new class() extends matrix\web\Controller {

    use mazulight\Api;

    protected function process($form) {
        $family = model('Family')->get(@$form['id']);
        if (!$family) {
            return ['error' => 'error.data-not-found'];
        }

        return [
            'success' => true,
            'family' => $family,
        ];
    }

};
