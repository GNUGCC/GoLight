<?php //>

use matrix\db\column\Double;
use matrix\db\column\Integer;

$tbl = table('CommonOrder', false);

$tbl->add('temple_id', Integer::class)
    ->associate('temple', 'Temple')
    ->readonly(true)
    ->required(true);

$tbl->add('discount', Double::class)
    ->readonly(true)
    ->required(true);

$tbl->add('net_amount', Double::class)
    ->readonly(true)
    ->required(true);

$tbl->id->composite('item', 'OrderItem');
$tbl->id->composite('coupon', 'OrderCoupon');

return $tbl;
