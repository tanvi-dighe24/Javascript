<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SIGNUP</title>
</head>
<body>
    <h1>SIGNUP PAGE</h1>
    <form action="">
        <input type="text" placeholder="Username" required id="user">
        <input type="password" placeholder="Password" required id="pwd">
        <button type="submit">SignUp</button>
    </form>

    <script>
        let signup = document.forms[0]
        console.log(signup);
        signup.addEventListener('submit',(e)=>{
            e.preventDefault()
            let uname = document.getElementById('user').value;
            let pwd = document.getElementById('pwd').value;
            console.log(uname,pwd);

            localStorage.setItem("username",uname)
            localStorage.setItem('password',pwd)

            alert("Registration succesful...!")

            location.assign('./login.html')
        })
    </script>
</body>
</html> 
