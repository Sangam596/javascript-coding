
function countCharacterOccurrencesWithoutInbuilt(str) {
    let occurrences = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        occurrences[char] = occurrences[char] ? occurrences[char] + 1 : 1;
    }
    console.log(arguments.callee.name + ":", occurrences);
}
function countCharacterOccurrencesWithInbuilt(str) {
    const occurrences = str.split('').reduce((acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        return acc;
    }, {});

    console.log(arguments.callee.name + ":", occurrences);
}

// countCharacterOccurrencesWithInbuilt("I am sangamesh bagalkot, practicing javascript");
// console.log();  
// countCharacterOccurrencesWithoutInbuilt("I am sangamesh bagalkot, practicing javascript");


function areAnagramsWithInbuilt(str1, str2) {
    str1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        console.log(arguments.callee.name + ":", false);
        return false;
    }

    const occurrences1 = str1.split('').reduce((acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        return acc;
    }, {});

    const occurrences2 = str2.split('').reduce((acc, curr) => {
        acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
        return acc;
    }, {});
    for (let key in occurrences1) {
        if (!occurrences2.hasOwnProperty(key)) {
            console.log(arguments.callee.name + ":", false);
            return false;
        }
        if (occurrences1[key] !== occurrences2[key]) {
            console.log(arguments.callee.name + ":", false);
            return false;
        }
    }

    for (let key in occurrences2) {
        if (!occurrences1.hasOwnProperty(key)) {
            console.log(arguments.callee.name + ":", false);
            return false;
        }
    }

    console.log(arguments.callee.name + ":", true);
    return true;
}

function areAnagramsWithoutInbuilt(str1, str2) {
    str1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    str2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        console.log(arguments.callee.name + ":", false);
        return false;
    }

    let occurrences1 = {};  
    let occurrences2 = {};  

    for (let i = 0; i < str1.length; i++) {
        let char1 = str1[i];
        let char2 = str2[i];

        occurrences1[char1] = occurrences1[char1] ? occurrences1[char1] + 1 : 1;
        occurrences2[char2] = occurrences2[char2] ? occurrences2[char2] + 1 : 1;
    }

    for (let key in occurrences1) {
        if (!occurrences2.hasOwnProperty(key)) {
            console.log(arguments.callee.name + ":", false);
            return false;
        }
        if (occurrences1[key] !== occurrences2[key]) {
            console.log(arguments.callee.name + ":", false);
            return false;
        }
    }
    for (let key in occurrences2) {
        if (!occurrences1.hasOwnProperty(key)) {
            console.log(arguments.callee.name + ":", false);
            return false;
        }
    }
    console.log(arguments.callee.name + ":", true);
    return true;
}

areAnagramsWithInbuilt("hydroxydesoxycorticosterone!!", "hydroxydeoxycorticosterones...");
console.log();  
areAnagramsWithoutInbuilt("hydroxydesoxycorticosterone!!", "hydroxydesoxycorticosterone...");
