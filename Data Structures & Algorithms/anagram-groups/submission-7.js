class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const m = new Map();

        for (let s of strs) {
            const count = new Array(26).fill(0);

            for (let char of s) {
                count[char.charCodeAt() - 97]++;
            }

            const key = count.join("#");

            if (!m.has(key)) {
                m.set(key, []);
            }

            m.get(key).push(s);
        }

        return [...m.values()];
    }
}
