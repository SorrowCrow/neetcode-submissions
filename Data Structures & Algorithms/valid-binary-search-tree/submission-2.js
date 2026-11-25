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
        let rootVal = root.val;
        let level = [];
        if (root.left) level.push([null, rootVal, root.left]);
        if (root.right) level.push([rootVal, null, root.right]);

        while (level.length) {
            let next = [];
            for (let [minVal, maxVal, n] of level) {
                if ((maxVal!==null && (n.val >= maxVal)) || (minVal!==null && (n.val <= minVal))) {
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
