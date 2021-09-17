const assert = require("assert");
const myTopSalary = require("./destructuring");
describe("topSalary", function () {
  it("returns top-paid person", function () {
    let salaries = {
      John: 100,
      Pete: 300,
      Mary: 250,
    };

    assert.equal(myTopSalary.topSalary(salaries), "Pete");
  });

  it("returns null for the empty object", function () {
    console.log("topsalary: ", myTopSalary.topSalary({}));
    assert.strictEqual(topSalary({}), null);
  });
});
