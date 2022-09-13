<?php

header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Headers:*");

include("connection.php");

$query=$mysqli->prepare('select message from messages');
$query->execute();
$array=$query->get_result();

$response=[];

while($a = $array->fetch_assoc()){
    $response[]=$a;
}

$json=json_encode($response);
echo $json;

?>