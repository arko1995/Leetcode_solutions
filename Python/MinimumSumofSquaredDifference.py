class Solution:
    def minSumSquareDiff(
        self, nums1: list[int], nums2: list[int], k1: int, k2: int
    ) -> int:

        n = len(nums1)
        k = k1 + k2
        maxDiff = 0
        totalDiff = 0

        diff = []

        for i in range(n):
            d = abs(nums1[i] - nums2[i])

            diff.append(d)

            maxDiff = max(maxDiff, d)
            totalDiff += d

        if k >= totalDiff:
            return 0

        freq = [0] * (maxDiff + 1)

        for d in diff:
            freq[d] += 1

        for d in range(maxDiff, 0, -1):
            if k <= 0:
                break

            operation = min(k, freq[d])

            freq[d] -= operation
            freq[d - 1] += operation
            k -= operation

        result = 0

        for d in range(1, maxDiff + 1):
            result += freq[d] * d * d
        return result


solution = Solution()

solution.minSumSquareDiff([1, 4, 10, 12], [5, 8, 6, 9], 1, 1)
