<?php

require __DIR__ . '/HandleJSONRequestResponse.php';

class FoodItems
{
  public $allFoodItems = null;

  public function getAllFoodItems($databaseConnection)
  {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
      $sql = 'SELECT * 
      FROM food_items';

      $resultSet = $databaseConnection->query($sql);
      $this->allFoodItems = $resultSet->fetchAll(PDO::FETCH_ASSOC);

      HandleJSONRequestResponse::sendJSONResponse(['success' => true, 'data' => $this->allFoodItems]);
    }
  }
}
