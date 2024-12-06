<?php
header("Access-Control-Allow-Origin: http://localhost:8081/");
header("Access-Control-Allow-Method: GET, POST, PUT, DELETE");
header("Content-Type: application/json");

// Database credentials
$db_server = 'localhost';
$db_user = 'root';
$db_pass = 'christian123456789';
$db_name = 'group2mad';

// Connect to the database
$conn = mysqli_connect("localhost", "root", "christian123456789", "group2mad", "3307");
$database = mysqli_select_db($conn, 'group2mad');

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error()); // Check for connection error
}

$database = mysqli_select_db($conn, 'group2mad'); // Use mysqli_select_db to select the database

if (!$database) {
    die("Database selection failed: " . mysqli_error($conn)); // Check for database selection error
}

// Get input data
$EncodedData = file_get_contents('php://input');
$DecodedData = json_decode($EncodedData, true);

$employeeName = $DecodedData['name'];
$employeePostion = $DecodedData['position'];
$employeeImage = $DecodedData['image'];
$employeeEmail = $DecodedData['email'];
$employeePhone = $DecodedData['phone'];

if (empty($employeeName) || empty($employeePostion) || empty ($employeeImage) || empty($employeeEmail) || empty($employeePhone)) {
    $Message = "Please provide all required fields.";
    $JSONMessage = json_encode($Message);
    echo $JSONMessage;
    mysqli_close($conn);
    exit();
}

$insert_Query = "INSERT INTO tbl_employee (employeeName, employeePosition, employeeImage, employeeEmail, employeePhone)
VALUES ('$employeeName', '$employeePosition', '$employeeImage', '$employeeEmail', '$employeePhone')";

if(mysqli_query($conn, $insert_Query))
{
    $Message = "Employee saved successfully.";
    $JSONMesaage = json_encode($Mesaage);
    echo $JSONMesaage;
}

else
{
    $Message = "Saving unsuccesful. Please try again.";
    $JSONMesaage = json_encode($Mesaage);
    echo $JSONMesaage;
}

mysqli_close($conn);
?>