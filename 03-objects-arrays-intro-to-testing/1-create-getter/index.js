/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */

export function createGetter(path) {
  const arrayKeys = path.split(".");
  return (obj) => {
    return arrayKeys.reduce((acc, value) => {
      return acc ? acc[value] : acc;
    }, obj);
  };
}
