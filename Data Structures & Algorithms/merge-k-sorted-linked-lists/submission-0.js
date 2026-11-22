/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let obj = {};

        for(let i = 0; i<lists.length;i++){
            let node = lists[i];
            while(node!==null){
                if(!obj.hasOwnProperty(node.val)){
                    obj[node.val] = {head:node, tail:node };
                }else {
                    obj[node.val].tail.next = node;
                    obj[node.val].tail = obj[node.val].tail.next;
                }
                let tmp = node.next;
                node.next = null;
                node = tmp;
            }
        }

        let head = null;
        const keySort = Object.keys(obj).sort((a,b)=>a-b);
        
        keySort.forEach((key, index)=>{
            if(index ===0){
                head = obj[key].head;
            }else{
                obj[keySort[index-1]].tail.next = obj[key].head;
            }
        })

        return head;
    }
}
