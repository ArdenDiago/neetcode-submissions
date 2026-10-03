class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hm = new Map();
        var l = nums.length;

        for (let i = 0; i < l; i++) {
            let t = target - nums[i];
            if (hm.has(nums[i])) {
                return [hm.get(nums[i]), i];
            }
            hm.set(t, i);
        }

        return []; 
    }
}
