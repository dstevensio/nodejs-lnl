var ircb = require('ircb');

var irc = ircb({
  host: 'irc.freenode.org',
  secure: true,
  nick: 'nodeIRCbot',
  username: 'nodeIRCbot',
  realName: 'nodeIRCbot'
}, function () {
  console.log('Connected');
  console.log('MOTD:\n');
  console.log(irc.motd);
});
