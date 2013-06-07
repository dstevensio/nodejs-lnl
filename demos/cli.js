respond(process.argv);

function respond (args) {
  if (args.length < 3) {
    console.log('Come on, give me something to work with');
    process.exit(1);
    return;
  }

  if (args[2] == 'help') {
    console.log('You need help!');
    process.exit(0);
    return;
  }
}
