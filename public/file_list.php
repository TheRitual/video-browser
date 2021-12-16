<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json; charset=utf-8');
include("./php/OutputData.php");
include("./php/passwords.php");
include("./php/DirDAO.php");
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, TRUE);
$pass = isset($input['pwd']) ? $input['pwd'] : "";
$obtained = getDir($pass);

$mp4s = [];
if ($obtained->isOk) {
    $dir = './' . $obtained->dirName;
    $files = is_dir($dir) ? scandir($dir) : [];

    foreach ($files as $file) {
        $fileNameArray = explode(".", $file);
        $ext = end($fileNameArray);
        if (strtolower($ext) == "mp4") {
            array_push($mp4s, $file);
        }
    }
}

$output = new OutputData($mp4s, $obtained->isOk ? "ok" : "not");

$output->generateJSON();
