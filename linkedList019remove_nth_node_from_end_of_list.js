// Given the head of a linked list, remove the nth node from the end of the list and return its head.

//  

// Example 1:


// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var findFromEnd = function (head, n) {
    let p1 = head;
    for (let i = 0; i < n; i++) {
        p1 = p1.next
    }
    let p2 = head;
    while (p1) {
        p2 = p2.next
        p1 = p1.next

    }
    return p2
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let result = new ListNode(0);
    result.next = head;

    let x = findFromEnd(head, n + 1);
    x.next = x.next.next;

    return result.next
};