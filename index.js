'use strict';

var math = require('mathjs');

var ERROR_RESPONSE = ':1234: :question: :question:';

var main = function main(argv, response, logger) {
  var respBody = ERROR_RESPONSE;

  try {
    var expression = argv.slice(1).join('');
    var result = math.eval(expression);

    if (typeof result === 'function') {
      logger.error('Somehow got a function in a scalk eval');
    }
    else {
      respBody = math.eval(expression).toString();
    }
  } catch(e) {
    logger.error(e);
  }

  response.end(respBody);
};

main.metadata = require('./plugin');

module.exports = main;
