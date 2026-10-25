class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if ( n <= 2) return n;

        var prev2 = 1;
        var prev1 = 2;

        for (let i = 3; i <= n; i++) {
            let x = prev1 + prev2;

            prev2=prev1;
            prev1=x;
        }

        return prev1;
    }
}
