<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of shell
 *
 * @author Brody
 */
include_once("php/database.class.php");
include_once("php/authentication.class.php");
include_once("php/appliance.class.php");
include_once("php/lightbulb.class.php");
include_once("php/user.class.php");
echo "<script src='js/jquery-2.1.4.min.js'></script>";
echo "<link rel='stylesheet' href='css/index.css' type='text/css'>";

ini_set('display_errors', '1');

//$db = new Database();

/**
 * displays info for server
 */
function displayServerInfo(){
    
        echo $_SERVER['SERVER_NAME'];
        foreach($_SERVER as $key => $value){
            echo $key . " : " . $value . "<br>";
        }
        
    }
