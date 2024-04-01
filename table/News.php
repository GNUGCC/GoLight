<?php //>

use matrix\db\column\Date;
use matrix\db\column\DisableTime;
use matrix\db\column\EnableTime;
use matrix\db\column\Html;
use matrix\db\column\Image;
use matrix\db\column\Integer;
use matrix\db\column\Ranking;
use matrix\db\column\Text;
use matrix\db\Table;

$tbl = new Table('custom_news');

$tbl->add('temple_id', Integer::class)
    ->associate('temple', 'Temple', true)
    ->readonly(true)
    ->required(true);

$tbl->add('title', Text::class)
    ->required(true);

$tbl->add('image', Image::class)
    ->required(true);

$tbl->add('the_date', Date::class)
    ->required(true);

$tbl->add('content', Html::class)
    ->required(true);

$tbl->add('enable_time', EnableTime::class);

$tbl->add('disable_time', DisableTime::class);

$tbl->ranking('-the_date');

return $tbl;
