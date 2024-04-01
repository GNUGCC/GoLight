<?php //>

return new class() extends matrix\web\MemberController {

    use mazulight\Api;

    protected function process($form) {
        $order = model('Order')->find(['id' => @$form['id'], 'member_id' => MEMBER_ID]);

        if (!$order) {
            return ['error' => 'error.data-not-found'];
        }

        $snapshot = json_decode($order['snapshot'], true);

        $order = [
            'id' => $order['id'],
            'order_no' => $order['order_no'],
            'temple' => $snapshot['t'],
            'net_amount' => $order['net_amount'],
            'discount' => $order['discount'],
            'amount' => $order['amount'],
            'payment_method' => $snapshot['p'],
            'payment' => $order['payment'],
            'pay_time' => $order['pay_time'],
            'drawback_time' => $order['drawback_time'],
            'cancel_time' => $order['cancel_time'],
            'create_time' => $order['create_time'],
            'statusDesc' => i18n("options/order-status.{$order['status']}"),
            'items' => [],
            'status' => $order['status'],
        ];

        foreach (model('OrderItem')->query(['order_id' => $order['id']]) as $item) {
            $snapshot = json_decode($item['snapshot'], true);

            $order['items'][] = [
                'id' => $item['id'],
                'name' => $item['name'],
                'birthday' => $item['birthday'],
                'icon' => $item['light_icon'],
                'light' => $snapshot['l'],
                'pet_image' => $item['pet_image'],
            ];
        }

        return [
            'success' => true,
            'order' => $order,
        ];
    }

};
