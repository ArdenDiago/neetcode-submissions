class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n <= 2) return n;

        var p1 = 2, p2 = 1;

        for (var i = 3; i <= n; i++) {
            let c = p1 + p2;
            p2 = p1;
            p1 = c;
        } 

        return p1;
    }
}
