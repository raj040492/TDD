export const sum = (arr) =>
  arr.reduce((acc, curr) => {
    if (Number(curr)) {
      acc = Number(acc) + Number(curr);
    }
    return Number(acc);
  }, 0);

export const filterNegatives = (arr) => arr.filter((str) => Number(str) < 0);

export const isolateDelimiter = (str) => /\/\/(.*)\n/.exec(str)?.[1];

export const add = (string) => {
  const delimiter = isolateDelimiter(string) || "\n";
  const negativeValues = filterNegatives(
    string.replaceAll("\n", ",").split(delimiter)
  );
  if (negativeValues.length) {
    throw new Error(
      `negative numbers not allowed <${negativeValues.join(",")}>`
    );
  }
  return sum(string.replaceAll("\n", delimiter).split(delimiter));
};
