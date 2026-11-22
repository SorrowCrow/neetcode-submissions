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
    maxDepth(root) {
        if(!root){
            return 0;
        }
        let stack = []
        let depth=0;
        let newStack = [root];
        while(newStack.length){
            depth++;
            stack = newStack;
            newStack = [];
            while(stack.length){
                const node = stack.pop();
                if(node.left) newStack.push(node.left);
                if(node.right) newStack.push(node.right);
            }
        }
        return depth;
    }
}
