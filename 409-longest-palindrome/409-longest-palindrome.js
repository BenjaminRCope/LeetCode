/**
 * @param {string} s
 * @return {number}
 */

const isEven = (num) => {
    return num % 2 === 0;    
}

var longestPalindrome = function(string) {
    let maxLength = 0, keys = {};
    
    for (let char of string) {
        keys[char] = (keys[char] || 0) + 1;
        if (isEven(keys[char])) maxLength += 2;
    }
    
    return string.length > maxLength ? maxLength + 1 : maxLength;
};