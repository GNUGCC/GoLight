<?php
// ��Ʈw�s�u�]�w
$host = "127.0.0.1";
$port = "5432";
$dbname = "mazulight_db";
$user = "postgres";
$password = "postgres";

require_once '/data/wwwroot/light/vendor/matrix-platform/core/class/matrix/web/member/Login.php';


$loginController = new \matrix\web\member\Login();

// �s�u�� PostgreSQL ��Ʈw
$dbconn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password")
    or die('�L�k�s�u���Ʈw: ' . pg_last_error());
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);
$form = []; // ��l�� $form �}�C

// �P�_�O�_�� LINE �n�J
if (isset($data['userId']) && isset($data['displayName'])) {
    $lineId = $data['userId'];
    $displayName = $data['displayName'];

    // �ˬd LINE ID �O�_�w�g�s�b���Ʈw��
    $checkQuery = "SELECT COUNT(*) FROM base_member WHERE lineid = $1";
    $checkResult = pg_query_params($dbconn, $checkQuery, array($lineId));

    if ($checkResult) {
        $row = pg_fetch_row($checkResult);
        $count = intval($row[0]);
        if ($count > 0) {
            // LINE ID �w�s�b�A�]�m�w�]���ѼƥΩ�n�J
            $form['username'] = $lineId;
            $form['password'] = '8888888888'; // �w�]�K�X
        } else {
            // LINE ID ���s�b�A�g�J�s�Τ���
            $id = '1000' . mt_rand(3000, 9999);
            $gender = 1;
            $calendar_type = 1;
            $birthday = '2024-03-26';
            $disabled = 'f';
            $username = $lineId;
            $password = md5($id . '::' . '8888888888');
            $address  = "�x�W";

            $insertQuery = "INSERT INTO base_member (id, username, password, name, gender, calendar_type, birthday, address, disabled, lineid) 
                            VALUES ('$id', '$username', '$password', '$displayName', $gender, $calendar_type, '$birthday', '$address', '$disabled', '$lineId')";
            $insertResult = pg_query($dbconn, $insertQuery);
            var_dump($insertResult);
            if ($insertResult) {
                // �s�Τ��Ƽg�J���\�A�]�m�w�]���ѼƥΩ�n�J
              $form['username'] = 098;
              $form['password'] = '8888888888'; // �w�]�K�X
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

// ������Ʈw�s�u
pg_close($dbconn);
?>
