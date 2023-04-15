<?php


class FoodItems
{
  public $allFoodItems = null;
  public $searchResults = null;
  public $searchTerm = '';

  public function getAllFoodItems()
  {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
      $database = new Database();
      $pdoConnection = $database->getConn();

      $sql = 'SELECT * 
      FROM food_items';

      $resultSet = $pdoConnection->query($sql);
      $this->allFoodItems = $resultSet->fetchAll(PDO::FETCH_ASSOC);

      HandleJSONRequestResponse::sendJSONResponse(['success' => true, 'data' => $this->allFoodItems]);

      $pdoConnection = null;
    }
  }

  public function searchForFoodItem()
  {
    $this->searchTerm = Security::checkForMaliciousData();

    if ($this->searchTerm !== '') {
      $database = new Database();
      $pdoConnection = $database->getConn();


      $sql = "SELECT * FROM food_items
      WHERE name REGEXP :searchTerm";

      $stmt = $pdoConnection->prepare($sql);
      $stmt->bindValue(':searchTerm', $this->searchTerm, PDO::PARAM_STR);

      if ($stmt->execute()) {
        $this->searchResults = $stmt->fetchAll(PDO::FETCH_ASSOC);
      }

      HandleJSONRequestResponse::sendJSONResponse(['success' => true, 'data' => $this->searchResults]);

      $pdoConnection = null;
    } else {
      HandleJSONRequestResponse::sendJSONResponse(['success' => true, 'data' => []]);
    }
  }
}
