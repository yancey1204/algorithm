// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

//  

// Example 1:


// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]
// Example 2:

// Input: head = [5], left = 1, right = 1
// Output: [5]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-linked-list-ii
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
* @param {number} left
* @param {number} right
* @return {ListNode}
*/
let successor = new ListNode(0)
var reverseN = function (head, n) {
    if (n === 1) {
        successor = head.next
        return head
    }
    let last = reverseN(head.next, n - 1)
    head.next.next = head;
    head.next = successor

    return last
};


/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (left === 1) {
        return reverseN(head, right)
    }
    head.next = reverseBetween(head.next, left - 1, right - 1)
    return head
};