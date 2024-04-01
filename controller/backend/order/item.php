<?php //>

return new class('OrderItem') extends matrix\web\backend\ListController {

    protected function init() {
        $this->columns([
            'light_title',
            'light_price',
            'name',
            'calendar_type',
            'birthday',
            'phone',
            'address',
        ]);
    }

};
