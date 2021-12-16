<?php
class DirDAO {
    public $isOk;
    public $dirName;

    function __construct($isOk, $dirName) {
        $this -> isOk = $isOk;
        $this -> dirName = $dirName;
    }
}
