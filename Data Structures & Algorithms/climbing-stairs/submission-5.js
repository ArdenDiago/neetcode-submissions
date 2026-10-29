class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) return n;

        var prev2 = 1, prev1 = 2;

        for (let i = 3; i <= n; i++) {
            let c = prev2 + prev1;
            prev2 = prev1;
            prev1 = c;
        }

        return prev1;
    }
}
