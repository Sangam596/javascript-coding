const reverseString = str => str.split("").reverse().join("");
const isStrPalindrome = str => str===reverseString(str);
console.log(isStrPalindrome("KANAK")); 