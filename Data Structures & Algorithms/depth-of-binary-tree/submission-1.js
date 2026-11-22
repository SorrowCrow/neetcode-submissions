/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root, depth=0) {
        if(!root) return depth;
        depth++;
        return Math.max(this.maxDepth(root.left, depth), this.maxDepth(root.right, depth));
    }
}
