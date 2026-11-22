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
     * @return {TreeNode}
     */
    invertTree(root) {
        if(!root){
            return null;
        };

        let stack = [root];
        while (stack.length){
            const node = stack[stack.length-1];
            [node.left, node.right]= [node.right, node.left];
            stack.pop();
            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
        }
        return root;
    }
}
