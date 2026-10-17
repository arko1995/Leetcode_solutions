class Solution:
    def minSwaps(self, nums: list[int]) -> int:
        n = len(nums)
        arr: list[dict] = []

        for i in range(n):
            num = nums[i]
            sum = 0
            while num > 0:
                sum += num % 10
                num = num // 10
            arr.append({"num": nums[i], "digitSum": sum, "index": i})

        arr.sort(key=lambda a: (a["digitSum"], a["num"]))

        visited = [False] * n
        swap = 0

        for i in range(n):

            if visited[i] or arr[i]["index"] == i:
                continue

            cycleSize = 0
            j = i

            while not visited[j]:
                visited[j] = True
                j = arr[j]["index"]
                cycleSize += 1

            swap += cycleSize - 1
        return swap


solution = Solution()

print(solution.minSwaps([18, 43, 34, 16]))
