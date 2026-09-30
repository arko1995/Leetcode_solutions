class Solution:
    def maxDepthAfterSplit(self, seq: str) -> list[int]:

        answer = []
        depth = 0

        for c in seq:

            if c == "(":
                depth += 1
                answer.append(depth % 2)

            else:
                answer.append(depth % 2)
                depth -= 1

        return answer


solution = Solution()

print(solution.maxDepthAfterSplit("()(())()"))
