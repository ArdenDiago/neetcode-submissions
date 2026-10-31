class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var result = "";

        for (let s of strs) {
            result += s.length + "#" + s;
        }

        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        var result = [];
        let i = 0;

        console.log(str);

        while (i < str.length) {
            console.log("st: " + i);

            let j = i;

            while (str[j] !== "#" && j < str.length) {
                j++
            }

            var num = Number(str.substring(i,j));
            var word = str.substring(j + 1, j + 1 + num);
            result.push(word);
            i = (num + j + 1);

            console.log("end: " + i);
        }

        console.log(result);

        return result;
    }
}
