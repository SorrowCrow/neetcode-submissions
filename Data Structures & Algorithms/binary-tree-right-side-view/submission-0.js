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
            level=[...level.flatMap(n=>[n.left, n.right])].filter(n=>n!==null);
        }
        return res;
    }
}
