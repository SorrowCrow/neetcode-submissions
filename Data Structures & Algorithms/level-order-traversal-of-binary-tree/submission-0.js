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
     * @return {number[][]}
     */
    levelOrder(root) {
       let obj = {};

       const iterate =(node, level)=>{
            if(node===null)return;
            if(obj.hasOwnProperty(level)){
                obj[level].push(node.val);
            }else{
                obj[level]=[node.val];
            };
            iterate(node.left, level+1);
            iterate(node.right, level+1);
            return;
       }

       iterate(root, 0);
       return Object.keys(obj).map(k=>obj[k]);

    }
}
