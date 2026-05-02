<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Da Terminal :I</title>
    <link rel='stylesheet' type='text/css' media='screen' href='terminal-styles.css'>
    <!-- <script type="module" src='terminal-mechanics.js' defer></script> -->
    <script type="module" src='viEditor.js' defer></script>
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
            <div class="comments">
                <!-- make this appear as user and old command for this section after someone eventers something -->
            </div>
            <div class="comment-div" style="color: white;width: 100%;">

                <textarea class="user-command-vi"
                    placeholder="~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~&#10;~"
                    style="color: coral; width: 200vw; height: 90vh;"></textarea>
                <!-- the source of where in info came from: https://github.com/beekurt98/terminal-portfolio.git -->
            </div>
            <div id="modeLabel" style="color: white;">[New File]</div>
            <input id="mode-change" style="display: none; color: white;"
                placeholder="something here that will be display non until mode changes">

        </div>
    </div>
</body>

</html>