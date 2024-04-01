<?php //>

return new class() extends matrix\web\MemberController {

    use mazulight\Api;

    protected function process($form) {
        $member = $this->member();
        $info = array_intersect_key($member, array_flip(['name', 'gender', 'birthday', 'address', 'username']));

        return [
            'success' => true,
            'info' => $info,
        ];
    }

}; 