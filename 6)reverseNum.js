function reverseNumUsingInbuilt(num) {
    console.log(arguments.callee.name + ":", +num.toString().split("").reverse().join(''));
}

function reverseNumWithoutInbuilt(num) {
    
let rev=0;
while (num>0) {
    let rem=num%10;
    rev=rev*10 + rem;
    num=Math.floor(num/10);
}
console.log(rev)
    console.log(arguments.callee.name + ":", rev);
}

reverseNumUsingInbuilt(123);
console.log();  // Empty line
reverseNumWithoutInbuilt(123);
