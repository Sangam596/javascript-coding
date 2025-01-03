function reverseNumUsingInbuilt(num) {
    return +num.toString().split("").reverse().join('');
}

function isPalindrome(params) {
    return params === reverseNumUsingInbuilt(params);
}

console.log(isPalindrome(121)); // true