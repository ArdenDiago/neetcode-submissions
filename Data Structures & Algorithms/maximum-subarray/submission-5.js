class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        var m = nums[0];
        var c = nums[0];

        for (let i = 1; i < nums.length; i++) {
            c = Math.max(nums[i], (c + nums[i]));
            m = Math.max(m, c);
        }

        return m;
    }
}
