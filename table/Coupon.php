<?php //>

use matrix\db\column\Date;
use matrix\db\column\Double;
use matrix\db\column\Text;
use matrix\db\column\Timestamp;
use matrix\db\Table;

$tbl = new Table('custom_coupon');

$tbl->add('code', Text::class)
    ->required(true)
    ->unique(true);

$tbl->add('discount', Double::class)
    ->required(true);

$tbl->add('expire_date', Date::class);

$tbl->add('use_time', Timestamp::class);

return $tbl;
