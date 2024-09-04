/**
 * Takes an array of stringified numbers and returns the sum of the numbers
 * @param {Array} arr
 * @returns number
 */
export const sum = (arr) =>
  arr.reduce((acc, curr) => {
    if (Number(curr)) {
      acc = Number(acc) + Number(curr);
    }
    return Number(acc);
  }, 0);

/**
 * Takes in an array of stringified numbers and returns an array of stringified numbers that are less than zero
 * @param {Array} arr
 * @returns Array
 */
export const filterNegatives = (arr) => arr.filter((str) => Number(str) < 0);

/**
 * Takes in a string and returns a string that is embedded between \\ and \n
 * @param {string} str
 * @returns string
 */
export const isolateDelimiter = (str) => /\/\/(.*)\n/.exec(str)?.[1];

/**
 * Takes in a string of numbers with a delimiter embedded at the start and returns the sum of numbers
 * @param {string} string
 * @returns number
 */
export const add = (string) => {
  const delimiter = isolateDelimiter(string) || "\n";
  const negativeValues = filterNegatives(
    string.replaceAll("\n", ",").split(delimiter)
  );
  if (negativeValues.length) {
    /**
     * Negative numbers are not expected
     */
    throw new Error(
      `negative numbers not allowed <${negativeValues.join(",")}>`
    );
  }
  return sum(string.replaceAll("\n", delimiter).split(delimiter));
};
