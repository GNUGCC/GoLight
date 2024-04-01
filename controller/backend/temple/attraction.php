<?php //>

return new class('Attraction') extends matrix\web\backend\ListController {

    protected function init() {
        $this->columns([
            'title',
            'image',
            'url',
        ]);
    }

};
