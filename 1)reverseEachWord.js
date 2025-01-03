function reverseWordsWithInbuilt(str){
    console.log(arguments.callee.name , str.split(" ").map(eachWord=>eachWord.split("").reverse().join("")).join(" "));   
};

function reverseWordsWithoutInbuilt(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        let reversedWord = '';
        for (const char of words[i]) {
            reversedWord = char + reversedWord;  
        }
        words[i] = reversedWord;
    }
    console.log(arguments.callee.name + ":", words.join(' '));
}

reverseWordsWithInbuilt('I am Sangamesh Bagalkot');
console.log();
reverseWordsWithoutInbuilt("I am Sangamesh Bagalkot"); 













