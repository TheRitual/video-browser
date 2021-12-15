<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=utf-8');
    $dir    = './mp4';
    $files = scandir($dir);
    $mp4s = [];
    foreach($files as $file) {
        $ext = end(explode(".", $file));
        if(strtolower($ext) == "mp4") {
            array_push($mp4s ,$file);
        }
    }
    echo(json_encode($mp4s));
?>