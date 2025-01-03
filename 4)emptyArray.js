function emptyArrayUsingInbuilt(arr) {
    arr.length = 0;
    console.log(arguments.callee.name + ":", arr);
}

emptyArrayUsingInbuilt([1, 2, 3]);
emptyArrayWithoutInbuilt([1, 2, 3]);
