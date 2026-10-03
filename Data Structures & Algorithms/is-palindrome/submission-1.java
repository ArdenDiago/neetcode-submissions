class Solution {
    public boolean isPalindrome(String s) {
        System.out.println(s);

        // Removing the White Space
       s = s.trim().replaceAll("[^A-Za-z0-9]", "").toLowerCase();

        // string length
        int l = s.length();
        
        int f = 0, r = l-1;

        while (f < r) {
            if (s.charAt(f) != s.charAt(r)) {
                System.out.println(s.charAt(f) + " " + s.charAt(r) + " " + f + " " + r);
                return false;
            }
            f++;
            r--;
        }

        return true;
    }
}
