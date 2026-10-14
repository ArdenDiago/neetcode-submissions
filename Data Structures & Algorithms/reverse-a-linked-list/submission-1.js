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
        var prev = null;

        while (head !== null) {
            let temp = head.next;
            head.next = prev;
            prev = head;
            head = temp;
        } 

        return prev;
    }
}
