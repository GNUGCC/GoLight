<?php

function handleLogin($userId) {
    // 模擬登入處理，實際應用中您需要根據您的業務邏輯進行實現
    if ($userId) {
        // 假設登入成功，返回一個假的 token
        return [
            'success' => true,
            'token' => md5($userId . time()), // 生成一個假的 token
        ];
    } else {
        // 登入失敗
        return [
            'success' => false,
            'message' => '登入失敗',
        ];
    }
}
