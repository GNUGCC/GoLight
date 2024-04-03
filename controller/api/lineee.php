<?php
// 資料庫連線設定
$host = "127.0.0.1";
$port = "5432";
$dbname = "mazulight_db";
$user = "postgres";
$password = "postgres";

// 連線到 PostgreSQL 資料庫
$dbconn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password")
    or die('無法連線到資料庫: ' . pg_last_error());

// 接收來自前端的資料
$data = json_decode(file_get_contents('php://input'), true);
$lineUserId = $data['lineId']; // 修正這裡的 userId 為 lineId
$displayName = $data['displayName'];
// 要寫入的資料
$id = '1000' . mt_rand(3000, 9999);
$gender = 1;
$calendar_type = 1;
$birthday = '2024-03-26';
$disabled = 'f';
$password = md5($id . '::' . '88888888');

// 檢查使用者是否存在
$checkQuery = "SELECT COUNT(*) FROM base_member WHERE lineid = '$lineUserId'";
$checkResult = pg_query($checkQuery);

if ($checkResult) {
    $row = pg_fetch_row($checkResult);
    $count = intval($row[0]);
    if ($count > 0) {
        // 使用者已存在，取得使用者資訊
        $getUserQuery = "SELECT * FROM base_member WHERE lineid = '$lineUserId'";
        $getUserResult = pg_query($getUserQuery);
        
        if ($getUserResult) {
            $userData = pg_fetch_assoc($getUserResult);
            if ($userData) {
                echo json_encode([
                    'success' => true,
                    'message' => "歡迎回來 : $lineUserId",
                    'username' => $userData['username'],
                    'password' => 88888888,
                ]);
                exit;
            } else {
                echo json_encode([
                    'success' => false,
                    'message' => '無法取得使用者資訊'
                ]);
                exit;
            }
        } else {
            echo json_encode([
                'success' => false,
                'message' => '查詢使用者資訊失敗'
            ]);
            exit;
        }
    } else {
        // 使用者不存在，寫入新資料
        $insertQuery = "INSERT INTO base_member (id, username , gender, calendar_type, birthday, disabled, password, lineid, name) 
        VALUES ('$id' , '$id' , '$gender', $calendar_type, '$birthday', '$disabled',  '$password', '$lineUserId', '$displayName')";
        $insertResult = pg_query($insertQuery);

        if ($insertResult) {
            echo json_encode([
                'success' => true,
                'message' => '資料寫入成功',
                'username' => $id,
                'password' => 88888888,
            ]);
            exit;
        } else {
            echo json_encode([
                'success' => false,
                'message' => '資料寫入失敗',
            ]);
            exit;
        }
    }
} else {
    echo json_encode([
        'success' => false,
        'message' => '查詢 lineid 失敗.',
    ]);
    exit;
}
?>
