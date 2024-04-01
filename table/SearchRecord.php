<?php //>

use matrix\db\column\Integer;
use matrix\db\column\ModifiedTime;
use matrix\db\Table;

$tbl = new Table('custom_search_record');

$tbl->add('type', Integer::class)
    ->readonly(true)
    ->required(true);

$tbl->add('member_id', Integer::class)
    ->associate('member', 'Member', true)
    ->readonly(true)
    ->required(true);

$tbl->add('temple_id', Integer::class)
    ->associate('temple', 'Temple')
    ->readonly(true)
    ->required(true);

$tbl->add('monitor_id', Integer::class)
    ->associate('monitor', 'Monitor');

$tbl->add('modify_time', ModifiedTime::class)
    ->required(true);

return $tbl;
