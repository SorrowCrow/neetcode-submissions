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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let counter =0;
        let tmp = head;
        while(tmp){
            counter++;
            tmp=tmp.next;
        }

        let remove = counter - (n-1);

        counter =0;
        if(remove-1 === counter){
            head = head.next;
            return head;
        }
        tmp = head;
        while(tmp){
            counter++;
            if(counter === remove-1){
                tmp.next = tmp.next.next;
                return head;
            }
            tmp=tmp.next;
        }
        return head;
    }
}
