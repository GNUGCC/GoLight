<?php

require_once '/data/wwwroot/light/vendor/matrix-platform/core/class/matrix/web/member/login/Line.php';

// Assuming you have a class that uses the Line trait
$lineLogin = new YourLineLoginClass();
$authUrl = $lineLogin->getLineAuthUrl();

echo json_encode(['url' => $authUrl]);
?>
