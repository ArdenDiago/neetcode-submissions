class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        front = 0
        length_of_numbers = len(nums)

        target_values = []

        for i in range(length_of_numbers):
            for j in range(i + 1, length_of_numbers):
                if nums[i] + nums[j] == target:
                    target_values = [i,j]    
        
        print(target_values)
        return target_values