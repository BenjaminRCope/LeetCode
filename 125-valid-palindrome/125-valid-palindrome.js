/**
 * @param {string} s
 * @return {boolean}
 */
const isAlphaNumeric = (str) => {
  var code, i, len;

  for (i = 0, len = str.length; i < len; i++) {
    code = str.charCodeAt(i);
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return false;
    }
  }
  return true;
};

var isPalindrome = function(s) {
//     I - string
//     O - boolean
//     C - 1 <= s.length <= 2*10^5
//          s consists of only printable ASCII characters
//     E - non-alphanumeric characters
    
    let forwardString = '', backwardString = '';
    
    for (let i = 0; i < s.length; i+=1) {
        let reverseIndex = s.length - 1 - i;
        if (isAlphaNumeric(s[i])) {
            forwardString += s[i].toLowerCase();
        }
        if (isAlphaNumeric(s[reverseIndex])) {
            backwardString += s[reverseIndex].toLowerCase();
        }
    }
    // console.log(forwardString);
    // console.log(backwardString);
    if (forwardString === backwardString) {
        return true;
    }
    return false;
};