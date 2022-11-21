const repeatString = function (myWord, times) {
    if (times < 0) return 'ERROR';
    let word = '';
    for (let iteration = 0; iteration < times; iteration++) {
        word += myWord;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;
