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
        let level = [[-Infinity, +Infinity, root]];
        while (level.length) {
            let next = [];
            for (const [minVal, maxVal, n] of level) {
                if (n.val >= maxVal || n.val <= minVal) {
                    return false;
                }
                if (n.left) next.push([minVal, n.val, n.left]);
                if (n.right) next.push([n.val, maxVal, n.right]);
            }
            level = next;
        }
        return true;
    }
}
