<?php
session_start();
header('Content-Type: application/json');

if (!isset($_SESSION['username'])) {
    echo json_encode(['success' => false, 'message' => 'Not logged in']);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit();
}

$score    = isset($_POST['score']) ? intval($_POST['score']) : 0;
$username = $_SESSION['username'];

include '../dbCon.php';

$stmt = $mysqli->prepare("UPDATE `240UnixGroupProject` SET score = ? WHERE user = ?");
$stmt->bind_param("is", $score, $username);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'DB error: ' . $stmt->error]);
}

$stmt->close();
?>
