// setting up a linked list with nodes

class LinkedList {
  constructor(head = undefined) {
    this.head = head;
  }

  insertNode(node) {
    if (this.head === undefined) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }
}

let list = new LinkedList();

class Node {
  constructor(val) {
    this.val = val;
    this.next = undefined;
  }
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(5);

list.insertNode(node1);
list.insertNode(node2);
list.insertNode(node3);
list.insertNode(node4);
list.insertNode(node5);
list.insertNode(node6);

// vvv--- This is where the find the middle node function code starts! ----vvv

function middleNode(list) {
  // two pointers (fast and slow)
  // slow pointer will move one node at a time
  // fast pointer will move two nodes at a time
  // when fast pointer gets to end of list slow pointer will be pointing to middle node

  let slow = list.head;
  let fast = slow;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
}

console.log(middleNode(list));
