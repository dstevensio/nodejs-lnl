var results;

databaseQuery('SELECT * FROM massive_table', function (returnedRows) {
  results = returnedRows;
});

console.log(results);

// console.log will be executed immediately after the databaseQuery function is
// invoked, so that will be an undefined value.

// But, execution is not blocked - so if the query takes a long time,
// the rest of the program can continue. Code accordingly!
