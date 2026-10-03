class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        if len(tokens) == 1:
            return int(tokens[0])

        numbers = []
        sign = []

        sign_keys = {
            '+': lambda x, y: x + y, 
            '-': lambda x, y: x - y, 
            '*': lambda x, y: x * y, 
            '/': lambda x, y: x / y
        }


        for i in tokens:
            if i in sign_keys.keys():
                val2 = numbers.pop()  
                val1 = numbers.pop()  
        
                out = sign_keys[i](int(val1), int(val2))  
                numbers.append(int(out))
                print(out)
            else:
                numbers.append(i)
        
        return numbers[0]