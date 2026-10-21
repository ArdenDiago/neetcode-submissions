class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        var mp = 0, lp = prices[0];

        for (let i = 1; i < prices.length; i++) {
            lp = Math.min(prices[i], lp);
            var p = prices[i] - lp;
            mp = Math.max(mp, p);
        }

        return mp;
    }
}
