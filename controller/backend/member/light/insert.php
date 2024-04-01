<?php //>

return new class('LightRecord') extends matrix\web\backend\InsertController {

    protected function init() {
        $table = $this->table();
        $table->light_id->required(true);
    }

    protected function wrap() {
        $form = parent::wrap();

        $light = model('Light')->get(@$form['light_id']);

        if ($light) {
            $form['temple_id'] = $light['temple_id'];
            $form['title'] = $light['title'];
            $form['image'] = $light['image'];
        }

        return $form;
    }

};
