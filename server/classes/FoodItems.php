<?php


class FoodItems
{
  public $allFoodItems = null;
  public $searchResults = null;
  public $searchTerm = '';

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

  public function searchForFoodItem($databaseConnection)
  {
    $this->searchTerm = Security::checkForMaliciousData();

    if ($this->searchTerm !== '') {
      $sql = "SELECT * FROM food_items
      WHERE name REGEXP :searchTerm";

      $stmt = $databaseConnection->prepare($sql);
      $stmt->bindValue(':searchTerm', $this->searchTerm, PDO::PARAM_STR);

      if ($stmt->execute()) {
        $this->searchResults = $stmt->fetchAll(PDO::FETCH_ASSOC);
      }

      HandleJSONRequestResponse::sendJSONResponse(['success' => true, 'data' => $this->searchResults]);
    } else {
      HandleJSONRequestResponse::sendJSONResponse(['success' => true, 'data' => []]);
    }
  }
}
