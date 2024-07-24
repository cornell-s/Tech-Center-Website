<?php

$name = $_POST["name"];
$age = $_POST["age"];
$email = $_POST["email"];
$phonenumber = $_POST["phonenumber"];
$zipcode = $_POST["zipcode"];
$topic = filter_input(INPUT_POST,"topic", FILTER_VALIDATE_INT);

$host = "localhost";
$dbname = "register_db";
$username = "root";
$password = "";

$conn = mysqli_connect($host, $username, $password, $dbname);

if(mysqli_connect_errno())
{
    die("Connection error: " . mysqli_connect_error());
}   

$sql = "INSERT INTO message (name, age, email, phonenumber, zipcode, topic)
        VALUES(?,?,?,?,?,?)";

$stmt = mysqli_stmt_init($conn);

if (mysqli_stmt_prepare($stmt, $sql))
{
    die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "ssii", $name, $age, $email, $phonenumber, $zipcode, $topic);

mysqli_stmt_execute($stmt);

echo "Record saved";
