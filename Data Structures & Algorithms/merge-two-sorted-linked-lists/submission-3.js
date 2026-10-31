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
        if (!list1 && list2) {
            return list2;
        } 
        
        if (list1 && !list2) {
            return list1;
        } 
        
        if (list1 === null && list2 === null) {
            return null;
        }

        console.log( list1, list2)

        var head = null, current = null

        while (list1 && list2) {
            if (head === null) {
                if (list1.val > list2.val) {
                    head = list2;
                    current = list2;
                    list2 = list2.next;
                } else {
                    head = list1;
                    current = list1;
                    list1 = list1.next;
                }
            } else {
                if (list1.val > list2.val) {
                    current.next = list2;
                    current = list2;
                    list2 = list2.next;
                } else {
                    current.next = list1;
                    current = list1;
                    list1 = list1.next;
                }
            }
        }

        if (list2) {
            current.next = list2;
        }

        if (list1) {
            current.next = list1;
        }

        return head;
    }
}
