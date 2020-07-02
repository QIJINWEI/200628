<?php

require "conn.php";


//检测用户名是否存在
if (isset($_POST['username'])) {
    $username = $_POST['username'];
    $result = $conn->query("select * from registry where username='$username'"); //结果有值，用户名存在。
    if ($result->fetch_assoc()) { //结果有值，用户名存在。  1
        echo true;
    } else { //空，可以使用，不存在数据库中
        echo false;
    }
}


//将数据提交到数据库
if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = sha1($_POST['password']);
    $repass=sha1($_POST['repass']);
    $conn->query("insert registry values(null,'$username','$password',NOW())"); //进入数据库
    //设置php跳转,跳转登录页面
    header('location:http://10.31.162.26/huawei-project/src/login.html');
}
