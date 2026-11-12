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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        while(head!==null){
            if(head.val === null){
                return true;
            }
            head.val = null;
            head = head.next;
        }
        return false;
    }
}
