<?php //>

use matrix\db\column\Date;
use matrix\db\column\Integer;
use matrix\db\column\Text;
use matrix\db\column\Image;
use matrix\db\Table;

$tbl = new Table('custom_family');

$tbl->add('member_id', Integer::class)
    ->associate('member', 'Member', true)
    ->readonly(true)
    ->required(true);

$tbl->add('name', Text::class)
    ->required(true);

$tbl->add('calendar_type', Integer::class)
    ->default(1)
    ->options(load_options('calendar-type'))
    ->required(true);

$tbl->add('birthday', Date::class)
    ->required(true);

$tbl->ranking('name');

$tbl->add('image', Image::class)
    ->required(true);

return $tbl;
