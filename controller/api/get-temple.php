<?php //>

return new class() extends matrix\web\Controller {

    use mazulight\Api;

    protected function process($form) {
        $temple = model('Temple')->get(@$form['id']);

        if (!$temple) {
            return ['error' => 'error.data-not-found'];
        }

        return [
            'success' => true,
            'temple' => $temple,
        ];
    }

};
