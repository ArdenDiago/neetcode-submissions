class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        var c = 0;

        while (n) {
            n = n & (n - 1)
            c++;
        }

        return c;
    }
}
