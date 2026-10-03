class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        var l = 0, r = nums.length - 1, mid = 0;

        while (l <= r) {
            mid = Math.floor(l + (r - l)/ 2);

            console.log(mid);

            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return -1;
    }
}
