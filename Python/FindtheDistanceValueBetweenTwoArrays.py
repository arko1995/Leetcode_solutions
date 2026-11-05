class Solution:
    def findTheDistanceValue(self, arr1: list[int], arr2: list[int], d: int) -> int:

        arr2.sort()
        count = 0
        for i in range(len(arr1)):

            left = 0
            right = len(arr2) - 1
            isValid = True

            while left <= right:
                mid = (left + right) // 2

                if arr2[mid] < arr1[i] - d:
                    left = mid + 1
                elif arr2[mid] > arr1[i] + d:
                    right = mid - 1
                else:
                    isValid = False
                    break

            if isValid:
                count += 1

        return count


solution = Solution()

print(solution.findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2))
