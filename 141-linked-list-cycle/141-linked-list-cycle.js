/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {     
    // while (head) {
    //     if (head.val === 'seen') {
    //         return true;
    //     } else {
    //         head.val = 'seen';
    //         head = head.next;
    //     }
    // }
    // return false;
    
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (fast === slow) {
            return true;
        }
        
    }
    return false;
};