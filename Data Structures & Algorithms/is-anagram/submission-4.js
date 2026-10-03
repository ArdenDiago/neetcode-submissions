class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        var lena = s.length, lenb = t.length;

        if (lena != lenb) {
            return false;
        }

        if (lena === 1 && lenb === 1 && s === t) {
            return true;
        }

        const resulta = new Map();
        const resultb = new Map();
        
        for (let i = 0; i < lena; i++) {
          resulta.set(s[i], (resulta.get(s[i]) || 0) + 1);
          resultb.set(t[i], (resultb.get(t[i]) || 0) + 1);
        }

        console.log(resulta, resultb);
        if (resulta.size === resultb.size) {
            
            for (const [k, v] of resulta) {
                if (!resultb.get(k) || resultb.get(k) !== v) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}
