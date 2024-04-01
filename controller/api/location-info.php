<?php //>

return new class() extends matrix\web\Controller {

    use matrix\web\MemberAware, mazulight\Api;

    protected function process($form) {
        $member = $this->member();

        $temples = $member ? model('Temple')->query() : [];
        $monitors = $member ? model('Monitor')->query() : [];

        return [
            'success' => true,
            'temples' => $temples,
            'monitors' => $monitors,
        ];
    }

};
