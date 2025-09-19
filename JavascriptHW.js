//Question 1:
function Reverse(number) {
  return (
    parseInt(number.toString().split("").reverse().join("")) * Math.sign(number)
  );
}

let x = 32243;
let y = 12345;
console.log("Question 1");
console.log(Reverse(x));
console.log(Reverse(y));

//Question 2:
function validP(word) {
  let reversed = word.split("").reverse().join("");

  if (reversed == word) {
    return true;
  } else {
    return false;
  }
}
console.log("Question 2");
let word = "Hello";
let word1 = "madam";
console.log(validP(word));
console.log(validP(word1));

//Question 3:
function combination(word) {}

console.log("Question 3");

function getAllCombinations(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}
const example = "dog";
console.log(getAllCombinations(example).join(", "));

//Question 4:
function alphabeticOrder(word) {
  return word.split("").sort().join("");
}
console.log("Question 4");
let word2 = "hello";

console.log(alphabeticOrder(word2));

//Question 5:
function upperFirst(word) {
  if (!word) {
    return "No word to uppercase first letter";
  } else {
    return word[0].toUpperCase() + word.slice(1);
  }
}
console.log("Question 5");
let word3 = "hello";

console.log(upperFirst(word3));

//Question 6:
function longestWord(word) {
  wordArr = word.split(" ");
  longest = "";
  for (let word of wordArr) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
console.log("Question 6");
sen = "League of Legends";

console.log(longestWord(sen));

//Question 7:
function countVowels(word) {
  vowels = "aeiou";
  count = 0;
  for (let letters of word) {
    if (vowels.includes(letters.toLowerCase())) {
      count += 1;
    }
  }
  return count;
}
console.log("Question 7");
let word4 = "The quick brown fox";
console.log(countVowels(word4));

//Question 8:
function isPrime(number) {
  if (number <= 1) {
    return False;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
console.log("Question 8");
let number2 = 7;
let number3 = 8;
console.log(isPrime(number2));
console.log(isPrime(number3));

//Question 9
function typeOF(variable) {
  return typeof variable;
}
console.log("Question 9");
let number = 123;
let word5 = "hello";
console.log(typeOF(number));
console.log(typeOF(word5));

//Question 10

function rowCol(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      if (i === j) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    matrix.push(row);
  }

  return matrix;
}
console.log("Question 10:");
console.log(rowCol(4));
//Question 11:
function secondBiggestAndSmallest(arr) {
  let newArr = [...arr];
  newArr.sort((a, b) => a - b);
  return {
    secondSmallest: newArr[1],
    secondBiggest: newArr[newArr.length - 2],
  };
}
console.log("Question 11:");
array1 = [1, 2, 3, 4, 5];

console.log(secondBiggestAndSmallest(array1));

//Question 12:
function perfectNumber(number) {
  if (number < 0) {
    return "Please enter a positive integer";
  }

  let div = [];
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      div.push(i);
    }
  }

  let sum = div.reduce((acc, num) => acc + num, 0);
  if (sum === number) {
    return "This is a perfect Number.";
  } else {
    return "This is not a perfect Number.";
  }
}
console.log("Question 12");
console.log(perfectNumber(28));

//Question 13:
function findFactors(number) {
  if (number < 0) {
    return "Please enter a positive integer";
  }
  let factors = [];
  for (let i = 1; i < number + 1; i++) {
    if (number % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}
console.log("Question 13");
console.log(findFactors(90));

//Question 14:
function amountToCoins(number, arr) {
  //Assuming the arr is not always [25, 10, 5, 2, 1]
  arr.sort((a, b) => b - a);
  let result = [];
  for (let coin of arr) {
    let times = Math.floor(number / coin);
    number -= coin * times;
    for (let i = 0; i < times; i++) {
      result.push(coin);
    }
  }
  return result;
}

console.log("Question 14");
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));

//Question 15:
function exponent(b, n) {
  let result = 1;
  for (let i = 1; i < n + 1; i++) {
    result *= b;
  }
  return result;
}

console.log("Question 15:");
console.log(exponent(5, 9));

//Question 16:
function uniqueChar(word) {
  let result = "";
  for (let letter of word) {
    if (!result.includes(letter)) {
      result += letter;
    }
  }

  return result;
}

console.log("Question 16:");
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

//Question 17:
function frequency(word) {
  let hashmap = {};
  for (let letter of word) {
    if (letter === " ") {
      continue;
    }
    hashmap[letter] = (hashmap[letter] || 0) + 1;
  }
  return hashmap;
}
console.log("Question 17:");
let word6 = frequency("Hello");
console.log(word6);

//Question 18:
function binarySearch(arr, target) {
  arr.sort((a, b) => a - b);
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return target + " found";
    } else if (arr[middle] > target) {
      right = middle - 1;
    } else if (arr[middle] < target) {
      left = middle + 1;
    }
  }
  return "Target not found";
}
array2 = [2, 3, 7, 5, 4, 1, 9];
console.log("Question 18:");
console.log(binarySearch(array2, 8));

//Question 19:
function largerNumber(arr, nums) {
  let result = [];
  for (let num of arr) {
    if (num > nums) {
      result.push(num);
    }
  }
  return result;
}

console.log("Question 19:");
console.log(largerNumber([1, 2, 3, 4, 5], 3));

//Question 20:
function randomId(size) {
  let charList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < size; i++) {
    index = Math.floor(charList.length * Math.random());
    result += charList[index];
  }
  return result;
}
console.log("Question 20:");
console.log(randomId(10));

//Question 21:
function subSet(arr, size) {
  let result = [];

  function dfs(i, subset) {
    if (subset.length === size) {
      result.push([...subset]);
      return;
    }
    if (i >= arr.length) {
      return;
    }
    //picking it
    subset.push(arr[i]);
    dfs(i + 1, subset);

    //skipping it
    subset.pop();
    dfs(i + 1, subset);
  }

  dfs(0, []);
  return result;
}
array4 = [1, 2, 3];
console.log("Question 21:");
console.log(subSet(array4, 2));

//Quesiton 22:
function getCount(letter, word) {
  counter = 0;

  for (let l of word.toLowerCase()) {
    if (l === letter.toLowerCase()) {
      counter++;
    }
  }

  return counter;
}

console.log("Question 22:");
console.log(getCount("o", "mircosoft.com"));

//Question 23:
function firstNonRepeat(word) {
  freqMap = {};

  for (let letter of word) {
    freqMap[letter] = (freqMap[letter] || 0) + 1;
  }

  for (let letter of word) {
    if (freqMap[letter] === 1) {
      return letter;
    }
  }
  return "There is no Non repeating letter in the word or sentence";
}

console.log("Question 23:");
console.log(firstNonRepeat("abacddbec"));

//Question 24:
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log("Question 24");
array3 = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log(bubbleSort(array3));

//Question 25:
function longestCountries(arr) {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];
  let result = "";
  for (let country of arr) {
    if (countries.includes(country)) {
      if (country.length > result.length) {
        result = country;
      }
    } else {
      continue;
    }
  }

  if (result === "") {
    return "No country found";
  } else {
    return result;
  }
}
array5 = ["Australia", "Germany", "United States of America"];
console.log("Question 25:");
console.log(longestCountries(array5));
//Question 26:
function longestSubstring(word) {
  let charSet = new Set();
  let left = 0,
    right = 0;
  let result = "";
  let length = 0;
  while (right <= word.length) {
    while (charSet.has(word[right])) {
      left++;
      charSet.delete(word[left]);
    }
    charSet.add(word[right]);
    if (right - left + 1 > length) {
      length = right - left + 1;
      result = word.substring(left, right + 1);
    }
    right++;
  }

  return result;
}

console.log("Question 26:");
console.log(longestSubstring("abcdefgaeioplkjhgfdsaf"));
//Question 27:

function longestPalindrome(sentence) {
  let arr = sentence.split(" ");
  let maxLength = 0;
  let result = "";

  for (let word of arr) {
    if (validP(word)) {
      if (word.length > maxLength) {
        maxLength = word.length;
        result = word;
      }
    }
  }
  return result || "None";
}
console.log("Question 27");
let sentence = "Hello my name LALAL";
console.log(longestPalindrome(sentence));
//Question 28:
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return b - a;
}

function operationAddSub(operation, a, b) {
  return operation(a, b);
}
let a = 2,
  b = 3;
console.log("Question 28");
console.log(operationAddSub(subtract, a, b));
//Question 29:
function getFunctionName(fn) {
  return fn.name;
}
console.log("Question 29:");
console.log(getFunctionName(operationAddSub));
