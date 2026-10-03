class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const h = height.length - 1;
        var lm = 0, rm = 0, l = 0, r = h, ans = 0;
        while (l < r) {
            lm = Math.max(lm, height[l]);
            rm = Math.max(rm, height[r]);

            if (lm < rm) {
                ans += lm - height[l];
                l += 1;
            } else {
                ans += rm - height[r];
                r -= 1;
            }
        }        

        return ans;        
    }
}
