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
        var f = head, r = head;

        while (f && r) {
           f = f.next;
           r = r?.next?.next;

           if (f === r) {
            return true;
           }
        }

        return false;
    }
}
