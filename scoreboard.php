<?php
    include '../../dbcon.php';

    $result = $mysqli->query("SELECT user, score FROM `240UnixGroupProject` ORDER BY score DESC");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Intro To UNIX - Scoreboard</title>
    <link rel="stylesheet" href="assets/css/styles.css">
    <style>
        #scoreboard_container {
            max-width: 700px;
            margin: 3rem auto;
            padding: 0 1rem;
        }

</style>
</head>
<body>
    <div id="scoreboard_container">
        <h1>Scoreboard</h1>
        <table>
            <thead>
                <tr>
                    <th>User</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <?php while($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($row['user']); ?></td>
                        <td><?php echo htmlspecialchars($row['score']); ?></td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
    </div>



</body>
</html>