class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        var prefix = [1], sufix = 1, i = 0;
        const h = nums.length - 1;
        const product = new Array(h).fill(0);

        for (i = 0;  i < h; i++) {
            prefix.push(nums[i] * prefix.at(-1));
        }

        for (i = h ; i >= 0; i--) {
            product[i] = prefix[i] * sufix;
            sufix *= nums[i];
        }

        return product;
    }
}
