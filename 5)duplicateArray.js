function duplicateArrayElementsUsingInbuilt(arr) {
    arr.push(...arr);
    console.log(arguments.callee.name + ":", arr);
}

function duplicateArrayElementsWithoutInbuilt(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        arr.push(arr[i]);
    }
    console.log(arguments.callee.name + ":", arr);
}

duplicateArrayElementsUsingInbuilt([1, 2, 3]);
console.log();  
duplicateArrayElementsWithoutInbuilt([1, 2, 3]);
