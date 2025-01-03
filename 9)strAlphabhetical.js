function convertToAlphabeticalOrderUsingInbuilt(str) {
    console.log(arguments.callee.name + ":", str.replace(/\s+/g, '').toLowerCase().split('').sort().join(''));
}

function convertToAlphabeticalOrderWithoutInbuilt(str) {
    let arr = str.replace(/\s+/g, '').toLowerCase().split('');
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arguments.callee.name + ":", arr.join(''));
}

convertToAlphabeticalOrderUsingInbuilt("I am sangamesh");
console.log();
convertToAlphabeticalOrderWithoutInbuilt("Bagalkot");
