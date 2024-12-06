<?php
header("Access-Control-Allow-Origin: http://localhost:8081/");
header("Access-Control-Allow-Method: GET, POST, PUT, DELETE");
header("Content-Type: application/json");

// Database credentials
$db_server = 'localhost';
$db_user = 'root';
$db_pass = 'christian123456789';
$db_name = 'employee management system database';

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

//Query to fetch employee data
$Query= "SELECT * FROM tbl_employee";
$result = mysqli_query($conn, $query);

$employee = array();
while($row = mysqli_fetch_assoc($result)) {
    $image = isset($row['image']) ? $row['image'] : null;
    if ($image) {
        $imageBase64 = base64_encode($image);
        $row['image'] = 'data:image/jpeg;base64,' . $imageBase64;
} else {
    $row['image'] = $row;
}
    $employee[] = $row;
}

echo json_encode($employee);
mysqli_close($conn);

?>