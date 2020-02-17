// 1. O functie "equals" care compara 2 valori si returneaza true daca sunt egale si false daca nu sunt egale
function equals(x, y) {
  return x === y;
}

// 2. O functie "compare" care compara 2 valori si returneaza -1 daca primul e mai mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca al doilea
function compare(x, y) {
  if (x < y) return '-1';
  if (x === y) return '0';
  if (x > y) return '1';
}

// 3. O functie "max" care primeste 2 valori si returneaza maximul dintre cele 2
function max(x, y) {
  return x > y ? x : y;
}

// 4. O functie "min" care primeste 2 valori si returneaza minimul dintre cele 2
function min(x, y) {
  return x < y ? x : y;
}

// 5. O functie "suma" care intoarce suma primelor N numere naturale pozitive
function suma(x) {
  let sum = 0;
  for (let i = 0; i <= x; i++) {
    sum += i;
  }
  return sum;
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

// 7. O functie "sumaPrime" care intoarce suma primelor N numere prime (pentru N = 5 trebuie suma 2 + 3 + 5 + 7 + 11)
function sumPrime(x) {
  let primeArr = [];
  let sum = 0;
  for (let i = 2; primeArr.length < x; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }
  for (let j = 0; j < primeArr.length; j++) {
    sum += primeArr[j];
  }
  return sum;
}

function isPrime(x) {
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

// 8. O functie "invers" care primeste un parametru de tip numar si intoarce inversul acestuia (ca numar) (123 => 321)
function invers(x) {
  return (
    x
      .toString()
      .split('')
      .reverse()
      .join('') * 1
  );
}

// 9. O functie "produsImpare" care intoarce produsul primelor N numere impare pozitive
function produsImpare(x) {
  let mltp = 1;
  let counter = 0;
  for (let i = 0; counter <= x * 2; i++) {
    if (i % 2 !== 0) {
      mltp *= i;
    }
    counter++;
  }
  return mltp;
}

// 10. O functie "contains" care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in array
function contains(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return true;
    }
  }
  return false;
}

// 11. O functie "maxArray" care intoarce maximul dintr-un array primit ca parametru
function maxArray(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

// 12. O functie "sumMinMax" care intoarce suma dintre max si min, dintr-un array primit ca parametru
function sumMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max + min;
}

// 13. O functie "hasDuplicates" care verifica daca exista duplicate intr-un array primit ca parametru
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

// 14. O functie "produsPozitive" care intoarce produsul numerelor pozitive intr-un array primit ca parametru
function produsPozitive(arr) {
  let mltp = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      mltp *= arr[i];
    }
  }
  return mltp;
}

// 15. O functie "palindrom" care verifica daca un numar primit ca parametru este palindrom (inversul == originalul, ex: 1234321, 55, 787)
function palindrom(x) {
  return (
    x ==
    x
      .toString()
      .split('')
      .reverse()
      .join('')
  );
}

// 16. O functie "getDigits" care primeste un sir de caractere si returneaza cifrele din sirul respectiv
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

// 17. O functie "getLetters" care primeste un sir de caractere si returneaza doar literele din sirul respectiv
// function getLetters(str) {
//   let strLett = '';
//   let reg = /[\W_]/g;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] * 1 != str[i]) {
//       strLett += str[i].replace(reg, '');
//     }
//   }
//   return strLett;
// }

function getLetters(str) {
  let strLett = '';
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= 'a' && str[i] <= 'z') || (str[i] >= 'A' && str[i] <= 'Z')) {
      strLett += str[i].toLowerCase();
    }
  }
  return strLett;
}

function a(str) {
  let strLett = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() >= 'a' && str[i].toLowerCase() <= 'z') {
      strLett += str[i];
    }
  }
  return strLett;
}

// 18. O functie "getFirst5Letters" care primeste un sir de caractere si returneaza primele 5 litere (daca exista)
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

// 19. O functie "concatenate" care primeste o lista de siruri de caractere si returneaza sirurile concatenate
function concatenate(arr) {
  let concatStr = [];
  for (let i = 0; i < arr.length; i++) {
    concatStr += arr[i];
  }
  return concatStr;
}

// 20. O functie "getAllDigits" care primeste o lista de siruri de caractere si returneaza cifrele din toate sirurile
// function getAllDigits(arr) {
//   let reg = /[\W_a-z]/g;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].replace(reg, '');
//   }
//   return arr;
// }

function getAllDigits(arr) {
  let arrDigits = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] >= '0' && arr[i][j] <= '9') {
        arrDigits.push(arr[i][j]);
      }
    }
  }
  return arrDigits;
}

getAllDigits(['1a2b', '3c4d']);

// 21. O functie "invertAllStrings" care primeste o lista de siruri de caractere si returneaza lista de siruri de caractere inversate
// function invertAllStrings(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i]
//       .split('')
//       .reverse()
//       .join('');
//   }
//   return arr;
// }

function invertAllStrings(arr) {
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i].length - 1; j >= 0; j--) {
      reversed += arr[i][j];
    }
  }
  return reversed;
}

invertAllStrings(['123', 'abc']);

// 22. Calculeaza factorialul unui numar ("factorial")
function factorial(x) {
  let factX = 1;
  for (let i = 1; i <= x; i++) {
    factX *= i;
  }
  return factX;
}

// 23. Calculeaza cel mai mare divizor comun al 2 numere ("cmmdc")
function cmmdc(x, y) {
  console.log('la asta trebuie sa stii putina matematica, iar eu nu stiu');
  console.log(
    'dar ma gandeam sa stocam divizorii fiecaruia in 2 array-uri, iar apoi sa comparam cifrele, returnandu-l pe cel mai mare care se regaseste in ambele'
  );
}

// 24. Calculeaza cel mai mic multiplu comun al 2 numere ("cmmmc")
function cmmmc(x, y) {
  console.log('si la asta trebuie sa stii putina matematica');
  console.log(
    'din ce am citit pe Wiki despre cmmmc, nici nu am idee de cum as putea sa o fac ocolind partea matematica, ca in exercitiul #8 de mai sus'
  );
}

// 25. Returneaza un array care sa contina toti divizorii unui numar (ex pentru 64: trebuie sa returneze [2,4,8,16,32]) ("divizori")
function divizori(x) {
  let xDivs = [];
  for (let i = 2; i <= x; i++) {
    if (x % i === 0) {
      xDivs.push(i);
    }
  }
  return xDivs;
}

// 26. O functie care verifica daca un numar este palindrom (ex: 121, 1234321) ("palindrom")
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

// 27. O functie care sorteaza numerele pare dintr-un sir de numere primit ca parametru. ("sort")
function sort(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens.sort(sortArr);
}

function sortArr(a, b) {
  return a - b;
}

// 28. O functie care primeste ca parametru un array de numere. Aceasta sorteaza ascendent numerele pare si descendent numerele impare, in cadrul aceluiasi array primit ca parameru. ("sortAscDesc")
// function sortAscDesc(arr) {
//   let sorted = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] % 2 === 0) {
//       sorted.unshift(arr[i]);
//     } else {
//       sorted.push(arr[i]);
//     }
//   }
//   return sorted;
// }

function sortAscDesc(arr) {
  let evens = [];
  let odds = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
      evens.unshift(arr[i]);
    } else {
      odds.push(arr[i]);
    }
  }
  return [evens.sort(sortUpArr), odds.sort(sortDownArr)];
}

function sortUpArr(a, b) {
  return a - b;
}

function sortDownArr(a, b) {
  return b - a;
}

sortAscDesc([5, 4, 1, 8, 3, 2, 9, 10, 4, 7]);

// 29. O functie care primeste 2 parametri(un array si un numar). Folosind binary search verificati daca numarul primit ca parametru se gaseste in array. ("binarySearch")
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

// 30. O functie care implementeaza binary search pentru a verifica daca un numar se regaseste intr-un array. Dupa ce se termina executia functiei trebuie sa returnati de cate ori s-a apelat functia recursiv ("countBinarySearch")
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



//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////



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

// functie inversare string
function invers(str) {
  let strInversa = '';
  for (let i = str.length - 1; i >= 0; i--) {
    strInversa += str[i];
  }
  return strInversa;
}

// functie verificare palindrom
function palindrom2(str) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
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

// functie afisare stelute pe randuri
function showStars(number) {
  let star = '';
  for (let i = 1; i <= number; i++) {
    star += '*';
    console.log(star);
  }
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

// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
function sumAll(arr) {
  let sum = 0;
  if (arr[0] <= arr[1]) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
  } else {
    for (let i = arr[1]; i <= arr[0]; i++) {
      sum += i;
    }
  }
  return sum;
}

// Write a Javascript program to format a big number with comma (567234 => 567,234)
function format(n) {
  var str = "";
  for (var i = 0; n > 0; i++) {
    var c = n % 10;
    n = Math.floor(n / 10);
    if (i % 3 === 0 && i !== 0) {
      str = "," + str;
    }
    str = c + str;
  }
  return str;
}

// Write a JavaScript program to check from two given integers, if one is positive and one is negative.
function positiveNegative(a, b) {
  return (a >= 0 && b < 0) || (a < 0 && b >= 0);
}

// Write a JavaScript program check if a given positive number is a multiple of 3 or a multiple of 7.
function multipleOf3Or7(val) {
  return (val % 3 === 0) || (val % 7 === 0);
}

// Write a JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the same range.
function between50And99(a, b) {
  return (a >= 50 && a <= 99) || (b >= 50 && b <= 99);
}

// Write a JavaScript program to check if three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the same range. 
function between50And99_3Numbers(a, b, c) {
  return (a >= 50 && a <= 99) || (b >= 50 && b <= 99) || (c >= 50 && c <= 99);
}

// Write a JavaScript program to find the largest of three given integers.
function largestOf3(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b
  } else {
    return c;
  }
}

// Function that takes 1 parameter: an arrray and returns the largest difference between 2 adjacent values in the array
function maxDiff(arr) {
  var max = arr[0] - arr[1];
  for (var i = 1; i < arr.length - 1; i++) {
    if (max < arr[i] - arr[i + 1]) {
      max = arr[i] - arr[i + 1];
    }
  }
  return max;
}

// Write a JavaScript program to find the maximum possible sum of some of its k consecutive numbers (numbers that follow each other in order) of a given array of positive integers.
function maxOfSum(arr, k) {
  var max = 0;
  for (var i = 0; i < arr.length - k + 1; i++) {
    var sum = 0;
    for (var j = i; j < i + k; j++) {
      sum += arr[j];
    }
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

