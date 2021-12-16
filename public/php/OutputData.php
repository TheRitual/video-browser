<?php
class OutputData {
    public $filesList;
    public $response;

    function __construct($array, $response) {
        $this -> filesList = $array;
        $this -> response = $response;
    }

    function generateJSON() {
        echo(json_encode($this));
    }
}
?>