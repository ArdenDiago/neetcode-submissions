class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashTable = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (hashTable.has(nums[i])) {
                return true;
            }
            hashTable.set(nums[i], 0);
        }

        return false;
    }
}
