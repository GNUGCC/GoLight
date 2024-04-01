<?php //>

use matrix\db\column\Color;
use matrix\db\column\Image;
use matrix\db\column\Integer;
use matrix\db\column\Text;
use matrix\db\Table;

$tbl = new Table('custom_monitor', true, 'mazulight\model');

$tbl->add('temple_id', Integer::class)
    ->associate('temple', 'Temple', true)
    ->readonly(true)
    ->required(true);

$tbl->add('name', Text::class)
    ->required(true);

$tbl->add('token', Text::class)
    ->required(true);

$tbl->add('lights', Text::class)
    ->associate('light', 'Light')
    ->multiple(true);

$tbl->add('bg_image', Image::class)
    ->tab('light');

$tbl->add('bg_image_hash', Text::class)
    ->invisible(true);

$tbl->add('font_size', Integer::class)
    ->tab('light')
    ->unit('unit.px');

$tbl->add('vertical', Integer::class)
    ->tab('light');

$tbl->add('horizontal', Integer::class)
    ->tab('light');

$tbl->add('duraing', Integer::class)
    ->tab('light');

$tbl->add('marquee_height', Integer::class)
    ->tab('marquee')
    ->unit('unit.vh');

$tbl->add('marquee_bg_color', Color::class)
    ->tab('marquee');

$tbl->add('marquee_color', Color::class)
    ->tab('marquee');

$tbl->add('marquee_size', Integer::class)
    ->tab('marquee')
    ->unit('unit.px');

$tbl->add('marquee_duraing', Integer::class)
    ->tab('marquee');

$tbl->add('video_height', Integer::class)
    ->tab('video')
    ->unit('unit.vh');

$tbl->id->composite('bluetooth', 'Bluetooth');
$tbl->id->composite('video', 'Video');
$tbl->id->composite('marquee', 'Marquee');

$tbl->ranking('name');
$tbl->title('name');

return $tbl;
