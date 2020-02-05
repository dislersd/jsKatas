class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertNodeAtTail(node) {
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  getLength() {
    let counter = 1;

    if (this.head == null) {
      return 0;
    } else {
      let current = this.head;
      while (current.next !== null) {
        counter++;
        current = current.next;
      }
      return counter;
    }
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const llist = new LinkedList();
const oneNode = new Node(1);
const twoNode = new Node(2);
const threeNode = new Node(3);
const fourNode = new Node(4);

llist.insertNodeAtTail(oneNode);
llist.insertNodeAtTail(twoNode);
llist.insertNodeAtTail(fourNode);

console.log(llist);

function insertNode(linkedList, value, position) {
  const newNode = new Node(value);
  let index = 0;

  if (position == 0) {
    newNode.next = linkedList.head;
    linkedList.head = newNode;
  } else if (position >= linkedList.getLength()) {
    return "Invalid position";
  } else {
    let current = linkedList.head;
    while (current.next !== null) {
      index++;
      if (index == position) {
        newNode.next = current.next;
        current.next = newNode;
      }
      current = current.next;
    }
  }
  return linkedList;
}

console.log(insertNode(llist, 6, 0));
console.log(insertNode(llist, 33, 1));

console.log(llist.getLength());
