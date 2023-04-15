<?php

class Security
{
  public static function checkForMaliciousData()
  {
    $data = HandleJSONRequestResponse::receiveJSONRequest();
    $data = filter_var(trim(htmlspecialchars(($data['searchTerm']))), FILTER_SANITIZE_FULL_SPECIAL_CHARS,  FILTER_FLAG_STRIP_LOW | FILTER_FLAG_STRIP_HIGH);

    return $data;
  }
}
