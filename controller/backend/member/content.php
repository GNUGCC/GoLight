<?php //>

return new class('Member') extends matrix\web\backend\GetController {

    protected function init() {
        $this->columns([
            'username',
            'password',
            'name',
            'gender',
            'calendar_type',
            'birthday',
            'address',
            'disabled',
        ]);
    }

};
