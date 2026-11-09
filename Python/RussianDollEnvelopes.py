class Solution:
    def maxEnvelopes(self, envelopes: list[list[int]]) -> int:

        envelopes.sort(key=lambda a: (a[0], -a[1]))

        tails = []

        for width, height in envelopes:

            left = 0
            right = len(tails)

            while left < right:
                mid = (left + right) // 2

                if tails[mid] >= height:
                    right = mid
                else:
                    left = mid + 1

            if left == len(tails):
                tails.append(height)
            else:
                tails[left] = height

        return len(tails)


solution = Solution()


print(solution.maxEnvelopes([[5, 4], [6, 4], [6, 7], [2, 3]]))
