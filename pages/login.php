<?php
session_start();

if (isset($_SESSION['username'])) {
    header('Location: profile.php');
    exit();
}

$login_error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    include '../dbCon.php';

    $username = trim($_POST['usernamel'] ?? '');
    $password = $_POST['passwordl'] ?? '';

    if (empty($username) || empty($password)) {
        $login_error = 'Please fill in both fields.';
    } else {
        $stmt = $mysqli->prepare("SELECT user, pass FROM `240UnixGroupProject` WHERE user = ?");
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($dbUser, $dbPass);
            $stmt->fetch();

            if ($password === $dbPass) {
                $_SESSION['username'] = $dbUser;
                header('Location: profile.php');
                exit();
            } else {
                $login_error = 'Incorrect password.';
            }
        } else {
            $login_error = 'Username not found.';
        }
        $stmt->close();
    }
}
?>
<?php include "../assets/files/nav.php"; ?>
    <section id="login_overgrid">
        <div>
            <h1 class="login_header">Login</h1>
            <?php if ($login_error): ?>
                <p class="login_error"><?php echo htmlspecialchars($login_error); ?></p>
            <?php endif; ?>
            <form class="login_grid" id="login_seperate" method="POST" action="login.php">
                <input type="text" class="login_form username" id="username" name="usernamel" placeholder="Username">
                <input type="password" class="login_form password" id="password" name="passwordl" placeholder="Password">
                <input type="submit" class="login_button submit" value="Login">
            </form>
        </div>
        <div>
            <h1 class="login_header">Sign Up</h1>
            <form class="login_grid" method="POST" action="user_pass_values.php">
                <input type="text" class="login_form username" id="susername" name="usernames" placeholder="Username">
                <input type="password" class="login_form password" id="spassword" name="passwords" placeholder="Password">
                <input type="submit" class="login_button submit" value="Sign Up">
            </form>
        </div>
    </section>
</body>
</html>