<?php

$db_server = 'localhost';
$db_user = 'root';
$db_pass = 'christian123456789';
$db_name = 'employee management system database';

try{
    $conn = mysqli_connect($db_server,$db_user,$db_pass,$db_name);
    echo "success";
}
catch(mysqli_sql_exception){

echo "access denied";

}
 



?>

