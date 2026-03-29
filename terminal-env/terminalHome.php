<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Da Terminal :I</title>
    <link rel='stylesheet' type='text/css' media='screen' href='terminal-styles.css'>
</head>

<body>
    <div class="terminal-div">
        <div class="terminal-header">
            <div class="title">
                <?php
                include("terminalImg.php");
                ?>
                Terminal
            </div>
        </div>
        <div class="terminal-chat">
            <div class="comments"></div>
            <div class="comment-div">
                <!-- make the font colors pop -->
                <label class="green"><span class="yellow">beekurt</span>@user:~<span
                        class="directory red"></span>$</label><input class="user-command">
            </div>
        </div>
    </div>
</body>

</html>