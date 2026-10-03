class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        var mp = 0; // maximum profit
        var lp = prices[0]; // lowest price

        prices.forEach((v, i) => {
            var cp = v - lp // current profit

            mp = Math.max(cp, mp);
            lp = Math.min(lp, v);
        })

        return mp;
    }
}
