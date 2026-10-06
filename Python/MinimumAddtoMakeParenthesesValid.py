class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        opening_bracket = 0
        closing_bracket = 0

        for ch in s:
            if ch == "(":
                opening_bracket += 1
            elif ch == ")" and opening_bracket > 0:
                opening_bracket -= 1
            else:
                closing_bracket += 1

        return opening_bracket + closing_bracket


solution = Solution()

print(solution.minAddToMakeValid("((("))
