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
  return num1 <= 100 && num2 <= 100 && num1 >= num2 ? num1 : num2;
}

// 13. Write a JavaScript program to check if the last digit of the three given positive integers is same.
function sameDigit(num1, num2, num3) {
  return num1 % 10 === num2 % 10 && num2 % 10 === num3 % 10;
}

// 14. Write a JS program to check if a number is multiple of 7 or the sum of the digits is multiple of 7
function check(num) {
  return num % 7 === 0 || ;
  // (num % 10) / 10 === 0; asta asa sa fie ca sa afli ultima cifra?
}

// 15. Write a JavaScript program to capitalize the first letter of each word of a given string.
function capatalize(string) {
  return;
}

// 16. Write a JavaScript program to convert a given number of seconds to hours, minutes and seconds.

// 17. Write a Javascript program to format a big number with comma (567234 => 567,234)

// 18. Write a Javascript program to format an bank account number to be easier to read (put a space every 4 characters)
