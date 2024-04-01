<?php //>

namespace mazulight;

trait SyncLightRecord {

    protected function subprocess($form, $result) {
        $order = $result['order'];
        $model = model('LightRecord');

        if (!$model->count(['order_id' => $order['id']])) {
            $items = model('OrderItem')->query(['order_id' => $order['id']]);

            foreach ($items as $item) {
                $model->insert([
                    'member_id' => $order['member_id'],
                    'temple_id' => $order['temple_id'],
                    'light_id' => $item['light_id'],
                    'order_id' => $order['id'],
                    'item_id' => $item['id'],
                    'year' => 2022,
                    'title' => $item['light_title'],
                    'image' => $item['light_image'],
                    'icon' => $item['light_icon'],
                    'name' => $item['name'],
                    'calendar_type' => $item['calendar_type'],
                    'birthday' => $item['birthday'],
                    'phone' => $item['phone'],
                    'address' => $item['address'],
                    'pet_image' => $item['pet_image'],
                ]);
            }
        }

        return $result;
    }

}
