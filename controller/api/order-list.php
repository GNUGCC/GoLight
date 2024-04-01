<?php //>

return new class() extends matrix\web\MemberController {

    use mazulight\Api;

    protected function process($form) {
        $orders = [];

        foreach (model('Order')->query(['member_id' => MEMBER_ID]) as $order) {
            $snapshot = json_decode($order['snapshot'], true);

            $orders[$order['id']] = [
                'id' => $order['id'],
                'create_time' => $order['create_time'],
                'status' => $order['status'],
                'statusDesc' => i18n("options/order-status.{$order['status']}"),
                'temple' => $snapshot['t'],
                'items' => [],
            ];
        }

        foreach (model('OrderItem')->query(['order_id' => array_column($orders, 'id')]) as $item) {
            $snapshot = json_decode($item['snapshot'], true);

            $orders[$item['order_id']]['items'][] = [
                'id' => $item['id'],
                'name' => $item['name'],
                'light' => $snapshot['l'],
            ];
        }

        return [
            'success' => true,
            'orders' => array_values($orders),
        ];
    }

};
