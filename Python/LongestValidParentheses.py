class Solution:
    def longestValidParentheses(self, s: str) -> int:
        n = len(s)
        stack = [-1]
        maxLength = 0

        for i in range(n):

            if s[i] == "(":
                stack.append(i)
            else:
                stack.pop()

            if len(stack) == 0:
                stack.append(i)

            currentLength = i - stack[-1]
            maxLength = max(maxLength, currentLength)

        return maxLength


solution = Solution()
print(solution.longestValidParentheses(")()())"))
