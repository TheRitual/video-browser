<?php
function getDir($pwd)
{
    $isPasswordOk = true;
    switch ($pwd) {
        case 'abc123': $dirname = 'mp4'; break;
        case 'innyfolder': $dirname = 'inny'; break;
        default:
            $dirname = '___NONE___';
            $isPasswordOk = false;
    }

    return new DirDAO($isPasswordOk, $dirname);
}
