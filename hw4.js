//nilai random
function nilaiRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//minimum
function Min(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

//maximum
function Max(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//total
function Total(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

//rata2
function Average(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

//membuat array
let array = [];
for (let i = 0; i < 100; i++) {
  array.push(nilaiRandom(1, 50));
}

//pembagian array
let genapArray = [];
let ganjilArray = [];
for (let i = 0; i < array.length; i++) {
  if (i % 2 === 0) {
    genapArray.push(array[i]);
  } else {
    ganjilArray.push(array[i]);
  }
}

//perhitungan
let arrayMin = Min(array);
let arrayMax = Max(array);
let arrayTotal = Total(array);
let arrayAverage = Average(array);

let genapArrayMin = Min(genapArray);
let genapArrayMax = Max(genapArray);
let genapArrayTotal = Total(genapArray);
let genapArrayAverage = Average(genapArray);

let ganjilArrayMin = Min(ganjilArray);
let ganjilArrayMax = Max(ganjilArray);
let ganjilArrayTotal = Total(ganjilArray);
let ganjilArrayAverage = Average(ganjilArray);

//menampilkan hasil
console.log("Array: ", array);
console.log("Array Genap: ", genapArray);
console.log("Array Ganjil: ", ganjilArray);
console.log("Nilai minimum pada Array: ", arrayMin);
console.log("Nilai maksimum pada Array: ", arrayMax);
console.log("Total nilai pada Array: ", arrayTotal);
console.log("Rata-rata pada Array: ", arrayAverage);
console.log("Nilai minimum pada Array Genap: ", genapArrayMin);
console.log("Nilai maksimum pada Array Genap: ", genapArrayMax);
console.log("Total nilai pada Array Genap: ", genapArrayTotal);
console.log("Rata-rata pada Array Genap : ", genapArrayAverage);
console.log("Nilai minimum pada Array Ganjil: ", ganjilArrayMin);
console.log("Nilai maksimum pada Array Ganjil: ", ganjilArrayMax);
console.log("Total nilai pada Array Ganjil: ", ganjilArrayTotal);
console.log("Rata-rata pada Array Ganjil : ", ganjilArrayAverage);

// perbandingan array min ganjil genap
if (genapArrayMin > ganjilArrayMin) {
  console.log("Array genap minimum > Array ganjil minimum");
} else if (genapArrayMin < ganjilArrayMin) {
  console.log("Array genap minimum lebih < Array ganjil minimum");
} else {
  console.log("Array genap minimum = Array ganjil minimum");
}

// perbandingan array max ganjil genap
if (genapArrayMax > ganjilArrayMax) {
  console.log("Array genap maximum > Array ganjil maximum");
} else if (genapArrayMax < ganjilArrayMax) {
  console.log("Array genap maximum lebih < Array ganjil maximum");
} else {
  console.log("Array genap maximum = Array ganjil maximum");
}

//perbandingan total aray ganjil genap
if (genapArrayTotal > ganjilArrayTotal) {
  console.log("Array genap total > Array ganjil total");
} else if (genapArrayTotal < ganjilArrayTotal) {
  console.log("Array genap total < Array ganjil total");
} else {
  console.log("Array genap total = Array ganjil total");
}

//perbandingan rata2 aray ganjil genap
if (genapArrayAverage > ganjilArrayAverage) {
  console.log("Array genap rata2 > Array ganjil rata2");
} else if (genapArrayAverage < ganjilArrayAverage) {
  console.log("Array genap rata2 < Array ganjil rata2");
} else {
  console.log("Array genap rata2 = Array ganjil rata2");
}
