<?php //>

use matrix\shopping\payment\Newebpay;

return new class() extends matrix\web\MemberController {

    use mazulight\Api;

    protected function process($form) {
        $order = model('Order')->find(['id' => @$form['id'], 'member_id' => MEMBER_ID, 'status' => 1]);

        if (!$order) {
            return ['error' => 'error.data-not-found'];
        }

        $member = $this->member();

        $order['payment_ver']++;

        switch ($order['payment_method_id']) {
        case 1: //信用卡
            $order = Newebpay::applyCreditCard($order, $member);
            break;
        case 2: //銀行轉帳
            if ($order['payment']) {
                return ['error' => 'error.data-not-found'];
            }
            $order = Newebpay::applyAtm($order, $member);
            break;
        case 3: //超商代碼繳費
            if ($order['payment']) {
                return ['error' => 'error.data-not-found'];
            }
            $order = Newebpay::applyCvs($order, $member);
            break;
        default:
            return ['error' => 'error.InvalidPaymentMethod']; //付款方式錯誤
        }

        if ($order === false) {
            return ['error' => 'error.ConnectFailed']; //連線失敗
        } else if ($order === null) {
            return ['error' => 'error.PaymentFailed']; //串接失敗
        }

        model('Order')->update($order);

        //--

        $this->data($order);

        $file = tempnam(create_folder(APP_DATA . 'order-payment'), date('Ymd-'));

        file_put_contents($file, json_encode($order, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

        chmod($file, 0644);

        return [
            'success' => true,
            'url' => url(APP_ROOT . 'order-payment/' . basename($file)),
            'return_url' => url(APP_ROOT . 'order/'),
        ];
    }

};
