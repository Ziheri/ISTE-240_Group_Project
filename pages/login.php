<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login or Sign Up</title>
    <link rel="stylesheet" href="../assets/css/styles.css">
</head>
<body>
    <section class="grid_container">
    <img id="mobile_nav" src="../style_content/Nav Bars.png" alt="Mobile Navigation Button">
    <a href="index.html">
        <img id="title_pc" src="../style_content/(Updated V6) Long Title.png" alt="Into to UNIX title card">
        <img id="title_mobile" src="../style_content/(Updated) Group-Project_Logo.png" alt="Into to UNIX title card">
    </a>
    <nav>
        <ul class="navbar">
            <li><a href="index.html">Home</a></li>
            <li><a href="history.html">History</a></li>
            <li><a href="#">Tutorial</a></li>
            <li><a href="#">Quiz</a></li>
        </ul>
        <ul class="navbar-2">
            <li><a href="login.html">Login</a></li>
        </ul>
    </nav>
    <section id="login_overgrid">
        <div>
            <h1 class="login_header">Login</h1>
            <form class="login_grid" id="login_seperate" action="#">
                <input type="text" class="login_form" id="username" name="username" value="Username">
                <input type="text" class="login_form" id="password" name="password" value="Password">
                <input type="submit" class="login_button" id="submit" value="Login">
            </form>
        </div>
        <div>
            <h1 class="login_header">Sign Up</h1>
            <form class="login_grid" action="#">
                <input type="text" class="login_form" id="username" name="username" value="Username">
                <input type="text" class="login_form" id="password" name="password" value="Password">
                <input type="submit" class="login_button" id="submit" value="Sign Up">
            </form>
        </div>
    </section>
</body>
</html>