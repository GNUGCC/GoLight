<?php //>

use matrix\db\column\Date;
use matrix\db\column\Image;
use matrix\db\column\Integer;
use matrix\db\column\Text;
use matrix\db\Table;

$tbl = new Table('custom_order_item', false);

$tbl->add('order_id', Integer::class)
    ->associate('order', 'Order', true)
    ->readonly(true)
    ->required(true);

$tbl->add('light_id', Integer::class)
    ->associate('light', 'Light')
    ->readonly(true)
    ->required(true);

$tbl->add('name', Text::class)
    ->readonly(true)
    ->required(true);

$tbl->add('calendar_type', Integer::class)
    ->options(load_options('calendar-type'))
    ->readonly(true)
    ->required(true);

$tbl->add('birthday', Date::class)
    ->readonly(true)
    ->required(true);

$tbl->add('phone', Text::class)
    ->readonly(true)
    ->required(true);

$tbl->add('address', Text::class)
    ->readonly(true)
    ->required(true);

$tbl->add('light_title', Text::class)
    ->readonly(true)
    ->required(true);

$tbl->add('light_image', Image::class)
    ->readonly(true)
    ->required(true);

$tbl->add('light_icon', Image::class)
    ->readonly(true)
    ->required(true);

$tbl->add('light_price', Integer::class)
    ->readonly(true)
    ->required(true);

$tbl->add('snapshot', Text::class)
    ->invisible(true)
    ->readonly(true);

$tbl->add('pet_image', Image::class)
    ->required(true);

return $tbl;


