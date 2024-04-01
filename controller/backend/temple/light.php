<?php //>

return new class('Light') extends matrix\web\backend\ListController {

    protected function init() {
        $this->columns([
            'title',
            'image',
            'price',
        ]);
    }

};
