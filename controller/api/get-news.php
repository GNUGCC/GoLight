<?php //>

return new class() extends matrix\web\Controller {

    use mazulight\Api;

    protected function process($form) {
        $news = model('News')->get(@$form['id']);

        if (!$news) {
            return ['error' => 'error.data-not-found'];
        }

        return [
            'success' => true,
            'news' => $news,
        ];
    }

};
