<?php
    // 注册的业务逻辑

    // 1. 连接数据库
    include('./conn.php');

    // 2. 接收前端发过来的数据
    // 3. 验证数据(用户名是否存在)
    // 4. 根据验证的结果进行下一步  
    //    用户名存在 提示用户  用户名已存在 跳转回注册页
    //    用户名不存在  将用户提交的数据 写入数据库

    // 2. 接收数据
    $username = $_REQUEST['username'];
    $password = $_REQUEST['password'];
    $email = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];
    $add = $_REQUEST['add'];


    // 3. 查询用户名数据库中是否存在
    $sql = "select * from users where user_name='$username'";

    // 执行sql语句
    $result = $mysqli->query($sql);

    if($result->num_rows>0){ // 判断结果中数据大于0行
        // 说明查询到了这个用户名
        echo '<script>alert("用户名已存在");</script>';
        echo '<script>location.href="http://localhost/vmall.com/src/html/register.html";</script>';
        $mysqli->close();
        die;
    }

    // 将用户传递过来的数据 写入数据库
    $insertUser = "insert into users(user_name,user_password,user_email,user_phone,user_add)values('$username','$password','$email','$phone','$add')";
    // echo $insertUser;

    $res = $mysqli->query($insertUser);

    $mysqli->close();
    
    if($res){
        echo '<script>alert("注册成功");</script>';
        echo '<script>location.href="http://localhost/vmall.com/src/html/login.html";</script>';
    }
    
?>
