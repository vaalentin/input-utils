const SPACES = /(\s+)/g;

/**
 * @function toSpaceCase
 * @param {string} [input = '']
 * @return {string}
 */
export function toSpaceCase(input = '') {
  return input
    .replace(/([A-Z]+)/g, ' $1')
    .replace(/([A-Z][a-z])/g, ' $1')
    .replace(/(\d*$)/, ' $1')
    .replace(/(^\s+)|(\s+$)/g, '')
    .replace(/(\s+|_|-)/g, ' ')
    .toLowerCase();
}

/**
 * @function toCase
 * @param  {string} [str = ' ']
 * @return {Function}
 */
export function toCase(str = ' ') {
  return input => {
    return toSpaceCase(input)
      .replace(SPACES, str);
  }
}

/**
 * @function toUnderscoreCase
 * @param {string} [input = '']
 * @return {string}
 */
export const toUnderscoreCase = toCase('_');

/**
 * @function toHyphenCase
 * @param {string} [input = '']
 * @return {string}
 */
export const toHyphenCase = toCase('-');

/**
 * @function toCamelCase
 * @param {string} [input = '']
 * @return {string}
 */
export function toCamelCase(input = '') {
  return toSpaceCase(input)
    .replace(/\s+(\w)/g, (m, c) => c.toUpperCase());
}
