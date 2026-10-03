class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        no_ele = 10
        row = {
            i: [-1] * no_ele for i in range(no_ele)
        }

        col = {
            i: [-1] * no_ele for i in range(no_ele)
        }

        box = {
            i: [-1] * no_ele for i in range(no_ele)
        }

        for r in range(9):
            for c in range(9):
                value = board[r][c]

                if value == ".":
                    continue
                
                box_no = (r//3) * 3 + (c//3)

                value = int(value)

                if row[r][value] != -1 or col[c][value] != -1 or box[box_no][value] != -1:
                    return False
                
                row[r][value] = value
                col[c][value] = value
                box[box_no][value] = value

        return True
        