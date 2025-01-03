function convertFirstCharToUpperCaseUsingInbuilt(str) {
    console.log(arguments.callee.name + ":", str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
}

function convertFirstCharToUpperCaseWithoutInbuilt(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        let firstChar = words[i].charAt(0).toUpperCase();
        let restOfWord = words[i].slice(1);
        words[i] = firstChar + restOfWord;
    }
    console.log(arguments.callee.name + ":", words.join(' '));
}

convertFirstCharToUpperCaseUsingInbuilt("hello world");
console.log(); 
convertFirstCharToUpperCaseWithoutInbuilt("hello world");
