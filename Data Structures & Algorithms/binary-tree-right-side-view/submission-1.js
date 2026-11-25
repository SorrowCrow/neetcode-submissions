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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        const res = [];
        let level = [root]
        while(level.length){
            res.push(level[level.length-1].val);
            const next = [];
            for (const n of level) {
                if (n.left) next.push(n.left);
                if (n.right) next.push(n.right);
            }
            level = next;
        }
        return res;
    }
}
