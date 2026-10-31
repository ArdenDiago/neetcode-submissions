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
        var f = head, r = head?.next?.next;

        while (f && r) {
            if (r === f) {
                return true;
            } 

            f = f.next;
            r = r?.next?.next;
        }

        return false;
    }
}
