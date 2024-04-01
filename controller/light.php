<?php //>

return new class() extends matrix\web\Controller {

    protected function process($form) {
        $records = model('LightRecord')->query([], ['?'], 35);

        return [
            'success' => true,
            'records' => $records,
        ];
    }

};
