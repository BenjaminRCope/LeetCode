/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length - 1;
    
    while (start <= end) {
        let midpoint = start + Math.floor((end - start) / 2);
        if (nums[midpoint] === target) {
            return midpoint;
        } else if (nums[midpoint] > target) {
            end = midpoint - 1;
        } else if (nums[midpoint] < target) {
            start = midpoint + 1;
        }
    }
    return -1;
};