class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        var s = 0, r = nums.length, mid = 0;

        while (s <= r) {
            mid = Math.floor((s + r) / 2);

            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                s = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return -1;
    }
}
