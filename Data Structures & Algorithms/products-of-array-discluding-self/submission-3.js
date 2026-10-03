class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        var sum = new Array(len), sufix = 1;
        sum[0] = 1;

        for (let i = 1; i < len; i++) {
            sum[i] = nums[i - 1] * sum[i -1];
        }

        for (let i = 0; i < len; i++) {
            let rev = (len - 1) - i;
            let currentnum = nums[rev];
            nums[rev] = sum[rev] * sufix;
            sufix *= currentnum;
        }        

        console.log(sum);

        return nums;
    }
}
