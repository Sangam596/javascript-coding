function sumWithInbuilt(arr) {
    const result = arr.reduce((acc, curr) => acc + curr, 0);
    console.log(arguments.callee.name + ":", result);
    return result;
}

function sumWithoutInbuilt(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(arguments.callee.name + ":", sum);
    return sum;
}


sumWithInbuilt([1, 2, 3, 4, 5]);
console.log();  
sumWithoutInbuilt([1, 2, 3, 4, 5]);