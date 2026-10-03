class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) == 1 or s[0] in [']', '}', ')'] or s[-1] not in [']', '}', ')']:
            return False

        # create Stack
        stack = []

        pair = {
            "[": "]",
            "{": "}",
            "(": ")",
        }

        for i in s:
            if len(stack) == 0:
                stack.append(i)
            else:
                last = stack[-1]
                
                if last in [']', '}', ')']:
                    return False
                
                x = pair[last] 

                if x == i:
                    stack = stack[:-1]
                else:
                    stack.append(i)
                
                
        return True if len(stack) == 0 else False
        