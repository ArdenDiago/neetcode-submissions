class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashSet = new Map();

        for (var i = 0; i < nums.length; i++) {
            let difference = target - nums[i];
            hashSet.set(difference, i)
        }

        for (var i = 0; i < nums.length; i++) {
            if (hashSet.get(nums[i]) && hashSet.get(nums[i]) !== i) {
                return [i, hashSet.get(nums[i])];
            }
        }

        return [];
    }
}
