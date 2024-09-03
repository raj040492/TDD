export const sum = (arr) =>
  arr.reduce((acc, curr) => {
    if (Number(curr)) {
      acc = Number(acc) + Number(curr);
    }
    return Number(acc);
  }, 0);

export const filterNegatives = (arr) => arr.filter((str) => Number(str) < 0);

export const add = (string) => {
  const negativeValues = filterNegatives(
    string.replaceAll("\n", ",").split(",")
  );
  if (negativeValues.length) {
    throw new Error(
      `negative numbers not allowed <${negativeValues.join(",")}>`
    );
  }
  return sum(string.replaceAll("\n", ",").split(","));
};
