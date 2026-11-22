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
        if(k===1){return head;}
        let runner = head;

        let counter = 0;
        let runnerSave = new ListNode(0, head);
        let res = null;

        while (runner||counter===k) {
            if (counter < k) {
                counter++;
                runner = runner.next;
            } else {
                counter = 1;
                let tmp = runnerSave.next; //4
                while (counter < k) {
                    let tmpb = tmp.next; //5
                    tmp.next = tmpb.next; //6
                    tmpb.next = runnerSave.next; //4
                    runnerSave.next = tmpb; //5

                    counter++;
                }
                if(res===null){
                    res = runnerSave.next;
                }
                runnerSave = tmp
                runnerSave.next = runner;
                counter = 0;
            }
        }

        return res;
    }
}
