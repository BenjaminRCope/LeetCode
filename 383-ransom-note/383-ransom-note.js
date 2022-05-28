/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineArray = magazine.split('');

    for (let i = 0; i < ransomNote.length; i+=1) {
        if (magazineArray.indexOf(ransomNote[i]) === -1) {
            return false;
        } else {
            magazineArray.splice(magazineArray.indexOf(ransomNote[i]), 1);
        }
    }
    return true;
};