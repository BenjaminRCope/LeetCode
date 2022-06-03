/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
    if (n <= 2) return n;
    let firstPointer = 1;
    let secondPointer = 2;
    
    for (let i = 3; i <= n; i+=1) {
        const current = firstPointer + secondPointer;
        firstPointer = secondPointer;
        secondPointer = current;
    }
    
    return secondPointer;
};