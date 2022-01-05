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

$mediaFiles = [];
if ($obtained->isOk) {
    $dir = './' . $obtained->dirName;
    $files = is_dir($dir) ? scandir($dir) : [];

    foreach ($files as $file) {
        $fileNameArray = explode(".", $file);
        $ext = end($fileNameArray);
        switch (strtolower($ext)) {
            case "mp4":
            case "mpg":
                array_push($mediaFiles, $file);
                break;
            default:
                break;
        }
    }
}

$output = new OutputData($dir, $mediaFiles, $obtained->isOk ? "ok" : "not");

$output->generateJSON();
