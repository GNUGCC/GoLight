<?php //>

return new class('Order') extends matrix\web\backend\ListController {

    protected function init() {
        $table = $this->table();

        $table->add('temple_title', 'temple.title');
        $table->add('username', 'member.username');
        $table->add('name', 'member.name');
        $table->add('payment_method_title', 'payment_method.title');
        $table->add('item_count', 'item.count');
        $table->add('coupon_count', 'coupon.count');

        $this->columns([
            'order_no',
            'temple_title',
            'username',
            'name',
            'net_amount',
            'discount',
            'amount',
            'payment_method_title',
            'pay_time',
            'item_count',
            'coupon_count',
            'status',
        ]);
    }

};
