class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {

        const numsMap = new Map();
        var maxKey = null;

        nums.forEach((v) => {
            numsMap.set(v, (numsMap.get(v) || 0) + 1);
        });

        console.log(numsMap);

        numsMap.forEach((v, k) => {
            if (maxKey === null) {
                maxKey = k;
            } else if (v > numsMap.get(maxKey)) {
                maxKey = k;
            }
        })

        return maxKey;
    }
}
