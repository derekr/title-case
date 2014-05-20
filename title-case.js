var sentence = require('sentence-case');

function upper (str) {
    return String.prototype.toUpperCase.call(str);
}

/**
 * Title case a string.
 *
 * @param  {String} string
 * @return {String}
 */
module.exports = function (string) {
  return sentence(string).replace(/^\w| \w/g, upper);
};
