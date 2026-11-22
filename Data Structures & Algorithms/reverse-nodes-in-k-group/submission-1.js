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
        let tail =null;

        while (runner||counter===k) {

            // 1 2 3 4 5 6 null 
            // 2 1 3 4 
            // 3 2 1 4
            // 3 2 1 5 4 6 7
            // 3 2 1 6 5 4 7
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
                }else{
                    tail.next = runnerSave.next;
                }
                runnerSave.next = runner;
                tail = tmp;
                counter = 0;
            }
        }

        return res;
    }
}
