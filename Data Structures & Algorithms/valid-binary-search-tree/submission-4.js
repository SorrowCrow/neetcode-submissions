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
     * @return {boolean}
     */
    isValidBST(root) {
        let prev = -Infinity;
        const inorder = (node) => {
            if (!node) return true;
            if (!inorder(node.left)) return false; 
            if (node.val <= prev) return false; 
            prev = node.val;
            return inorder(node.right); 
        };
        return inorder(root);
    }
}
