<?php 
$link = mysqli_connect("localhost", "root", "", "Contact_Response");
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$name = $_POST['Name'];
$email = $_POST['Email'];
$message = $_POST['Message'];
// attempt insert query execution
$sql = "INSERT INTO Viewers_Query (Name, Email, Message) VALUES ('$name', 
'$email', '$message')";
if(mysqli_query($link, $sql))
    echo "Records added successfully.";
else
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
mysqli_close($link);
?>