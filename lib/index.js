
var math = require('mathjs');

var ERROR_RESPONSE = 'I can\'t calculate that!';

module.exports = function(argv, response) {
  var respBody = ERROR_RESPONSE;

  try {
    var expression = argv.slice(1).join('');
    var result = math.eval(expression);

    if (typeof result === 'function') {
      console.error('Somehow got a function in a scalk eval');
    }
    else {
      respBody = math.eval(expression).toString();
    }
  } catch(e) {
    console.error(e);
  }

  response.end(respBody);
}
