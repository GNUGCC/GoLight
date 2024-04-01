<?php //>

use matrix\db\column\DisableTime;
use matrix\db\column\Double;
use matrix\db\column\EnableTime;
use matrix\db\column\Image;
use matrix\db\column\Text;
use matrix\db\column\Url;
use matrix\db\Table;

$tbl = new Table('custom_temple');

$tbl->add('title', Text::class)
    ->required(true);

$tbl->add('image', Image::class)
    ->required(true);

$tbl->add('phone', Text::class)
    ->required(true);

$tbl->add('address', Text::class)
    ->required(true);

$tbl->add('website_url', Url::class);

$tbl->add('store_url', Url::class);

$tbl->add('video_url', Url::class);

$tbl->add('longitude', Double::class);

$tbl->add('latitude', Double::class);

$tbl->add('enable_time', EnableTime::class);

$tbl->add('disable_time', DisableTime::class);

$tbl->id->composite('monitor', 'Monitor');
$tbl->id->composite('light', 'Light');
$tbl->id->composite('news', 'News');
$tbl->id->composite('attraction', 'Attraction');

$tbl->ranking('title');

return $tbl;
