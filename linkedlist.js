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