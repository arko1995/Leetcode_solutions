class Solution:
    def minSumOfLengths(self, arr: list[int], target: int) -> int:

        n = len(arr)
        INF = n + 1
        best = [INF] * n
        sum = 0
        left = 0
        minLength = INF
        answer = INF

        for right in range(n):
            sum += arr[right]

            while sum > target:
                sum -= arr[left]
                left += 1

            if sum == target:
                currentLength = right - left + 1

                if left > 0 and best[left - 1] != INF:
                    answer = min(answer, currentLength + best[left - 1])

                minLength = min(minLength, currentLength)

            best[right] = minLength

        return -1 if answer == n + 1 else answer


solution = Solution()

solution.minSumOfLengths([3, 2, 2, 4, 3], 3)
