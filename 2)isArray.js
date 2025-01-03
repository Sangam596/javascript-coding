function isArrayUsingInbuilt(obj) {
    console.log(arguments.callee.name + ":", Array.isArray(obj));
    console.log(" ")
}

function isArrayWithoutInbuilt(obj) {
    console.log(`constructor`,obj.constructor)
    console.log(arguments.callee.name + ":", typeof obj === 'object' && obj.constructor === Array);
}

isArrayUsingInbuilt([1, 2, 3]);
isArrayUsingInbuilt({a: 1});
isArrayWithoutInbuilt("{a: 1}");


isArrayWithoutInbuilt([1, 2, 3]);
isArrayWithoutInbuilt({a: 1});
isArrayWithoutInbuilt("{a: 1}");
isArrayWithoutInbuilt(1);
