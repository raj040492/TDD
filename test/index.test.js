import { add, sum } from "..";
describe("String calculator", () => {
  it("sums the array of numbers", () => {
    expect(sum([1, 2, 3])).toEqual(6);
  });
  it("sums the array of strings", () => {
    expect(sum(["1", "2", "3"])).toEqual(6);
  });
  it("add returns the sum of strings", () => {
    expect(add("1,2,3,4")).toEqual(10);
  });
});
