// import java.util.HashMap;

class Solution {

    public int[] twoSum(int[] numbers, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        int f = 0,  r = numbers.length - 1;

        while (f < r && numbers[f] + numbers[r] != target) {

            if (numbers[f] + numbers[r] >  target) {
                r--;
            } else {
                f++;
            }
        }

        return new int[]{f + 1, r + 1};
    }
}
