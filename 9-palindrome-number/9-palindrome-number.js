/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    if (x < 0) return false;
    if (x === 0) return true;
   
    let stringifiedX = x.toString().split('');
    let reverseStringifiedX = x.toString().split('').reverse();
    
    console.log(stringifiedX);
    console.log(reverseStringifiedX);
    return stringifiedX.join() === reverseStringifiedX.join();
};