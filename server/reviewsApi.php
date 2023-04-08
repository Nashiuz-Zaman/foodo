<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

require __DIR__ . '/classes/Database.php';
require __DIR__ . '/classes/Reviews.php';

$database = new Database();
$databaseConnection = $database->getConn();

$reviews = new Reviews();
$reviews->getAllReviews($databaseConnection);

// closing the database connection
$databaseConnection = null;
