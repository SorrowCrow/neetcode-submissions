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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if(list1===null){
            return list2;
        };
        if(list2===null){
            return list1;
        };
        if(list1.val>list2.val){
            const temp = list1;
            list1 = list2;
            list2 = temp
        };
        const cur = list1;

        while (list1 !== null && list2 !== null) {
            if(list1.next === null || list1.next.val >= list2.val){
                let temp = list1.next;
                list1.next = list2;
                list2 = list2.next;
                list1 = list1.next;
                list1.next = temp;
            }else{
                list1=list1.next;
            }
        }

        return cur;
    }
}
