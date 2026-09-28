class Solution:
    def maxDepth(self, s: str) -> int:

        maxDepth = 0
        depth = 0

        for i in range(len(s)):

            if s[i] == "(":
                depth += 1
                maxDepth = max(maxDepth, depth)
            if s[i] == ")":
                depth -= 1

        return maxDepth


solution = Solution()

print(solution.maxDepth("()(())((()()))"))
