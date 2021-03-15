// Goals
// Describe what an “abstract data type” means
// Compare different types of arrays
// Define singly and doubly linked lists
// Compare performance characteristics of arrays and lists
// Implement linked lists in JavaScript
// Lists
// A list is an abstract data type

// It describes a set of requirements, not an exact implementation.

// Keep multiple items
// Can insert or delete items at any position
// Can contain duplicates
// Preserves order of items

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const firstPage = new Node('google.com');
const secondPage = new Node('reddit.com');
const thirdPage = new Node('amazon');

firstPage.next = secondPage;
secondPage.next = firstPage;


class Node {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  class Node {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  // const firstPage =
  //     new Node('google.com',
  //         new Node('reddit.com',
  //             new Node('amazon.com',
  //                 new Node('youtube.com'))));


//   A Linked List is just a bunch of nodes linked sequentially.

// The only attribute it must have is a reference to its first node, called the head.

// Since the list starts empty, the head is initially null.

class LinkedList {
  constructor() {
    this.head = null;
  }
}
let insects = new LinkedList();

const history = mewLinkedList();
history.head = firstPage;

// Traversing
// Assumption: we’ve already built list, leaving the actual construction for later.

// We’re just going to traverse the list and print it.

// demo/linkedlist.js
//   /** print(): traverse & console.log each item. */

  print() {
    let current = this.head;

    while (current !== null) {
      console.log(current.val);
      current = current.next;
    }
  }