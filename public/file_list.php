<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
include("./php/OutputData.php");
include("./php/passwords.php");
include("./php/DirDAO.php");
$pass = isset($_POST['pwd']) ? $_POST['pwd'] : "";
$obtained = getDir($pass);

$mp4s = [];
if ($obtained->isOk) {
    $dir = './' . $dirname;
    $files = is_dir($dir) ? scandir($dir) : [];

    foreach ($files as $file) {
        $ext = end(explode(".", $file));
        if (strtolower($ext) == "mp4") {
            array_push($mp4s, $file);
        }
    }
}

$output = new OutputData($mp4s, $obtained->isOk ? "ok" : "not");

$output->generateJSON();
