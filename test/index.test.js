import { add, sum } from "..";
describe("String calculator", () => {
  it("sums the array of numbers", () => {
    expect(sum([1, 2, 3])).toEqual(6);
  });
  it("sums the array of strings", () => {
    expect(sum(["1", "2", "3"])).toEqual(6);
  });
  it("add splits the comma separated strings", () => {
    expect(add("1,2,3,4")).toEqual(["1", "2", "3", "4"]);
  });
});
