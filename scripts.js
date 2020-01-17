// afisare i
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// joc fizzbuz numere impare
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('fizzbuzz');
  } else if (i % 3 === 0) {
    console.log('fizz');
  } else if (i % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
}

// suma numerelor pare
let suma = 0;
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    suma += i;
  }
}
console.log(suma);

// functie suma numere pare
function sumaNrPare(numarMax) {
  let suma = 0;
  for (let i = 0; i <= numarMax; i += 2) {
    suma += i;
  }
  return suma;
}

// functie inversare string
function invers(str) {
  let strInversa = '';
  for (let i = str.length - 1; i >= 0; i--) {
    strInversa += str[i];
  }
  return strInversa;
}

// functie verificare palindrom
function invers(str) {
  let strInversa = '';
  for (let i = str.length - 1; i >= 0; i--) {
    strInversa += str[i];
    if (str === strInversa) {
      console.log('palindrom');
    }
  }
  return strInversa;
}

// functie verificare palindrom cu functia inversare string (de mai sus)
function inversa(str) {
  var strInvers = '';
  for (var i = str.length - 1; i >= 0; i--) {
    strInvers += str[i];
  }
  return strInvers;
}

function palindrom(str) {
  return str === inversa(str);
}

// functie viteza si calcul puncte
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoints = 5;
  if (speed < speedLimit + kmPerPoints) {
    console.log('ok');
  } else {
    const points = Math.floor((speed - speedLimit) / kmPerPoints);
    if (points >= 12) {
      console.log('driver license suspended');
    } else {
      console.log('Points: ' + points);
    }
  }
}

// functie afisare numere pare si impare
function showNumber(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i + ' este par');
    } else {
      console.log(i + ' este impar');
    }

    // in loc de if - else:
    // const message = (i % 2 === 0) ? i + " este par" : i + " este impar";
    // console.log(message);
  }
}

// functie afisare numere de elemente truthy
function countTruthy(arr) {
  let count = 0;
  for (let elements of arr) {
    if (elements) {
      count++;
    } else {
    }

    // in loc de if - else:
    // let verify = (elements) ? count++ : "";
  }
  return count;
}

// functie afisare un anumit tip de date dintr-un object
function showSomePropTypes(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'string') {
      console.log(prop + ': ' + obj[prop]);
    }
  }
}

// functie suma numere divizibile cu 3 si 5
function divSum(numar) {
  let sum = 0;
  for (let i = 0; i <= numar; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// functie afisare nota dupa ce face media notelor
function calculateAverage(arr) {
  let sum = 0;
  for (let value of arr) {
    sum += value;
  }
  return sum / arr.length;
}

function showGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) {
    return 'F';
  } else if (average < 70) {
    return 'D';
  } else if (average < 80) {
    return 'C';
  } else if (average < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

// functie afisare stelute pe randuri
function showStars(number) {
  let star = '';
  for (let i = 1; i <= number; i++) {
    star += '*';
    console.log(star);
  }
}

// 1. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. (Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit)
function celsiusToFah(grade) {
  return (celsius = ((grade - 32) * 5) / 9);
}

function fahToCelsius(grade) {
  return (fah = (grade * 9) / 5 + 32);
}

// 2. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.
function doubleDif(num) {
  const fixedNumber = 13;
  return num > fixed ? (num - fixedNumber) * 2 : num - fixed;
}

// 3. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function sum(num1, num2) {
  return num1 === num2 ? num1 + num2 : (num1 + num2) * 3;
}

// 4. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.
function triple(num) {
  const fixedNumber = 19;
  return num > fixedNumber ? (num - fixedNumber) * 3 : num - fixedNumber;
}

// 5. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
function check(num1, num2) {
  return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}

// 6. Write a JavaScript program to check from two given integers, if one is positive and one is negative.
function check(num1, num2) {
  return (num1 >= 0 && num2 < 0) || (num1 < 0 && num2 >= 0);
}

// 7. Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.
function pyString(string) {
  return string[0] + string[1] === 'Py' ? string : 'Py' + string;
}

// 8. Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
function checkPositive(num) {
  return (num >= 0 && num % 3 === 0) || (num >= 0 && num % 7 === 0);
}

// 9. Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
function checkRange(num1, num2) {
  return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

// 10. Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.
function checkRange(num1, num2, num3) {
  return (
    (num1 >= 50 && num1 <= 99) ||
    (num2 >= 50 && num2 <= 99) ||
    (num3 >= 50 && num3 <= 99)
  );
}

// 11. Write a JavaScript program to find the largest of three given integers.
function larger(num1, num2, num3) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

// 12. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
function near(num1, num2) {
  return 100 - num1 < 100 - num2 ? num1 : num2;
}

// 13. Write a JavaScript program to check if the last digit of the three given positive integers is same.
function sameDigit(num1, num2, num3) {
  return num1 % 10 === num2 % 10 && num2 % 10 === num3 % 10;
}

// 14. Write a JS program to check if a number is multiple of 7 or the sum of the digits is multiple of 7
function check(num) {
  32 % 10;
  ('formula asta scoate ultima cifra dintr-un numar');
  return num % 7 === 0;
  // (num % 10) / 10 === 0; asta asa sa fie ca sa afli ultima cifra?
}

// 15. Write a JavaScript program to capitalize the first letter of each word of a given string.
function capatalize(string) {}

// 16. Write a JavaScript program to convert a given number of seconds to hours, minutes and seconds.

// 17. Write a Javascript program to format a big number with comma (567234 => 567,234)

// 18. Write a Javascript program to format an bank account number to be easier to read (put a space every 4 characters)

function medieNote(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let medieFaraTeza = sum / arr.length;
  medieFaraTeza = Math.round(medieFaraTeza * 100) / 100;
}

// function that returns an array containing the position of the largest value from an array given as parameter.
function largestValue(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  var pos = [];
  for (var i = 0; i < arr.length; i++) {
    if (max === arr[i]) {
      pos.push(i);
    }
  }
  return pos;
}
// functions that takes 2 parameters: an array and a number "n". Return the value on the "n"-th largest value in a sorted array.

// function that takes 1 parameter (an array) that returns the largest difference between 2 adjacent values in the array.
function difference(arr) {
  let max = arr[0] - arr[1];
  for (let i = 1; i < arr.length - 1; i++) {
    if (max < arr[i] - arr[i + 1]) {
      max = arr[i] - arr[i + 1];
    }
  }
  return max;
}
let array = [1, 4, 7, 11, 22]; // length = 5 , i = 4

// write a js program to find the maximum possible sum of some of its "k" consecutive numbers (numbers that follow each in order) of a given array of positive integers.

var urare = 'Craciun Fericit!';

var obj = {
  urare: 'La multi ani Ionilor, Ioanelor si Ionutilor',
  key: {
    urare: 'Un An Nou plin de realizari',
    afisareUrare: function() {
      return this.urare;
    }
  }
};

var consola = obj.key.afisareUrare;

console.log(consola());

// 7. Calculeaza factorialul unui numar ("factorial")
function factorial(x) {
  let factX = 1;
  for (let i = 1; i <= x; i++) {
    factX *= i;
  }
  return factX;
}

// 3. O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere (daca exista)
function getFirst5Letter(str) {
  let strLett = '';
  let reg = /[\W_]/g;
  for (let i = 0; i < str.length; i++) {
    if (str[i] * 1 != str[i]) {
      strLett += str[i].replace(reg, '');
    }
  }
  if (strLett.length >= 5) {
    return strLett;
  }
}

// 11. O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom")
function palindrom(x) {
  return (
    x ===
    Number(
      x
        .toString()
        .split('')
        .reverse()
        .join('')
    )
  );
}

// 14. O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch")
function binarySearch(arr, x) {
  let sortedArr = arr.sort(sortArr);
  let low = 0;
  let high = sortedArr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (x == sortedArr[mid]) {
      return true;
    } else if (x < sortedArr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
}

function sortArr(a, b) {
  return a - b;
}

// 15. O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch")
function countBinarySearch(arr, x, low, high) {
  let sortArr = arr.sort(sortingArr);
  if (low === undefined) {
    low = 0;
  }
  if (high === undefined) {
    high = sortArr.length - 1;
  }
  if (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (x == sortArr[mid]) {
      return 0;
    } else if (x < sortArr[mid]) {
      return 1 + countBinarySearch(arr, x, low, mid - 1);
    } else {
      return 1 + countBinarySearch(arr, x, mid + 1, high);
    }
  }
}

function sortingArr(a, b) {
  return a - b;
}

// 1. O functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv
// function getDigits(str) {
//   let strNum = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] * 1 == str[i]) {
//       strNum += str[i];
//     }
//   }
//   return strNum;
// }

function getDigits(str) {
  let strNum = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      strNum += str[i];
    }
  }
  return strNum;
}

// 10. Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori")
function divizori(x) {
  let xDivs = [];
  for (let i = 2; i <= x; i++) {
    if (x % i === 0) {
      xDivs.push(i);
    }
  }
  return xDivs;
}

// 6. O functie "prim" care verifica daca N este numar prim (restul impartirii la 1 si la N == 0)
function prim(x) {
  if (x < 2) {
    return false;
  } else {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        return false;
      }
    }
    return true;
  }
}
