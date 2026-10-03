class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        frequencyDict = {}
        for i in nums:
            if i in frequencyDict:
                frequencyDict[i] = frequencyDict[i] + 1
            else:
                frequencyDict[i] = 1
        
        print(frequencyDict)
        frequencyDict = sorted(frequencyDict.items(), key = lambda i : i[1], reverse = True)

        return [frequencyDict[i][0] for i in range(k)]