/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
//     iterate over first num
//     iterate over second num
    for (let i = 0; i < nums.length; i+=1) {
        let firstInt = nums[i];
        for(let j = 0; j < nums.length; j+=1) {
            let secondInt = nums[j];
            
            if (firstInt + secondInt === target && i !== j) {
                return [i, j];
            }
        }
    }
};