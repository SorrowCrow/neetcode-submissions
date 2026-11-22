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
    maxPath =0; 

    findLongest(root,depth =0){
        if(!root) return depth;
        let leftMaxDepth = root.left ? this.findLongest(root.left)+1:0;
        let rightMaxDepth = root.right ? this.findLongest(root.right)+1:0;
        this.maxPath = Math.max(this.maxPath, leftMaxDepth+rightMaxDepth)

        return Math.max(leftMaxDepth, rightMaxDepth)
    }
    
    diameterOfBinaryTree(root) {
        if(!root) return depth;
        let leftMaxDepth = root.left ? this.findLongest(root.left)+1:0;
        let rightMaxDepth = root.right ? this.findLongest(root.right)+1:0;

        return Math.max(this.maxPath, leftMaxDepth+rightMaxDepth);
    }
}
