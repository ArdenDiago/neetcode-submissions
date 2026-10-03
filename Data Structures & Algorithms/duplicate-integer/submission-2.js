class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hashMap = new Map();
        var flag = 0;

        nums.forEach((i) => {
            if (hashMap.has(i)) {
                flag = 1;
            } else {
                hashMap.set(i, 0);
            }
        });

        return flag === 1;

    }
}
