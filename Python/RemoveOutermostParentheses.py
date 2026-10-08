class Solution:
    def removeOuterParentheses(self, s: str) -> str:

        depth = 0
        result = ""

        for ch in s:
            if ch == "(":
                if depth > 0:
                    result += ch
                depth += 1

            else:
                depth -= 1
                if depth > 0:
                    result += ch
        return result


solution = Solution()


print(solution.removeOuterParentheses("(()())(())(()(()))"))
