function isFullNumberOrDecimalUsingInbuilt(num) {
    console.log(arguments.callee.name + ":", Number.isInteger(num) ? 'Full number' : 'Decimal');
}

function isFullNumberOrDecimalWithoutInbuilt(num) {
    console.log(arguments.callee.name + ":", num === Math.floor(num) ? 'Full number' : 'Decimal');
    console.log("OR: num%1===0", num%1 === 0 ? 'Full number' : 'Decimal');
}

isFullNumberOrDecimalUsingInbuilt(10);
isFullNumberOrDecimalUsingInbuilt(10.5);
console.log( " ")
isFullNumberOrDecimalWithoutInbuilt(10);
isFullNumberOrDecimalWithoutInbuilt(10.5);
