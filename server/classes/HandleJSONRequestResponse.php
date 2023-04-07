<?php

class HandleJSONRequestResponse
{
  public static function receiveJSONRequest()
  {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $jsonRequestData = file_get_contents('php://input');
      $data = json_decode($jsonRequestData, true);
      return $data;
    }
  }

  public static function sendJSONResponse($response)
  {
    header("Content-Type: application/json");
    $jsonData = json_encode($response);
    echo $jsonData;
  }
}
