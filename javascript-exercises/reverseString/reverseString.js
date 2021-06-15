const reverseString = function(word) {
    let result='';
    for (let index = word.length-1; index >=0; index--) {
        result+=word[index];
        
    }
    return result;
};

module.exports = reverseString;
