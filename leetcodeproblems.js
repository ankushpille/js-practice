var fizzBuzz = function (n) {
  let res = [];

  for (let i = 1; i <= n; i++) {
    let s = "";

    if (i % 3 === 0) {
      s += "Fizz";
    }
    if (i % 5 === 0) {
      s += "Buzz";
    }

    if (s === "") {
      s = "" + i;
    }

    res.push(s);
  }

  return res;
};

console.log(fizzBuzz(3));

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let rev = 0;

  while (x !== 0) {
    let rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.trunc(x / 10);
  }
  let = [Low, High] = [-(2 ** 31), 2 ** 31 - 1];
  if (rev < Low) return 0;
  if (rev > High) return 0;
  return rev;
};

var checkPerfectNumber = function (num) {
  let sumOfDivisors = 0;

  for (let d = 1; d < num; d++) {
    if (num % d === 0) {
      sumOfDivisors += d;
    }
  }

  return sumOfDivisors === num;
};

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
var findGCD = function (nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  return gcd(min, max);
};

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function findGcdOfArray(a) {
  if (a.length < 0) return 0;
  if (a.length === 1) return a[0];

  let g = gcd(a[0], a[1]);
  for (let e of a) {
    g = gcd(g, e);
  }

  return g;
}
var hasGroupsSizeX = function (deck) {
  let freq = {};
  for (let e of deck) {
    freq[e] = (freq[e] ?? 0) + 1;
  }
  let vals = [...Object.values(freq)];
  let g = findGcdOfArray(vals);
  return g > 1;
};

var minimumBoxes = function (apples, capacities) {
  let appleCount = apples.reduce((sum, x) => sum + x, 0);
  capacities.sort((a, b) => b - a);

  let usedBoxes = 0;
  while (appleCount > 0) {
    let boxCap = capacities.shift();
    usedBoxes++;
    if (appleCount > boxCap) {
      appleCount -= boxCap;
    } else {
      appleCount = 0;
    }
  }

  return usedBoxes;
};

var minimumChairs = function (s) {
  let stack = [];
  let max = 0;

  for (let ch of s) {
    if (ch === "E") {
      stack.push(ch);
      max = Math.max(max, stack.length);
    } else if (ch === "L") {
      stack.pop();
    }
  }

  return max;
};

var addDigits = function (num) {
  while (1) {
    let s = "" + num;
    if (s.length === 1) break;

    let sum = 0;
    for (let ch of s) {
      sum += +ch;
    }

    num = sum;
  }

  return num;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let sum = 0;
  let count = 0;
  for (let e of nums) {
    if (e % 2 === 0) {
      if (e % 3 === 0) {
        sum = sum + e;
        count = count + 1;
      }
    }
  }
  if (count === 0) return 0;
  let average = sum / count;
  return Math.trunc(average);
};

var arrangeCoins = function (totalMoney) {
  let sum = 0;

  for (let d = 1; ; d++) {
    sum += d;

    if (sum > totalMoney) {
      return d - 1;
    }
  }
};

var findDelayedArrivalTime = function (arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24;
};

function getSumAndProductDigit(n) {
  let sod = 0;
  let pod = 1;

  while (n) {
    let lastDigit = n % 10;
    sod = sod + lastDigit;
    pod = pod * lastDigit;
    n = Math.trunc(n / 10);
  }

  return { sod, pod };
}

var checkDivisibility = function (n) {
  let { sod, pod } = getSumAndProductDigit(n);
  let sum = sod + pod;
  return n % sum === 0;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function getfrequency(a) {
  let freq = {};

  for (let e of a) {
    freq[e] = (freq[e] ?? 0) + 1;
  }
  return freq;
}

var checkPrimeFrequency = function (nums) {
  let freq = getfrequency(nums);
  let vals = Object.values(freq);

  for (let f of vals) {
    if (isPrime(f)) {
      return true;
    }
  }
  return false;
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  let s = "" + n + 2 * n + 3 * n;

  if (s.includes("0")) {
    return false;
  }

  for (let i = 1; i <= 9; i++) {
    if (!s.includes("" + i)) {
      return false;
    }

    let set = new Set(s);
    return set.size === s.length;
  }
};

/**
 * @param {number} n
 * @return {number}
 */

var sumAndMultiply = function (n) {
  let s = "" + n;
  let t = "";

  for (let ch of s) {
    if (!ch.includes("0")) {
      t = t + ch;
    }
  }

  if (t === "") {
    t = "0";
  }

  let x = +t;
  let { sod } = getSumAndProductDigit(x);
  return x * sod;
};

function getSumAndProductDigit(n) {
  let sod = 0;
  let pod = 1;

  while (n) {
    let lastDigit = n % 10;
    sod = sod + lastDigit;
    pod = pod * lastDigit;
    n = Math.trunc(n / 10);
  }

  return { sod, pod };
}

/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let n = s.length;
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let ss = s.slice(i, j);
      let set = new Set(ss);

      if (set.size == 1) {
        maxLen = Math.max(maxLen, ss.length);
      } else {
        break;
      }
    }
  }
  return maxLen;
};

/**
 * @param {number} n
 * @return {number[]}
 */
function hasZero(num) {
  let s = "" + num;
  return s.includes("0");
}

var getNoZeroIntegers = function (n) {
  for (let a = 1; a < n; a++) {
    if (!hasZero(a)) {
      let b = n - a;
      if (!hasZero(b)) {
        return [a, b];
      }
    }
  }
};

var countOdds = function (low, high) {
  // if low is even (4)
  if (low % 2 === 0) {
    low++; // 5
  }
  // low is odd (5)

  // if high is even (14)
  if (high % 2 === 0) {
    high--; // 13
  }
  // low is odd (13)

  // impossible case
  if (low > high) {
    return 0;
  }

  // both low and high are odds
  let numOfElementsBetween = high - low + 1;
  let half = numOfElementsBetween / 2;

  let numOfEvens = Math.floor(half);
  let numOfOdds = Math.ceil(half);

  return numOfOdds;
};

var countOdds2222222 = function (low, high) {
  let numOfOdds = 0;

  // if low is even (4)
  if (low % 2 === 0) {
    low++; // 5
  }

  // low is odd (5), jump +2 => all odd numbers
  for (let i = low; i <= high; i += 2) {
    numOfOdds++;
  }

  return numOfOdds;
};

var countOddsTLE = function (low, high) {
  let numOfOdds = 0;

  for (let i = low; i <= high; i++) {
    if (i % 2 === 1) {
      numOfOdds++;
    }
  }

  return numOfOdds;
};

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

var gcdOfOddEvenSums = function (n) {
  let sumOfOdds = 0;
  let sumOfEvens = 0;

  let odd = 1;
  let even = 2;
  for (let count = 1; count <= n; count++) {
    sumOfOdds += odd;
    sumOfEvens += even;

    odd += 2;
    even += 2;
  }

  return gcd(sumOfOdds, sumOfEvens);
};

var gcdOfOddEvenSums22222 = function (n) {
  let sumOfOdds = 0;
  let sumOfEvens = 0;

  for (let count = 1; count <= n; count++) {
    sumOfOdds += 2 * count - 1;
    sumOfEvens += 2 * count;
  }

  return gcd(sumOfOdds, sumOfEvens);
};

var isPalindrome = function (x, options = {}) {
  const { ignoreCase = true, ignoreNonAlphanumeric = true } = options;

  // Convert to string
  let str = String(x);

  // Preprocess the string
  if (ignoreNonAlphanumeric) {
    str = str.replace(/[^a-zA-Z0-9]/g, "");
  }
  if (ignoreCase) {
    str = str.toLowerCase();
  }

  // Check if string reads the same forwards and backwards
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

var isPalindromeNumber = function (x) {
  // Negative numbers are not palindromes
  if (x < 0) return false;

  let original = x;
  let reversed = 0;

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  return original === reversed;
};

var isPalindromeRecursive = function (str, options = {}) {
  const { ignoreCase = true, ignoreNonAlphanumeric = true } = options;

  // Preprocess
  let processed = String(str);
  if (ignoreNonAlphanumeric) {
    processed = processed.replace(/[^a-zA-Z0-9]/g, "");
  }
  if (ignoreCase) {
    processed = processed.toLowerCase();
  }

  // Base cases
  if (processed.length <= 1) return true;

  // Check first and last characters
  if (processed[0] !== processed[processed.length - 1]) {
    return false;
  }

  // Recursive check on substring
  return isPalindromeRecursive(processed.slice(1, -1), {
    ignoreCase: false,
    ignoreNonAlphanumeric: false,
  });
};

// Test cases
console.log("--- Palindrome Check Test Cases ---");
console.log(
  "isPalindrome('A man, a plan, a canal: Panama'):",
  isPalindrome("A man, a plan, a canal: Panama"),
); // true
console.log("isPalindrome('race a car'):", isPalindrome("race a car")); // false
console.log("isPalindrome(121):", isPalindrome(121)); // true
console.log("isPalindrome(-121):", isPalindrome(-121)); // false (due to negative sign)
console.log("isPalindromeNumber(121):", isPalindromeNumber(121)); // true
console.log("isPalindromeNumber(-121):", isPalindromeNumber(-121)); // false
console.log("isPalindromeRecursive('madam'):", isPalindromeRecursive("madam")); // true

var majorityElement = function (nums) {
  let n = nums.length;
  let third = n / 3;

  let freq = {};
  for (let e of nums) {
    freq[e] = (freq[e] ?? 0) + 1;
  }

  let res = [];

  for (let [e, count] of Object.entries(freq)) {
    if (count > third) {
      res.push(+e);
    }
  }
  return res;
};

var maxKDistinct = function (a, k) {
  let set = new Set(a);
  a = [...set];

  a.sort((a, b) => b - a);

  return a.slice(0, k);
};

/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  let freq = {};
  for (let e of s) {
    freq[e] = (freq[e] ?? 0) + 1;
  }

  let evenfreq = Infinity;
  let oddfreq = -Infinity;
  for (let [e, count] of Object.entries(freq)) {
    if (count % 2 === 0) {
      evenfreq = Math.min(evenfreq, count);
    } else {
      oddfreq = Math.max(oddfreq, count);
    }
  }

  let maxdiff = oddfreq - evenfreq;
  return maxdiff;
};

function getmean(a) {
  let n = a.length;
  let total = a.reduce((sum, e) => sum + e, 0);
  return total / n;
}
var trimMean = function (arr) {
  let n = arr.length;

  arr.sort((a, b) => a - b);

  let fivepercentnumbers = (5 / 100) * n;
  while (fivepercentnumbers--) {
    arr.shift();
    arr.pop();
  }

  let res = getmean(arr);
  return res;
};

var arraySign = function (a) {
  if (a.includes(0)) return 0;

  let negativeEleCount = 0;

  for (let e of a) {
    if (e < 0) negativeEleCount++;
  }

  let isProdPositive = negativeEleCount % 2 === 0;
  return isProdPositive === true ? 1 : -1;
};

var arraySign3333333 = function (a) {
  let negativeEleCount = 0;

  for (let e of a) {
    if (e === 0) return 0;
    if (e < 0) negativeEleCount++;
  }

  let isProdPositive = negativeEleCount % 2 === 0;
  return isProdPositive === true ? 1 : -1;
};

var arraySign222 = function (a) {
  function signFunc(x) {
    if (x > 0) return 1;
    if (x < 0) return -1;
    return 0;
  }

  let prod = a.reduce((product, e) => product * e, 1);
  return signFunc(prod);
};

/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function (s) {
  let n = s.length;
  let freq = {};

  for (let e of s) {
    freq[e] = (freq[e] ?? 0) + 1;
  }

  for (let i = 0; i + 1 < n; i++) {
    let e = s[i];
    let next = s[i + 1];
    if (e !== next && freq[e] === +e && freq[next] === +next) {
      return e + next;
    }
  }

  return "";
};

var maxDifference = function (s) {
  let freq = {};
  for (let e of s) {
    freq[e] = (freq[e] ?? 0) + 1;
  }

  let evenfreq = Infinity;
  let oddfreq = -Infinity;

  for (let [e, count] of Object.entries(freq)) {
    if (count % 2 === 0) {
      evenfreq = Math.min(evenfreq, count);
    } else {
      oddfreq = Math.max(oddfreq, count);
    }
  }

  let maxDiff = oddfreq - evenfreq;
  return maxDiff;
};

var maxProduct = function (s) {
  let n = "" + s;
  let digits = n.split("").map((ch) => +ch);
  digits.sort((a, b) => b - a);
  return digits[0] * digits[1];
};

var arraySign = function (nums) {
  let negativeele = 0;

  for (let e of nums) {
    if (e === 0) {
      return 0;
    }
    if (e < 0) {
      negativeele = negativeele + 1;
    }
  }
  let isprodpos = negativeele % 2 === 0 ? 1 : -1;
  return isprodpos;
};

var arraySign222 = function (nums) {
  function signfunc(a) {
    console.log({ a });
    if (a < 0) {
      return -1;
    }
    if (a > 0) {
      return 1;
    }
    if (a === 0) {
      return 0;
    }
  }
  let prod = nums.reduce((prod, e) => prod * e, 1);
  return signfunc(prod);
};

/**
 * @param {number[]} arr
 * @return {number}
 */
function getmean(a) {
  let n = a.length;
  let total = a.reduce((sum, e) => sum + e, 0);
  return total / n;
}

var trimMean = function (arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);

  let fivepercentnumbers = (5 / 100) * n;
  while (fivepercentnumbers--) {
    arr.shift();
    arr.pop();
  }

  let res = getmean(arr);
  return res;
};

function getSumProductDigitsOfDigits(n) {
  let sod = 0;
  let pod = 1;
  while (n) {
    let lastDigit = n % 10;
    pod = pod * lastDigit;
    n = Math.trunc(n / 10);
  }
  return { sod, pod };
}

var smallestNumber = function (n, t) {
  for (let i = n; ; i++) {
    let { pod } = getSumProductDigitsOfDigits(i);
    if (pod % t === 0) {
      return i;
    }
  }
};

var threeConsecutiveOdds = function (arr) {
  let n = arr.length;

  for (let i = 0; i + 2 < n; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
      return true;
    }
  }

  return false;
};

var isThree = function (n) {
  let noofdivisors = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      noofdivisors++;
    }
  }
  return noofdivisors === 3;
};

var tribonacci = function (n) {
  let f = 0;
  if (n === 0) return f;
  n--;

  let s = 1;
  if (n === 0) return s;
  n--;

  let t = 1;
  if (n === 0) return t;

  let next;

  while (n--) {
    next = f + s + t;

    f = s;
    s = t;
    t = next;
  }

  return next;
};

var tribonacci22 = function (n) {
  let f = 0;
  if (n === 0) return f;

  let s = 1;
  if (n === 1) return s;

  let t = 1;
  if (n === 2) return t;

  n = n - 2;

  let next;

  while (n--) {
    next = f + s + t;

    f = s;
    s = t;
    t = next;
  }

  return next;
};

var tribonacci = function (n) {
  let f = 0;
  if (n === 0) return f;
  n--;

  let s = 1;
  if (n === 0) return s;
  n--;

  let t = 1;
  if (n === 0) return t;

  let next;

  while (n--) {
    next = f + s + t;

    f = s;
    s = t;
    t = next;
  }

  return next;
};

var tribonacci22 = function (n) {
  let f = 0;
  if (n === 0) return f;

  let s = 1;
  if (n === 1) return s;

  let t = 1;
  if (n === 2) return t;

  n = n - 2;

  let next;

  while (n--) {
    next = f + s + t;

    f = s;
    s = t;
    t = next;
  }

  return next;
};

//how to write stack
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let stack = new Stack_();
  let maxSize = 0;

  for (let e of s) {
    if (e === "(") {
      stack.push(e);
      maxSize = Math.max(maxSize, stack.size());
    } else if (e === ")") {
      stack.pop();
    }
  }
  return maxSize;
};

class Stack_ {
  arr = [];

  push(item) {
    this.arr.push(item);
  }
  pop() {
    return this.arr.pop();
  }
  top() {
    return this.arr.at(-1);
  }
  size() {
    return this.arr.length;
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  clear() {
    this.arr = [];
  }
  toArray() {
    return this.arr;
  }
  print() {
    console.log(this.arr);
  }
}

var removeOuterParentheses = function (s) {
  let stack = new Stack_();
  let runningS = "";
  let res = "";

  for (let ch of s) {
    runningS += ch;

    if (ch === "(") {
      stack.push(ch);
    } else if (ch === ")") {
      stack.pop();

      if (stack.isEmpty()) {
        res += runningS.slice(1, -1);
        runningS = "";
      }
    }
  }

  return res;
};

var reversePrefix = function (word, ch) {
  let stack = new Stack_();
  let targetFound = false;
  let i = 0;

  for (let char of word) {
    stack.push(char);
    i++;

    if (char === ch) {
      targetFound = true;
      break;
    }
  }
  if (targetFound === false) {
    return word;
  }
  let res = "";
  while (!stack.isEmpty()) {
    res = res + stack.pop();
  }
  return res + word.slice(i);
};

var isValid = function (s) {
  let stack = new Stack_();

  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.isEmpty()) {
        return false;
      }

      let top = stack.top();

      if (
        (char === ")" && top !== "(") ||
        (char === "]" && top !== "[") ||
        (char === "}" && top !== "{")
      ) {
        return false;
      }

      stack.pop();
    }
  }

  return stack.isEmpty();
};

class Queue_ {
  arr = [];
  enqueue(item) {
    this.arr.push(item);
  }
  dequeue() {
    return this.arr.shift();
  }
  front() {
    return this.arr[0];
  }
  size() {
    return this.arr.length;
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  clear() {
    this.arr = [];
  }
  toArray() {
    return this.arr;
  }
  print() {
    console.log(this.arr);
  }
}

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let maxprofit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxprofit) {
      maxprofit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxprofit;
};

let arr = [1, 2, 3, 4, 5];

let max = -Infinity;
for (let e of arr) {
  max = Math.max(max, e);
}
