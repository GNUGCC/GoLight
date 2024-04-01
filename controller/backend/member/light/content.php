<?php //>

return new class('LightRecord') extends matrix\web\backend\GetController {

    protected function init() {
        $table = $this->table();

        $table->add('order_no', 'order.order_no');
        $table->add('temple_title', 'temple.title');
        $table->add('light_title', 'light.title');

        $this->columns([
            'order_no',
            'temple_title',
            'light_title',
            'year',
            'name',
            'calendar_type',
            'birthday',
            'phone',
            'address',
            'disabled',
        ]);
    }

    protected function postprocess($form, $result) {
        if (!$result['data']['order_no']) {
            $table = $this->table();
            $table->order_no->invisible(true);
        }

        return $result;
    }

};
