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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    findNode(root, v){
        if(!root) return false;
        if(root.val===v) return true;
        
        return this.findNode(root.left, v)||this.findNode(root.right,v);
    }

    lowestCommonAncestor(root, p, q) {
        if(root.val===p.val || root.val===q.val) return root;
        const v1 = this.findNode(root.left, q.val);
        const v2 = this.findNode(root.left, p.val);

        if(v1&&v2){
            return this.lowestCommonAncestor(root.left, p, q)
        }
        if(v2||v1){
            return root
        }

        return this.lowestCommonAncestor(root.right, p, q)
    }
}
