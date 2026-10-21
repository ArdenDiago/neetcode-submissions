class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n <= 2) return n;

        var prev2 = 1;
        var prev1 = 2;

        for (let i = 3; i <= n; i++) {
            let c = prev1 + prev2;

            prev2=prev1;
            prev1=c;
        }

        return prev1;
    }
}
