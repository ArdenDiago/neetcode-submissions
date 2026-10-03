class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        result = set()

        for i in range(len(nums) - 2):
            target = -nums[i]
            seen = set()

            for j in range(i + 1, len(nums)):
                complement = target - nums[j]

                if complement in seen:
                    result.add((nums[i], complement, nums[j]))
                seen.add(nums[j])
        return list(result)
        