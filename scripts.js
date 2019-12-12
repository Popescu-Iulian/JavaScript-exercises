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
