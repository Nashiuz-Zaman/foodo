<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

require __DIR__ . '/classes/Database.php';
require __DIR__ . '/classes/FoodItems.php';

$database = new Database();
$databaseConnection = $database->getConn();

$foodItems = new FoodItems();
$foodItems->getAllFoodItems($databaseConnection);

// closing the database connection
$databaseConnection = null;
