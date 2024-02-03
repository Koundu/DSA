/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let totalSum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        totalSum -= nums[i];

        if (leftSum === totalSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1; // If no pivot index is found
};
