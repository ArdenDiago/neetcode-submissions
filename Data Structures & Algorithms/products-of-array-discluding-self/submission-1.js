class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var sufix = 1;
        var ans = [1];
        const len_array = nums.length -1
        var i;

        for (i = 0; i < len_array; i++) {
            ans.push(sufix * nums[i])
            sufix *= nums[i]
        }

        sufix = 1


        for (i = len_array; i > -1; i--) {
            ans[i] *= sufix
            sufix *= nums[i]
        }      

        return ans
    }
}
