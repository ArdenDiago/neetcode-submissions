class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const len = heights.length;
        var l = 0, r = len - 1, ma = 0;

        while (l < r) {
            var h = Math.min(heights[l], heights[r]);
            var w = r - l;
            var a = h * w;

            ma = Math.max(ma, a);

            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return ma;
    }
}
