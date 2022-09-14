<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");

//check if data is not empty
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])){
    
    $name=$_POST['name'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $message=$_POST['message'];

    //sql query to add information to database
    $query=$mysqli->prepare('insert into messages(name,email,phone,message) value (?,?,?,?)');
    $query->bind_param("ssss", $name,$email,$phone,$message);
    $query->execute();

    echo "success";
}
?>