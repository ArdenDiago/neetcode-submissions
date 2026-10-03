class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var lp = 0, rp = heights.length - 1;
        var maxheight = 0;

        while (lp < rp) {
            let w = rp - lp;
            let h = Math.min(heights[lp], heights[rp]);
            let a = w * h;

            maxheight = Math.max(a, maxheight);

            heights[lp] < heights[rp] ? lp += 1 : rp -= 1;
        }

        return maxheight;
    }
}
