<?php
// 引入必要的文件和?
require_once 'path/to/line-sdk/autoload.php';
require_once 'path/to/login.php';
require_once 'path/to/Member.php';

use LINE\LINEBot;
use LINE\LINEBot\HTTPClient\CurlHTTPClient;

// LINE 配置
$channelAccessToken = 'YOUR_CHANNEL_ACCESS_TOKEN';
$channelSecret = '11925b88f0c5dd44f29a923895e9ae74';

// ?建 LINE Bot ?例
$httpClient = new CurlHTTPClient($channelAccessToken);
$bot = new LINEBot($httpClient, ['channelSecret' => $channelSecret]);

// ?取授??
$code = $_GET['code'] ?? null;

if ($code) {
    // 使用授??交? Access Token
    $response = $bot->getOAuthAccessToken($code);
    $accessToken = $response->getJSONDecodedBody()['access_token'];

    // 使用 Access Token ?取用?信息
    $response = $bot->getProfile($accessToken);
    $profile = $response->getJSONDecodedBody();

    // 在?里?理登???，例如?查?据?中是否存在用???，如果不存在，??建
    $member = Member::findByLineId($profile['userId']);
    if (!$member) {
        $member = new Member([
            'line_id' => $profile['userId'],
            'username' => $profile['displayName'],
            // 可以根据需要?置其他字段
        ]);
        $member->save();
    }

    // ?置用?登???，例如通??建??
    $_SESSION['member_id'] = $member->id;

    // 重定向到?有??信息的?面
    header('Location: /member-info');
    exit;
} else {
    echo 'Authorization code is missing.';
}
