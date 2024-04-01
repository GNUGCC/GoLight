<?php //>

use matrix\db\column\DisableTime;
use matrix\db\column\EnableTime;
use matrix\db\column\Html;
use matrix\db\column\Image;
use matrix\db\column\Integer;
use matrix\db\column\Ranking;
use matrix\db\column\Text;
use matrix\db\column\Url;
use matrix\db\Table;

$tbl = new Table('custom_attraction');

$tbl->add('temple_id', Integer::class)
    ->associate('temple', 'Temple', true)
    ->readonly(true)
    ->required(true);

$tbl->add('title', Text::class)
    ->required(true);

$tbl->add('image', Image::class)
    ->required(true);

$tbl->add('content', Html::class);

$tbl->add('url', Url::class);

$tbl->add('enable_time', EnableTime::class);

$tbl->add('disable_time', DisableTime::class);

$tbl->add('ranking', Ranking::class);

return $tbl;
