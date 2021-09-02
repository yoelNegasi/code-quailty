module.exports = {
  isVowel,
  computeSalesCommission,
  balanceOfSavingAccount,
  calcDownPayment,
  convertFahrenheit,
  distanceOfcoordnires,
};

let vowels = ["a", "e", "i", "o", "u"];
function isVowel(char) {
  for (let i = 0; i <= vowels.length; i++) {
    if (char === vowels[i]) {
      return true;
    }
  }
  return false;
}
console.log(isVowel("s"));

function computeSalesCommission(sal, sale) {
  commission = 0;
  if (sal === true) {
    if (sale < 300) {
      return 0;
    } else if (sale >= 300 && sale <= 500) {
      return (1 / 100) * sale;
    } else {
      return (2 / 100) * sale;
    }
  }
  if (sal === false) {
    if (sal === 200) return 6;
    if (sale >= 300 && sale <= 500) {
      return 0.02 * sale;
    } else {
      return 0.03 * sale;
    }
  }
}

function balanceOfSavingAccount(initAmout, annInntialRate, numOfYears) {
  let result = 0;
  for (let i = 0; i <= numOfYears * 12; i++) {
    result = initAmout * (1 + annInntialRate / 100 / 12) ** (12 * numOfYears);
  }
  return result;
}
console.log(balanceOfSavingAccount(100, 10, 1));

function calcDownPayment(cost) {
  let sum;
  if (cost < 50000) {
    return cost * (5 / 100);
  } else if (cost >= 50000 && cost < 100000) {
    sum = 2500 + (10 / 100) * (cost - 50000);
    return sum;
  } else if (cost >= 100000 && cost < 200000) {
    sum = 7500 + (15 / 100) * (cost - 100000);
    return sum;
  } else if (cost > 200000) {
    sum = 5000 + (10 / 100) * (cost - 200000);
    return sum;
  }
}
calcDownPayment(250000);

function convertFahrenheit(fer) {
  let cel = (fer - 32) * (5 / 9);
  return cel;
}
console.log(convertFahrenheit(212));

function distanceOfcoordnires(x1, y1, x2, y2) {
  let d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return d;
}
console.log(distanceOfcoordnires(0, 0, 5, 5));
