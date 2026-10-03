class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        var ls = s.length, lt = t.length;

        if (ls !== lt) {
            return false;
        }

        if (ls === 1 && ls === 1 && s === t) {
            return true;
        }

        const ma = new Map();
        const mb = new Map();

        for (let i = 0; i < ls; i++) {
            ma.set(s[i], (ma.get(s[i]) || 0) + 1);
            mb.set(t[i], (mb.get(t[i]) || 0) + 1);
        }

        for (const [k, v] of ma) {
            if (!mb.has(k) || mb.get(k) !== ma.get(k)) {
                return false;
            }
        }

        return true;
    }
}
