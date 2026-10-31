class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var m = new Map();

        for (let s of strs) {
            let st = s.split("").sort().join("");
            
            if (m.has(st)) {
                m.get(st).push(s);
            } else {
                m.set(st, [s]);
            }
        }

        return Array.from(m.values());        
    }
}
