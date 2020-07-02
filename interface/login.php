<?php
    // 接口
    // 提供数据和查询数据

    // 登录
    // 1. 连接数据库
    // 2. 接收前端传来的账号密码
    // 3. 在数据中查找 匹配的账号密码
    //    如果找到 表示 登录成功
    //    如果没有找到  提示 用户名或密码错误  跳转页面到 登录页

    include('./conn.php');

    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];

    // sql语句 查询
    $sql = "select * from users where user_name='$username' and user_password='$password'";

    // 执行sql语句
    $res = $mysqli->query($sql);

    if($res->num_rows>0){
        echo '<script>alert("登录成功");</script>';
        echo '<script>location.href="http://localhost/vmall.com/src/html/index.html";</script>';
    }else{
        echo '<script>alert("用户名或密码不正确.");</script>';
        echo '<script>location.href="http://localhost/vmall.com/src/html/login.html";</script>';
    }

    $mysqli->close();
?>
