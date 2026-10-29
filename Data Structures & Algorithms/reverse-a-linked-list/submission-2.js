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
     * @return {ListNode}
     */
    reverseList(head) {
        var nl = null;

        while (head) {
            let temp = head.next;
            
            head.next = nl;
            nl = head;

            head = temp;
        }

        return nl;
    }
}
