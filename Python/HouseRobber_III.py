from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def rob(self, root: Optional[TreeNode]) -> int:
        def dfs(node):
            if not node:
                return [0, 0]
            left = dfs(node.left)
            right = dfs(node.right)

            robCurrent = node.val + left[1] + right[1]
            skipCurrent = max(left[0], left[1]) + max(right[1], right[0])

            return [robCurrent, skipCurrent]

        robRoot, skipRoot = dfs(root)
        return max(robRoot, skipRoot)
