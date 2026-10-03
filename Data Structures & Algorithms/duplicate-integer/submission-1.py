class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        hashMap = {}
        flag = True

        for i in nums:
            if i in hashMap:
                hashMap[i] += 1
            else:
                hashMap[i] = 1
        
        boolArray = list(map(lambda x: True if x==1 else False,hashMap.values()))

        return True if False in boolArray else False