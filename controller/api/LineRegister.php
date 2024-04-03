<?php
// 连接数据库
$host = "127.0.0.1";
$port = "5432";
$dbname = "mazulight_db";
$user = "postgres";
$password = "postgres";
$dbconn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password")
    or die('无法连接到数据库: ' . pg_last_error());

// 获取请求数据
$data = json_decode(file_get_contents('php://input'), true);
$lineId = $data['lineId'];
$displayName = $data['displayName'];

// 检查LINE ID是否存在
$query = "SELECT * FROM base_member WHERE lineid = $1";
$result = pg_query_params($dbconn, $query, array($lineId));

if ($result) {
    $row = pg_fetch_assoc($result);
    if ($row) {
        // LINE ID已存在，返回用户名和默认密码
        $username = $row['username'];
        $password = '88888888';
        echo json_encode(['username' => $username, 'password' => $password]);
    } else {
        // LINE ID不存在，插入新用户数据
        $id = '1000' . mt_rand(3000, 9999);
        $gender = 1;
        $calendar_type = 1;
        $birthday = date('Y-m-d');
        $disabled = 'f';
        $username = $id;
        $password = md5($id . '::' . '88888888');
        $address = "台灣";

        $insert_query = "INSERT INTO base_member (id, username, password, lineid, gender, calendar_type, birthday, disabled, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";
        $insert_result = pg_query_params($dbconn, $insert_query, array($id, $username, $password, $lineId, $gender, $calendar_type, $birthday, $disabled, $address));
        if ($insert_result) {
            // 返回新用户的ID和密码
            echo json_encode(['id' => $id, 'password' => '88888888']);
        } else {
            // 插入失败
            echo json_encode(['error' => '插入失败']);
        }
    }
} else {
    // 查询失败
    echo json_encode(['error' => '查询失败']);
}

// 关闭数据库连接
pg_close($dbconn);
?>
