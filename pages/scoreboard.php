<?php
    session_start();
    include '../dbCon.php';
    include "../assets/files/nav.php";

    $result = $mysqli->query("SELECT user, score FROM `240UnixGroupProject` WHERE score IS NOT NULL ORDER BY score DESC");
?>

    <h1 id="scoreboard_heading">Scoreboard</h1>

    <div id="scoreboard_container">
        <?php if ($result && $result->num_rows > 0): ?>
        <table id="scoreboard_table">
            <thead>
                <tr>
                    <th class="rank_col">#</th>
                    <th>User</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <?php $rank = 1; while($row = $result->fetch_assoc()): ?>
                    <tr>
                        <td class="rank_col"><?php echo $rank++; ?></td>
                        <td><?php echo htmlspecialchars($row['user']); ?></td>
                        <td><?php echo htmlspecialchars($row['score']); ?></td>
                    </tr>
                <?php endwhile; ?>
            </tbody>
        </table>
        <?php else: ?>
            <p id="no_scores">No scores have been recorded yet. Take the quiz to be the first!</p>
        <?php endif; ?>
    </div>
</body>
</html>