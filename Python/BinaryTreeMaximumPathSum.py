class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxPathSum(self, root: TreeNode | None) -> int:

        max_sum = float("-inf")

        def dfs(node):
            if not node:
                return 0

            nonlocal max_sum

            left = max(0, dfs(node.left))
            right = max(0, dfs(node.right))

            current_sum = node.val + left + right

            max_sum = max(max_sum, current_sum)

            return node.val + max(left, right)

        dfs(root)

        return max_sum
