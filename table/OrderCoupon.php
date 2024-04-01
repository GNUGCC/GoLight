<?php //>

use matrix\db\column\Integer;
use matrix\db\Table;

$tbl = new Table('custom_order_coupon');

$tbl->add('order_id', Integer::class)
    ->associate('order', 'Order', true)
    ->readonly(true)
    ->required(true);

$tbl->add('coupon_id', Integer::class)
    ->associate('coupon', 'Coupon')
    ->readonly(true)
    ->required(true);

return $tbl;
