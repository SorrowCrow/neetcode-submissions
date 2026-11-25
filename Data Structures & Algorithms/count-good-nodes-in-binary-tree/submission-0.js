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
    goodNodes(root) {
        if(!root) return 0;
        const rootVal = root.val;
        let level=[[rootVal,root]];
        let goodNodes = 0;
        while(level.length){
            let next = [];
            for(const arr of level){
                const n = arr[1];
                const prevMax = arr[0];
                if(prevMax<=n.val&&n.val>=rootVal){     
                    goodNodes++;
                    if(n.left)next.push([n.val,n.left]);
                    if(n.right)next.push([n.val,n.right]);
                }else{
                    if(n.left)next.push([prevMax,n.left]);
                    if(n.right)next.push([prevMax,n.right]);
                }
            };
            level = next;
        }
        return goodNodes;
    }
}
