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
            for(const [prevMax, n] of level){
                if(n.val>=prevMax)goodNodes++;
                const maxVal = Math.max(prevMax, n.val);
                if(n.left)next.push([maxVal,n.left]);
                if(n.right)next.push([maxVal,n.right]);
            };
            level = next;
        }
        return goodNodes;
    }
}
