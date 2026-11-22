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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let runner = head;

        let counter = 0;
        const dummy = new ListNode(0, head);
        let runnerSave = dummy;

        while (runner||counter===k) {
            if (counter < k) {
                counter++;
                runner = runner.next;
            } else {
                counter = 1;
                let groupPrev = runnerSave.next; 
                while (counter < k) {
                    let groupTail = groupPrev.next; 
                    groupPrev.next = groupTail.next; 
                    groupTail.next = runnerSave.next; 
                    runnerSave.next = groupTail; 

                    counter++;
                }
                runnerSave = groupPrev;
                counter = 0;
            }
        }

        return dummy.next;
    }
}
