<?php //>

use Carbon\Carbon;

return new class() extends matrix\web\MemberController {

    use mazulight\Api;

    protected function process($form) {
        $coupon = model('Coupon')->find(['code' => strtoupper(@$form['code'])]);

        if (!$coupon) {
            return ['error' => 'lang.coupon-not-found'];
        }

        if ($coupon['use_time']) {
            return ['error' => 'lang.coupon-used'];
        }

        if ($coupon['expire_date'] && Carbon::create($coupon['expire_date'])->lessThan(Carbon::today())) {
            return ['error' => 'lang.coupon-expired'];
        }

        return [
            'success' => true,
            'coupon' => $coupon,
        ];
    }

};
