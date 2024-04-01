<?php //>

return new class() extends matrix\web\Controller {

    use mazulight\Api;

    protected function process($form) {
        $attraction = model('Attraction')->get(@$form['id']);

        if (!$attraction) {
            return ['error' => 'error.data-not-found'];
        }

        return [
            'success' => true,
            'attraction' => $attraction,
        ];
    }

};
