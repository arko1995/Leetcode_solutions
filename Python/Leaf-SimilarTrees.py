class TreeNode:
    def __init__(self, val=0, left=None, right=None) -> None:
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def leafSimilar(self, root1: TreeNode | None, root2: TreeNode | None) -> bool:

        left_tree = []
        right_tree = []

        def dfs(node, array):

            if not node:
                return

            if not node.left and not node.right:
                array.append(node.val)

            dfs(node.left, array)
            dfs(node.right, array)

        dfs(root1, left_tree)
        dfs(root2, right_tree)

        if len(left_tree) != len(right_tree):
            return False

        for i in range(len(left_tree)):

            if left_tree[i] != right_tree[i]:
                return False

        return True


sol = Solution()

sol.leafSimilar(
    [3, 5, 1, 6, 2, 9, 8, None, None, 7, 4],
    [3, 5, 1, 6, 7, 4, 2, None, None, None, None, None, None, 9, 8],
)
