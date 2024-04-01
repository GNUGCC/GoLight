<?php //>

return new class('News') extends matrix\web\backend\ListController {

    protected function init() {
        $this->columns([
            'the_date',
            'title',
            'image',
        ]);
    }

};
