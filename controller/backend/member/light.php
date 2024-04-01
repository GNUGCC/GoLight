<?php //>

return new class('LightRecord') extends matrix\web\backend\ListController {

    protected function init() {
        $table = $this->table();

        $table->add('order_no', 'order.order_no');
        $table->add('temple_title', 'temple.title');

        $this->columns([
            'order_no',
            'temple_title',
            'title',
            'year',
            'name',
            'birthday',
            'disabled',
        ]);
    }

};
