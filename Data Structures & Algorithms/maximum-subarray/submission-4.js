class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {

        let ms = nums[0], cs = nums[0];

        for (let i = 1; i < nums.length; i++) {
            cs = Math.max(nums[i], cs + nums[i]);
            ms = Math.max(cs, ms);
        }

        return ms;
    }
}
