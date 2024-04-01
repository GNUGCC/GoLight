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

// 接收來自前端的 JSON 數據
$data = json_decode(file_get_contents('php://input'), true);

// 獲取用戶的 LINE ID 和顯示名稱
$lineId = $data['userId'];
$displayName = $data['displayName'];

// 要寫入的資料
$id = '1000' . mt_rand(3000, 9999);
$gender = 1;
$calendar_type = 1;
$birthday = '2024-03-26';
$disabled = 'f';
$username = '';
$password = md5($id . '::' . '8888888888');
$address  = "台灣";

// 準備 SQL 查詢
$checkQuery = "SELECT COUNT(*) FROM base_member WHERE lineid = $1";
$checkResult = pg_query_params($checkQuery, array($lineId));

if ($checkResult) {
    $row = pg_fetch_row($checkResult);
    $count = intval($row[0]);
    if ($count > 0) {
        $response = [
            'success' => true,
            'message' => 'User data received successfully',
            'lineId' => $lineId,
            'displayName' => $displayName
        ];
    } else {
        // 插入資料
        $query = "INSERT INTO base_member (id, username, password, name, gender, calendar_type, birthday, address, disabled, lineid) 
                  VALUES ('$id', '$lineId', '$password', '$displayName', $gender, $calendar_type, '$birthday', '$address', '$disabled', '$lineId')";

        $result = pg_query($dbconn, $query);

        if ($result) {
            $response = [
                'success' => true,
                'message' => 'Data inserted successfully',
                'lineId' => $lineId,
                'displayName' => $displayName
            ];
        } else {
            $response = [
                'success' => false,
                'message' => 'Data insertion failed',
            ];
        }
    }
} else {
    $response = [
        'success' => false,
        'message' => 'Failed to query lineid',
    ];
}

// 返回 JSON 數據給前端
header('Content-Type: application/json');
echo json_encode($response);

// 關閉資料庫連線
pg_close($dbconn);
?>
