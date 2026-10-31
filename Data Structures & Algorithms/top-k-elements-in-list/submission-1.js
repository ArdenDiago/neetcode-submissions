class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const m = new Map(), result = [], bucket = new Array(nums.length + 1).fill(null).map(() => []);

        for (let n of nums) {
            m.set(n, (m.get(n) | 0) + 1);
        }


        for (let [num, fre] of m) {
            bucket[fre].push(num);
        }

        for (let i = nums.length; i >= -1; i--) {
            for (let x of bucket[i]) {
                result.push(x);
                if (result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
