<?php


return new class() extends matrix\web\member\Login {
    use mazulight\Api;

    protected function preprocess($form) {
        //var_dump('Get 參數：' . $form);
        $form['remember'] = true;        
        return $form;
    }

    protected function postprocess($form, $result) {
         //var_dump('Post 參數：' . $data['line']);
        $member = $this->get('Member');
        $result['token'] = $member['username'];
        $result['remember'] = true;
        return $result;
    } 
};

?>
