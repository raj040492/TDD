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
  it("new spaces are converted into commas and summed", () => {
    expect(
      add(`1
    2
    3
    4`)
    ).toEqual(10);
  });
  it("add returns error when negative numbers are passed", () => {
    try {
      add("1,2,3,-4");
    } catch (err) {
      expect(err.message).toEqual("negative numbers not allowed <-4>");
    }
  });
});
