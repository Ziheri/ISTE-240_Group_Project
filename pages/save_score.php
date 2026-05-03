<?php
session_start();

header('Content-Type: application/json');

if (!isset($_SESSION['username'])) {
    echo json_encode(['success' => false, 'message' => 'Not logged in']);
    exit();
}

$input = json_decode(file_get_contents('php://input'), true);

if (!isset($input['score']) || !is_numeric($input['score'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid score']);
    exit();
}

$score = (int)$input['score'];
if ($score < 0 || $score > 10) {
    echo json_encode(['success' => false, 'message' => 'Score out of range']);
    exit();
}

include '../dbCon.php';


@$mysqli->query("ALTER TABLE `240UnixGroupProject` ADD COLUMN `score` INT DEFAULT NULL");

$username = $_SESSION['username'];


$stmt = $mysqli->prepare(
    "UPDATE `240UnixGroupProject` SET score = ? WHERE user = ? AND (score IS NULL OR score < ?)"
);
$stmt->bind_param("isi", $score, $username, $score);
$stmt->execute();
$stmt->close();

echo json_encode(['success' => true]);
