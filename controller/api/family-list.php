<?php //>

return new class() extends matrix\web\MemberController {

    use mazulight\Api;

    protected function process($form) {
        return [
            'success' => true,
            'list' => model('Family')->query(['member_id' => MEMBER_ID]),
        ];
    }

};
