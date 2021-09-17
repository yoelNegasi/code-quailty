module.exports = { topSalary };

// let user = {
//   name: "John",
//   years: 30,
// };

// let { name, years, isAdmin = false } = user;
// console.log(name, years, isAdmin);

let salaries = {
  // John: 100,
  // Pete: 300,
  // Mary: 250,
};
function topSalary(salaries) {
  if (Object.entries(salaries).length <= 0) return null;
  let name = "";
  return Object.entries(salaries).reduce((acc, cur) => {
    if (cur[1] > acc) {
      acc = cur[1];
      name = cur[0];
    }
    return name;
  }, Object.entries(salaries)[0][1]);
}
console.log(topSalary(salaries));
