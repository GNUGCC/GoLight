<?php //>

return new class('Member') extends matrix\web\backend\ListController {

    protected function init() {
        $table = $this->table();

        $table->add('family_count', 'family.count');
        $table->add('light_count', 'light.count');

        $this->columns([
            'username',
            'name',
            'gender',
            'birthday',
            'address',
            'family_count',
            'light_count',
            'disabled',
        ]);
    }

};
