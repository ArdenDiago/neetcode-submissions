class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        var no = 0;

        while (n > 0) {
            if ( n % 2 === 1 ) {
                no++;
            }
            n = Math.floor(n / 2);
        }

        return no;
    }
}
