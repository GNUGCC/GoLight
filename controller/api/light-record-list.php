<?php //>

return new class() extends matrix\web\Controller {

    use matrix\web\MemberAware, mazulight\Api;

    protected function process($form) {
        $member = $this->member();
        $records = $member ? model('LightRecord')->query(['member_id' => $member['id'], 'disabled' => false]) : [];

        return [
            'success' => true,
            'records' => $records,
        ];
    }

};
