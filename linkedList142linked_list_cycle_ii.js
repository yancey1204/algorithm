// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

//  

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
// Example 2:


// Input: head = [1,2], pos = 0
// Output: tail connects to node index 0
// Explanation: There is a cycle in the linked list, where tail connects to the first node.
// Example 3:


// Input: head = [1], pos = -1
// Output: no cycle
// Explanation: There is no cycle in the linked list.
//  

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/linked-list-cycle-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = slow = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next
        if (slow === fast) break;
    }

    if (!fast || !fast.next) return null

    slow = head

    while (slow !== head) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow
};
var detectCycle = function(head) {
    // 快慢指针初始化指向 head
    let slow = fast = head;
    // 快指针走到末尾时停止
    while (fast && fast.next) {
      // 慢指针走一步，快指针走两步
      slow = slow.next;
      fast = fast.next.next;
      // 快慢指针相遇，说明含有环
      if (slow == fast) {
        // 任一一节点指向头节点
        fast = head;
        // 同步向前进
        while (fast != slow) {
          fast = fast.next;
          slow = slow.next;
        }
        // 返回入口节点
        return fast;
      }
    }
    // 不包含环
    return null;   
  };
  