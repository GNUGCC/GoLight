<?php //>

return new class() extends matrix\web\Controller {

    use mazulight\Api;

    protected function process($form) {
        $temple = model('Temple')->get(@$form['temple_id']);

        if (!$temple) {
            return ['error' => 'error.data-not-found'];
        }

        return [
            'success' => true,
            'list' => model('News')->query(['temple_id' => $temple['id']]),
            'temple' => $temple,
        ];
    }

};
