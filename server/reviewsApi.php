<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

require __DIR__ . '/classes/Database.php';
require __DIR__ . '/classes/Reviews.php';
require __DIR__ . '/classes/HandleJSONRequestResponse.php';

$reviews = new Reviews();
$reviews->getAllReviews();
