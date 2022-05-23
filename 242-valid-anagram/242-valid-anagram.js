/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    let letterBank = s.split('');

    for (let i = 0; i < t.length; i+=1) {
        let letterIndex = letterBank.indexOf(t[i]);
        
        if (letterIndex !== -1) {
            letterBank.splice(letterIndex, 1);
        } else {
            return false;
        }
    }
    return true;
};