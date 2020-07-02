<?php

require "conn.php";

if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    //利用获取的用户名和密码和数据库进行匹配

    $result = $conn->query("select * from registry where username='$username' and password='$password'");

    if ($result->fetch_assoc()) { //成功
        echo true;
    } else { //失败
        echo false;
    }
}

