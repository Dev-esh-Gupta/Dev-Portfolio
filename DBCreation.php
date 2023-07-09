<?php
$link=mysqli_connect("localhost","root","");
// Check connection
if ($link === false)
{
    die("Failed to connect to MySQL: " . mysqli_connect_error());
}
// Create table
$sql="CREATE DATABASE Contact_Response";
if (mysqli_query($link,$sql))
{
    echo "DataBase is created Successfully!";
}
else
{
    echo "Error in Executing Command $sql :  " . mysqli_error($link);
}
// Close connection
mysqli_close($link);
?>