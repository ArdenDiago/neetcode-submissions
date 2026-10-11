class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const s = new Array();

        for (let i = 0; i < tokens.length; i++) {
            if (/^-?\d+$/.test(tokens[i])) {
                s.push(parseInt(tokens[i]));
            } else {
                let x = s.pop(), y = s.pop(), ans = 0;
                
                switch (tokens[i]) {
                    case "+":
                        ans = x + y;
                        s.push(ans);
                        break;
                    case "-":
                        ans = y - x;
                        s.push(ans);
                        break;
                    case "*":
                        ans = x * y;
                        s.push(ans);
                        break;
                    case "/":
                        ans = Math.trunc(y / x);
                        s.push(ans);
                        break;
                    default:
                        break;
                }
            }
        }

        return s.pop();
    }
}
