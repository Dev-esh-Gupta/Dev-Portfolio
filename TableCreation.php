<?php
$link=mysqli_connect("localhost","root","","Contact_Response");
// Check connection
if ($link === false)
{
    die("Failed to connect to MySQL: " . mysqli_connect_error());
}
// Create table
$sql = "CREATE TABLE Viewers_Query(id INT(4) PRIMARY KEY AUTO_INCREMENT, Name varchar(15) NOT NULL, Email varchar(30) NOT NULL, Message varchar(100))";
if (mysqli_query($link,$sql))
{
echo "Table is successfully Created!";
}
else
{
echo "Error in Executing Command $sql :  " . mysqli_error($link);
}
// Close connection
mysqli_close($link);
?>