<?php //>

use matrix\db\column\Date;
use matrix\db\column\Integer;
use matrix\db\column\Text;

$tbl = table('CommonMember', false);

$tbl->add('gender', Integer::class)
    ->options(load_options('gender'))
    ->required(true);

$tbl->add('calendar_type', Integer::class)
    ->default(1)
    ->options(load_options('calendar-type'))
    ->required(true);

$tbl->add('birthday', Date::class)
    ->required(true);

$tbl->add('address', Text::class)
    ->required(true);

$tbl->id->composite('family', 'Family');
$tbl->id->composite('light', 'LightRecord');

$tbl->ranking('username');
$tbl->title('name');

return $tbl;
