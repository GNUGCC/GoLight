<?php

function handleLogin($userId) {
    // �����n�J�B�z�A������Τ��z�ݭn�ھڱz���~���޿�i���{
    if ($userId) {
        // ���]�n�J���\�A��^�@�Ӱ��� token
        return [
            'success' => true,
            'token' => md5($userId . time()), // �ͦ��@�Ӱ��� token
        ];
    } else {
        // �n�J����
        return [
            'success' => false,
            'message' => '�n�J����',
        ];
    }
}
