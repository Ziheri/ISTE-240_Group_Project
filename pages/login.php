<!--Currently unused classes in both forms in all inputs-->
<? 
    include "../assets/files/nav.php";
?>
    <section id="login_overgrid">
        <div>
            <h1 class="login_header">Login</h1>
            <?php if ($login_error): ?>
                <p class="login_error"><?php echo htmlspecialchars($login_error); ?></p>
            <?php endif; ?>
            <form class="login_grid" id="login_seperate" method="POST" action="/pages/login.php">
                <input type="text" class="login_form username" id="username" name="usernamel" placeholder="Username">
                <input type="password" class="login_form password" id="password" name="passwordl" placeholder="Password">
                <input type="submit" class="login_button submit" value="Login">
            </form>
        </div>
        <div>
            <h1 class="login_header">Sign Up</h1>
            <form class="login_grid" method="POST" action="/pages/user_pass_values.php">
                <input type="text" class="login_form username" id="susername" name="usernames" placeholder="Username">
                <input type="password" class="login_form password" id="spassword" name="passwords" placeholder="Password">
                <input type="submit" class="login_button submit" value="Sign Up">
            </form>
        </div>
    </section>
</body>
</html>