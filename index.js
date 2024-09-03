export const sum = (arr) =>
  arr.reduce((acc, curr) => {
    if (Number(curr) < 0) {
      throw new Error(`negative numbers not allowed <${Number(curr)}>`);
    }
    if (Number(curr)) {
      acc = Number(acc) + Number(curr);
    }
    return Number(acc);
  }, 0);

export const add = (string) => sum(string.replaceAll("\n", ",").split(","));
