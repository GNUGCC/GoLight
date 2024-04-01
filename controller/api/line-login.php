<?php //>

return new class() extends matrix\web\Controller {

    use mazulight\Api;

    protected function preprocess($form) {
        $form['remember'] = true;

        return $form;
    }

    protected function postprocess($form, $result) {
        $data = json_decode(file_get_contents('php://input'), true);

        if ($data && isset($data['lineId'])) {
            // �p�G���\�q�ШD����� lineId�A�h�ϥΥ��i��n���y�{
            $lineId = $data['lineId'];
            // �b�o�̰���n���y�{�A�ϥ� $lineId �Ӷi��n��
            // �n�����\��A�]�m $result['token'] ���A�ݭn��^���e�ݪ���
            $result['token'] = $lineId;
        } else {
            // �Y�L�k�q�ШD����� lineId�A�i�H��^�@�ӿ��~�����γ]�m�@�ӹw�]��
            $result['error'] = 'Failed to extract lineId from request';
        }

        return $result;
    }

};
