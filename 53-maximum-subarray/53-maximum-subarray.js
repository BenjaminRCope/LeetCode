/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity, currentMax = 0;
    
    nums.forEach((number) => {
        currentMax = Math.max(number, currentMax + number);
        max = Math.max(currentMax, max);
    })
  
    return max;
};