class TreeNode:
    def __init__(self, val=0, left=None, right=None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        if not root:
            return 0

        max_count = 0

        def DFS(node, max_value):

            if not node:
                return

            nonlocal max_count
            new_max_value = max(node.val, max_value)

            if node.val >= max_value:
                max_count += 1

            DFS(node.left, new_max_value)
            DFS(node.right, new_max_value)

        DFS(root, root.val)

        return max_count


solution = Solution()

solution.goodNodes([3, 1, 4, 3, null, 1, 5])
