<?php
class OutputData {
    public $filesList;
    public $response;
    public $dirName;

    function __construct($dirName, $array, $response) {
        $this -> dirName = $dirName;
        $this -> filesList = $array;
        $this -> response = $response;
    }

    function generateJSON() {
        echo(json_encode($this));
    }
}
?>