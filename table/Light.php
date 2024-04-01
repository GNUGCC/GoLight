<?php //>

use matrix\db\column\DisableTime;
use matrix\db\column\EnableTime;
use matrix\db\column\Html;
use matrix\db\column\Image;
use matrix\db\column\Integer;
use matrix\db\column\Ranking;
use matrix\db\column\Text;
use matrix\db\Table;

$tbl = new Table('custom_light', true, 'mazulight\model');

$tbl->add('temple_id', Integer::class)
    ->associate('temple', 'Temple', true)
    ->readonly(true)
    ->required(true);

$tbl->add('title', Text::class)
    ->required(true);

$tbl->add('image', Image::class)
    ->required(true);

$tbl->add('image_hash', Text::class)
    ->invisible(true);

$tbl->add('icon', Image::class)
    ->required(true);

$tbl->add('icon2', Image::class)
    ->required(true);

$tbl->add('introduction', Html::class)
    ->required(true);

$tbl->add('price', Integer::class)
    ->required(true);

$tbl->add('enable_time', EnableTime::class);

$tbl->add('disable_time', DisableTime::class);

$tbl->add('ranking', Ranking::class);

$tbl->ranking('title');


return $tbl;
