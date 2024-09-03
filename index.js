export const sum = (arr) =>
  arr.reduce((curr, acc) => {
    acc += curr;
    return acc;
  }, 0);
