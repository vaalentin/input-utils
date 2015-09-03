'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.toSpaceCase = toSpaceCase;
exports.toCase = toCase;
exports.toCamelCase = toCamelCase;
var SPACES = /(\s+)/g;

/**
 * @function toSpaceCase
 * @param {string} [input = '']
 * @return {string}
 */

function toSpaceCase() {
  var input = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  return input.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1').replace(/(\d*$)/, ' $1').replace(/(^\s+)|(\s+$)/g, '').replace(/(\s+|_|-)/g, ' ').toLowerCase();
}

/**
 * @function toCase
 * @param  {string} [str = ' ']
 * @return {Function}
 */

function toCase() {
  var str = arguments.length <= 0 || arguments[0] === undefined ? ' ' : arguments[0];

  return function (input) {
    return toSpaceCase(input).replace(SPACES, str);
  };
}

/**
 * @function toUnderscoreCase
 * @param {string} [input = '']
 * @return {string}
 */
var toUnderscoreCase = toCase('_');

exports.toUnderscoreCase = toUnderscoreCase;
/**
 * @function toHyphenCase
 * @param {string} [input = '']
 * @return {string}
 */
var toHyphenCase = toCase('-');

exports.toHyphenCase = toHyphenCase;
/**
 * @function toCamelCase
 * @param {string} [input = '']
 * @return {string}
 */

function toCamelCase() {
  var input = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  return toSpaceCase(input).replace(/\s+(\w)/g, function (m, c) {
    return c.toUpperCase();
  });
}
