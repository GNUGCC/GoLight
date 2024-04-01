<?php //>

return new class('LightRecord') extends matrix\web\backend\BlankController {

    protected function init() {
        $table = $this->table();
        $table->light_id->required(true);

        $this->columns([
            'light_id',
            'year',
            'name',
            'calendar_type',
            'birthday',
            'phone',
            'address',
            'disabled',
        ]);
    }

};
