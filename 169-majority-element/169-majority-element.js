/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
//     linear time, but not constant space
    
    let threshold = Math.floor(nums.length / 2) + 1;
    let numTracker = {};
    let result = 0;
    
    nums.forEach((number) => {
        
        if (numTracker[number]) {
            numTracker[number] += 1;
        } else {
            numTracker[number] = 1;
        }
        if (numTracker[number] >= threshold) {
            result = number;
        }
    })
    return result;
};