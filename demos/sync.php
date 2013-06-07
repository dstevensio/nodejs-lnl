<?php

$results = databaseQuery("SELECT * FROM massive_table");
var_dump($results);

// Once all results are returned, databaseQuery finishes
// executing and returns the results, then we see them
// printed out.

// But what if that query takes a long time to run?
