class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if ( n <= 2) return n;

        var perv2 = 1, prev1 = 2;

        for (let i = 3; i <= n; i++) {
            let c = perv2 + prev1;

            perv2 = prev1;
            prev1 = c;
        }

        return prev1;
    }
}
