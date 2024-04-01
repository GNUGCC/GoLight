<?php //>

return new class('Monitor') extends matrix\web\backend\GetController {

    protected function postprocess($form, $result) {
        $options = [];

        foreach (model('Light')->query(['temple_id' => $result['data']['temple_id']]) as $row) {
            $options[$row['id']] = ['title' => $row['title']];
        }

        $this->table()->lights->options($options);

        return $result;
    }

};
