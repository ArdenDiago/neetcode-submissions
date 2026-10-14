class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        var l = 0, r = s.length - 1;


        while (l <= r) {
            while ( ! /^[A-Za-z0-9]$/.test(s[l]) && l < r) { l++ }
            while ( ! /^[A-Za-z0-9]$/.test(s[r]) && l < r) { r-- }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }

        return true;
    }
}
