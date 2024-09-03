export const sum = (arr) =>
  arr.reduce((curr, acc) => {
    if (Number(curr)) {
      acc = Number(acc) + Number(curr);
    }
    return Number(acc);
  }, 0);
