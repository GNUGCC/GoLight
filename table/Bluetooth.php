<?php //>

use matrix\db\column\Integer;
use matrix\db\column\Text;
use matrix\db\Table;

$tbl = new Table('custom_bluetooth');

$tbl->add('monitor_id', Integer::class)
    ->associate('monitor', 'Monitor', true)
    ->readonly(true)
    ->required(true);

$tbl->add('token', Text::class)
    ->required(true);

$tbl->ranking('token');
$tbl->title('token');

return $tbl;
