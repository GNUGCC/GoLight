<?php //>

return new class() extends matrix\web\MemberController {

    use mazulight\Api;

    protected function process($form) {
        $temple = model('Temple')->get(@$form['temple_id']);

        if (!$temple) {
            return ['error' => 'error.data-not-found'];
        }

        return [
            'success' => true,
            'lights' => model('Light')->query(['temple_id' => $temple['id']]),
            'list' => model('Family')->query(['member_id' => MEMBER_ID]),
            'member' => $this->member(),
        ];
    }

};
