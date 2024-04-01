<?php //>

use matrix\db\column\Boolean;
use matrix\db\column\Date;
use matrix\db\column\Image;
use matrix\db\column\Integer;
use matrix\db\column\Text;
use matrix\db\Table;

$tbl = new Table('custom_light_record');

$tbl->add('member_id', Integer::class)
    ->associate('member', 'Member', true)
    ->readonly(true)
    ->required(true);

$tbl->add('temple_id', Integer::class)
    ->associate('temple', 'Temple')
    ->readonly(true)
    ->required(true);

$tbl->add('light_id', Integer::class)
    ->associate('light', 'Light')
    ->readonly(true);

$tbl->add('order_id', Integer::class)
    ->associate('order', 'Order')
    ->readonly(true);

$tbl->add('item_id', Integer::class)
    ->associate('item', 'OrderItem')
    ->readonly(true);

$tbl->add('year', Integer::class)
    ->required(true);

$tbl->add('title', Text::class)
    ->required(true);

$tbl->add('image', Image::class)
    ->required(true);

$tbl->add('icon', Image::class)
    ->required(true);

$tbl->add('name', Text::class)
    ->required(true);

$tbl->add('calendar_type', Integer::class)
    ->default(1)
    ->options(load_options('calendar-type'))
    ->required(true);

$tbl->add('birthday', Date::class)
    ->required(true);

$tbl->add('phone', Text::class);

$tbl->add('address', Text::class);

$tbl->add('disabled', Boolean::class)
    ->default(false)
    ->required(true);

$tbl->add('pet_image', Image::class)
    ->required(true);

return $tbl;

