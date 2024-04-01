<?php //>

use matrix\db\column\DisableTime;
use matrix\db\column\EnableTime;
use matrix\db\column\Integer;
use matrix\db\column\File;
use matrix\db\column\Text;
use matrix\db\Table;

$tbl = new Table('custom_video', true, 'mazulight\model');

$tbl->add('monitor_id', Integer::class)
    ->associate('monitor', 'Monitor', true)
    ->readonly(true)
    ->required(true);

$tbl->add('title', Text::class)
    ->required(true);

$tbl->add('file', File::class)
    ->mimeType('video\/[\w+-]+')
    ->required(true);

$tbl->add('file_hash', Text::class)
    ->invisible(true);

$tbl->add('enable_time', EnableTime::class);

$tbl->add('disable_time', DisableTime::class);

$tbl->ranking('title');

return $tbl;
