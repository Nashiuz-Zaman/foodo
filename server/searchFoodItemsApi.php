<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');


require __DIR__ . '/classes/HandleJSONRequestResponse.php';
require __DIR__ . '/classes/Security.php';
require __DIR__ . '/classes/Database.php';
require __DIR__ . '/classes/FoodItems.php';

$foodItems = new FoodItems();
$foodItems->searchForFoodItem();
