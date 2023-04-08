<?php

require __DIR__ . '/HandleJSONRequestResponse.php';

class Reviews
{

  public $allReviews = null;
  public function getAllReviews($databaseConnection)
  {

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {

      $sql = 'SELECT * FROM reviews';

      $resultSet = $databaseConnection->query($sql);
      $this->allReviews = $resultSet->fetchAll(PDO::FETCH_ASSOC);

      HandleJSONRequestResponse::sendJSONResponse(['success' => true, 'data' => $this->allReviews]);
    }
  }
}
