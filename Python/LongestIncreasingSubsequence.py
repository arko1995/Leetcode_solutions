class Solution:
    def lengthOfLIS(self, nums: list[int]) -> int:

        tails = []

        for x in nums:

            left = 0
            right = len(tails)

            while left < right:

                mid = (left + right) // 2

                if tails[mid] < x:
                    left = mid + 1
                else:
                    right = mid

            if left == len(tails):
                tails.append(x)
            else:
                tails[left] = x

        return len(tails)


solution = Solution()

solution.lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])
