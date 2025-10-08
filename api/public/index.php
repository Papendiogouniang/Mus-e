<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/../bootstrap.php';

use Illuminate\Http\Request;

$request = Request::capture();

$requestUri = $_SERVER['REQUEST_URI'];
$scriptName = $_SERVER['SCRIPT_NAME'];
$pathInfo = parse_url($requestUri, PHP_URL_PATH);

if (strpos($pathInfo, '/api/') === 0) {
    require __DIR__ . '/../routes/api.php';
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not Found']);
}
