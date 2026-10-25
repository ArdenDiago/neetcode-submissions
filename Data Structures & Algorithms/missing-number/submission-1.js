class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length;
        var maxsum = (n * ( n + 1)) / 2, sum = 0;

        nums.forEach((x) => sum += x);

        return maxsum - sum;
    }
}
