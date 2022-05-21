/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    if (!list1 || !list2) {
        return list1 || list2
    }

    let mergedLinkedList;
    if (list1.val <= list2.val) {
        mergedLinkedList = list1;
        mergedLinkedList.next = mergeTwoLists(list1.next, list2);
            
    } else {
        mergedLinkedList = list2;
        mergedLinkedList.next = mergeTwoLists(list1, list2.next);
    }
    return mergedLinkedList;
};