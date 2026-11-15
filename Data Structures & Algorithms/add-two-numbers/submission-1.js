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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let head = l1;
        let overflow = 0;
        while(l1&&l2){
            let sum = l1.val+l2.val+ (overflow? 1 : 0);
            if(sum>=10){
                overflow = 1;
                sum = sum%10;
            }else{
                overflow = 0;
            }

            l1.val = sum;
            if(!l1.next && l2.next){
                l1.next = new ListNode(0);
            }else if(!l2.next && l1.next){
                l2.next = new ListNode(0);
            }else if (!l1.next&&!l2.next&&overflow===1){
                l1.next = new ListNode(0);
                l2.next = new ListNode(0);
            }

            l1=l1.next;
            l2=l2.next; 
        }

        return head;
    }
}
