<?php

/**
 *  Database
 * 
 *  Contains the method to connect to the database
 */

class Database
{
  private $databaseHost = 'localhost';
  private $databaseName = 'foodo';
  private $databasePort = '3306';
  private $databaseUser = 'zarif';
  private $databasePassword = 'Jareef66Jareef77';


  /**
   * Get the database connection to the database server
   * 
   * @return PDO connection object
   */
  public function getConn()
  {
    $dsn = "mysql:host={$this->databaseHost};port={$this->databasePort};dbname={$this->databaseName};charset=utf8";

    $conn = new PDO($dsn, $this->databaseUser, $this->databasePassword);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    return $conn;
  }
}
