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
            // 如果成功從請求中獲取 lineId，則使用它進行登錄流程
            $lineId = $data['lineId'];
            // 在這裡執行登錄流程，使用 $lineId 來進行登錄
            // 登錄成功後，設置 $result['token'] 為你需要返回給前端的值
            $result['token'] = $lineId;
        } else {
            // 若無法從請求中獲取 lineId，可以返回一個錯誤消息或設置一個預設值
            $result['error'] = 'Failed to extract lineId from request';
        }

        return $result;
    }

};
