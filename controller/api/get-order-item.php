<?php //>

return new class() extends matrix\web\MemberController {

    use mazulight\Api;

    protected function process($form) {
        $item = model('OrderItem')->get(@$form['id']);

        if (!$item) {
            return ['error' => 'error.data-not-found'];
        }

        $order = model('Order')->find(['id' => $item['order_id'], 'member_id' => MEMBER_ID]);

        if (!$order) {
            return ['error' => 'error.data-not-found'];
        }

        return [
            'success' => true,
            'item' => [
                'order_id' => $item['order_id'],
                'name' => $item['name'],
                'title' => $item['light_title'],
                'icon' => $item['light_icon'],
            ],
        ];
    }

};
