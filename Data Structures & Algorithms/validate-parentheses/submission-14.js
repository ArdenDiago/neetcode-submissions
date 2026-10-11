class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const len = s.length;

        if (len < 2) {
            return false;
        }

        const parentheses = new Map([
            [")", "("],
            ["}", "{"],
            ["]", "["],
            ["(", ")"],
            ["{", "}"],
            ["[", "]"],
        ]);

        const stack = new Array();
        var p = -1;

        for (var i = 0; i < len; i++) {
            if (p === -1) {
                stack.push(s[i]);
                p++;
            } else if (")}]".includes(s[i])) {
                var key = parentheses.get(s[i]);
                if (key !== stack[p]) {
                    return false;
                } else {
                    stack.pop();
                    p--;
                }

            } else {
                stack.push(s[i]);
                p++;
            }
        }
        console.log(p);
        return p === -1;
    }
}
