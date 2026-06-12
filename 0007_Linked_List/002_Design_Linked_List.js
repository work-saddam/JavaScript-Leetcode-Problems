// 707. Design Linked List
// Leetcode: https://leetcode.com/problems/design-linked-list/description/

// Understand the problem.
// Learn how to create Node.
// Learn how to create LinkedList.

// Creating Node:
// instead of function we can also create the class.
function Node(val) {
  this.val = val;
  this.next = null;
}

let newNode = new Node(5); // -> this will create the new node (instance)

// Creating Linked List:
// instead of function we can also create the class.
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}
