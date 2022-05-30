/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return head;
    let previous = null;
    
    while (head) {
        const next = head.next;
        head.next = previous;
        previous = head;
        head = next;
    }
    return previous;
};