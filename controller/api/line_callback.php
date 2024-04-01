<?php
// �ޤJ���n�����M?
require_once 'path/to/line-sdk/autoload.php';
require_once 'path/to/login.php';
require_once 'path/to/Member.php';

use LINE\LINEBot;
use LINE\LINEBot\HTTPClient\CurlHTTPClient;

// LINE �t�m
$channelAccessToken = 'YOUR_CHANNEL_ACCESS_TOKEN';
$channelSecret = '11925b88f0c5dd44f29a923895e9ae74';

// ?�� LINE Bot ?��
$httpClient = new CurlHTTPClient($channelAccessToken);
$bot = new LINEBot($httpClient, ['channelSecret' => $channelSecret]);

// ?����??
$code = $_GET['code'] ?? null;

if ($code) {
    // �ϥα�??��? Access Token
    $response = $bot->getOAuthAccessToken($code);
    $accessToken = $response->getJSONDecodedBody()['access_token'];

    // �ϥ� Access Token ?����?�H��
    $response = $bot->getProfile($accessToken);
    $profile = $response->getJSONDecodedBody();

    // �b?��?�z�n???�A�Ҧp?�d?�u?���O�_�s�b��???�A�p�G���s�b�A??��
    $member = Member::findByLineId($profile['userId']);
    if (!$member) {
        $member = new Member([
            'line_id' => $profile['userId'],
            'username' => $profile['displayName'],
            // �i�H���u�ݭn?�m��L�r�q
        ]);
        $member->save();
    }

    // ?�m��?�n???�A�Ҧp�q??��??
    $_SESSION['member_id'] = $member->id;

    // ���w�V��?��??�H����?��
    header('Location: /member-info');
    exit;
} else {
    echo 'Authorization code is missing.';
}
