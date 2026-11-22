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
    
    
    diameterOfBinaryTree(root) {
        let maxPath =0; 

        const findLongest = (node)=>{
            if(!node) return 0;
            let leftMaxDepth = findLongest(node.left);
            let rightMaxDepth = findLongest(node.right);
            maxPath = Math.max(maxPath, leftMaxDepth+rightMaxDepth)

            return 1+Math.max(leftMaxDepth, rightMaxDepth)
        }
        findLongest(root);
        return maxPath;
    }
}
