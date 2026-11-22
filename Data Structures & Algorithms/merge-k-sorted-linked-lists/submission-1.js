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
    if (lists.length === 0) return null;
    while (lists.length > 1) {
        const merged = [];
        for (let i = 0; i < lists.length; i += 2) {
            merged.push(this.mergeTwo(lists[i], lists[i + 1] ?? null));
        }
        lists = merged;
    }
    return lists[0];
    }

    mergeTwo(a, b) {
        const dummy = new ListNode();
        let cur = dummy;
        while (a && b) {
            if (a.val <= b.val) { cur.next = a; a = a.next; }
            else { cur.next = b; b = b.next; }
            cur = cur.next;
        }
        cur.next = a || b;
        return dummy.next;
    }
}
