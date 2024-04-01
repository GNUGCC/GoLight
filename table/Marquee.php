<?php //>

use matrix\db\column\DisableTime;
use matrix\db\column\EnableTime;
use matrix\db\column\Integer;
use matrix\db\column\Text;
use matrix\db\column\Textarea;
use matrix\db\Table;

$tbl = new Table('custom_marquee');

$tbl->add('monitor_id', Integer::class)
    ->associate('monitor', 'Monitor', true)
    ->readonly(true)
    ->required(true);

$tbl->add('title', Text::class)
    ->required(true);

$tbl->add('content', Textarea::class)
    ->required(true);

$tbl->add('enable_time', EnableTime::class);

$tbl->add('disable_time', DisableTime::class);

return $tbl;
