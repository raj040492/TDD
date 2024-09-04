import { add, filterNegatives, isolateDelimiter, sum } from "..";
describe("String calculator", () => {
  it("sums the array of numbers", () => {
    expect(sum([1, 2, 3])).toEqual(6);
  });
  it("sums the array of strings", () => {
    expect(sum(["1", "2", "3"])).toEqual(6);
  });
  it("add returns the sum of strings", () => {
    expect(add("//,\n1,2,3,4")).toEqual(10);
  });
  it("new spaces are converted into delimters and summed", () => {
    expect(
      add(`//\n\n1
    2
    3
    4`)
    ).toEqual(10);
  });
  it("Multiple newlines are converted into delimiter and summed", () => {
    expect(
      add(`//\n\n\n1

    2

    3
    
    4`)
    ).toEqual(10);
  });
  it("add returns error when negative numbers are passed", () => {
    try {
      add("//,\n1,2,3,-4");
    } catch (err) {
      expect(err.message).toEqual("negative numbers not allowed <-4>");
    }
  });
  it("filterNegatives filters out the negative values from an array of strings", () => {
    expect(filterNegatives(["1", "2", "3", "-4"])).toEqual(["-4"]);
    expect(filterNegatives(["1", "2", "3", "-4", "-5"])).toEqual(["-4", "-5"]);
    expect(filterNegatives(["1", "2", "3", "4"])).toEqual([]);
  });
  it("add returns error when multiple negative numbers are passed", () => {
    try {
      add("//,\n1,2,3,-4,-5,-6,7");
    } catch (err) {
      expect(err.message).toEqual("negative numbers not allowed <-4,-5,-6>");
    }
  });
  it("extracts the delimiter", () => {
    expect(isolateDelimiter("//;\n1;2;3")).toEqual(";");
    expect(isolateDelimiter("//-\n1-2-3")).toEqual("-");
    expect(isolateDelimiter("//@\n1@2@3")).toEqual("@");
  });
  it("add returns the sum of strings with a different delimiter", () => {
    expect(add("//-\n1-2-3-4")).toEqual(10);
  });
});
