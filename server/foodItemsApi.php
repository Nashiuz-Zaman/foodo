<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

require __DIR__ . '/classes/HandleJSONRequestResponse.php';
require __DIR__ . '/classes/Database.php';
require __DIR__ . '/classes/FoodItems.php';

$database = new Database();
$pdoConnection = $database->getConn();

$foodItems = new FoodItems();
$foodItems->getAllFoodItems($pdoConnection);

// closing the database connection
$pdoConnection = null;
