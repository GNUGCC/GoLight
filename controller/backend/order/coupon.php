<?php //>

return new class('OrderCoupon') extends matrix\web\backend\ListController {

    protected function init() {
        $table = $this->table();

        $table->add('code', 'coupon.code');
        $table->add('discount', 'coupon.discount');

        $this->columns([
            'code',
            'discount',
        ]);
    }

};
