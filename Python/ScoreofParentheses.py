class Solution:
    def scoreOfParentheses(self, s: str) -> int:
        n = len(s)
        depth = 0
        score = 0

        for i in range(n):

            if s[i] == "(":
                depth += 1
            else:
                depth -= 1

                if s[i - 1] == "(":
                    score += 2**depth

        return score


solution = Solution()
print(solution.scoreOfParentheses("(())"))
