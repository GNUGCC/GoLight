<?php
// 資料庫連線設定
$host = "127.0.0.1";
$port = "5432";
$dbname = "mazulight_db";
$user = "postgres";
$password = "postgres";

require_once '/data/wwwroot/light/vendor/matrix-platform/core/class/matrix/web/member/Login.php';


$loginController = new \matrix\web\member\Login();

// 連線到 PostgreSQL 資料庫
$dbconn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password")
    or die('無法連線到資料庫: ' . pg_last_error());
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);
$form = []; // 初始化 $form 陣列

// 判斷是否為 LINE 登入
if (isset($data['userId']) && isset($data['displayName'])) {
    $lineId = $data['userId'];
    $displayName = $data['displayName'];

    // 檢查 LINE ID 是否已經存在於資料庫中
    $checkQuery = "SELECT COUNT(*) FROM base_member WHERE lineid = $1";
    $checkResult = pg_query_params($dbconn, $checkQuery, array($lineId));

    if ($checkResult) {
        $row = pg_fetch_row($checkResult);
        $count = intval($row[0]);
        if ($count > 0) {
            // LINE ID 已存在，設置預設表單參數用於登入
            $form['username'] = $lineId;
            $form['password'] = '8888888888'; // 預設密碼
        } else {
            // LINE ID 不存在，寫入新用戶資料
            $id = '1000' . mt_rand(3000, 9999);
            $gender = 1;
            $calendar_type = 1;
            $birthday = '2024-03-26';
            $disabled = 'f';
            $username = $lineId;
            $password = md5($id . '::' . '8888888888');
            $address  = "台灣";

            $insertQuery = "INSERT INTO base_member (id, username, password, name, gender, calendar_type, birthday, address, disabled, lineid) 
                            VALUES ('$id', '$username', '$password', '$displayName', $gender, $calendar_type, '$birthday', '$address', '$disabled', '$lineId')";
            $insertResult = pg_query($dbconn, $insertQuery);
            var_dump($insertResult);
            if ($insertResult) {
                // 新用戶資料寫入成功，設置預設表單參數用於登入
              $form['username'] = 098;
              $form['password'] = '8888888888'; // 預設密碼
            }
        }
    }
}




return new class() extends matrix\web\member\Login {
    use mazulight\Api;

    protected function preprocess($form) {
        $form['remember'] = true;
        
        return $form;
    }

    protected function postprocess($form, $result) {

        $member = $this->get('Member');
        $result['token'] = $member['username'];
        $result['remember'] = true;
        return $result;
    } 
};

// 關閉資料庫連線
pg_close($dbconn);
?>
