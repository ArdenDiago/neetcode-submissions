class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        const len = nums.length
        var gole = len - 1;

        for (var i = len - 1; i >= 0; i--) {
            if (i + nums[i] >= gole) {
                gole = i;
            }
        }

        return gole === 0;
    }
}
