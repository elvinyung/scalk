
var math = require('mathjs');

var ERROR_RESPONSE = 'I can\'t calculate that!';

module.exports = function(argv, response) {
  var respBody;

  try {
    var expression = argv.slice(1).join('');
    respBody = math.eval(expression).toString();
  } catch(e) {
    console.error(e);
    respBody = ERROR_RESPONSE;
  }

  response.end(respBody);
}
