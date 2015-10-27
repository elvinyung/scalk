'use strict';

var math = require('mathjs');

var ERROR_RESPONSE = ':1234: :question: :question:';

var scope = {};

var main = function main(argv, response, logger) {
  var respBody = ERROR_RESPONSE;

  try {
    var expression = argv.slice(1).join('');
    logger.log('Got scalk expression', expression);

    var result = math
      .parse(expression)
      .compile(math)
      .eval(scope);

    if (typeof result === 'function') {
      logger.error('Somehow got a function in a scalk eval');
    }
    else {
      respBody = result.toString();
    }
  } catch(e) {
    logger.error(e);
  }

  response.end(respBody);
};

main.metadata = require('./plugin');

module.exports = main;
