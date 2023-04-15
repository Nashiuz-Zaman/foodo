<?php

class Reviews
{

  public $allReviews = null;
  public function getAllReviews()
  {

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
      $database = new Database();
      $pdoConnection = $database->getConn();

      $sql = 'SELECT * FROM reviews';

      $resultSet = $pdoConnection->query($sql);
      $this->allReviews = $resultSet->fetchAll(PDO::FETCH_ASSOC);

      HandleJSONRequestResponse::sendJSONResponse(['success' => true, 'data' => $this->allReviews]);
      $pdoConnection = null;
    }
  }
}
