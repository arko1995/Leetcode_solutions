class Solution:
    def sumCounts(self, nums: list[int]) -> int:
        n = len(nums)
        MOD = 1000000007

        sum = [0] * (n * 4)
        sq = [0] * (n * 4)
        lazy = [0] * (n * 4)

        def apply(node, left, right, val):
            len = right - left + 1
            sq[node] = (sq[node] + 2 * val * sum[node] + val * val * len) % MOD
            sum[node] = (sum[node] + val * len) % MOD
            lazy[node] = (lazy[node] + val) % MOD

        def push(node, left, right):
            if lazy[node] == 0 or left == right:
                return

            mid = (left + right) // 2

            apply(node * 2, left, mid, lazy[node])
            apply(node * 2 + 1, mid + 1, right, lazy[node])

            lazy[node] = 0

        def update(node, left, right, ql, qr):

            if ql <= left and right <= qr:
                apply(node, left, right, 1)
                return

            push(node, left, right)

            mid = (left + right) // 2

            if ql <= mid:
                update(node * 2, left, mid, ql, qr)
            if qr > mid:
                update(node * 2 + 1, mid + 1, right, ql, qr)

            sum[node] = (sum[node * 2] + sum[node * 2 + 1]) % MOD
            sq[node] = (sq[node * 2] + sq[node * 2 + 1]) % MOD

        lastSeen = dict()
        result = 0
        for i in range(n):
            prev = lastSeen.get(nums[i], -1)

            update(1, 0, n - 1, prev + 1, i)

            result = (result + sq[1]) % MOD
            lastSeen[nums[i]] = i

        return result


solution = Solution()

print(solution.sumCounts([1, 2, 1]))
