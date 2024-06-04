let array = [1, 2, 3];
array.push(4); // Adding an element
let firstValue = array[0]; // Getting an element
array[0] = 10; // Setting an element
array.pop(); // Removing the last element
let arrayLength = array.length; // Getting the length of the array


let arrayList = [];
arrayList.push(1); // Adding an element
arrayList.push(2);
let firstListValue = arrayList[0]; // Getting an element
arrayList[0] = 10; // Setting an element
arrayList.splice(0, 1); // Removing an element
let listSize = arrayList.length; // Getting the size
let isArrayListEmpty = arrayList.length === 0; // Checking if empty
let arrayListContains = arrayList.includes(2); // Checking if it contains an element

class ListNode {
    constructor(nodeValue) {
        this.nodeValue = nodeValue;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(nodeValue) {
        const newNode = new ListNode(nodeValue);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    remove(nodeValue) {
        if (this.head === null) return;

        if (this.head.nodeValue === nodeValue) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null && current.next.nodeValue !== nodeValue) {
            current = current.next;
        }

        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    contains(nodeValue) {
        let current = this.head;
        while (current !== null) {
            if (current.nodeValue === nodeValue) return true;
            current = current.next;
        }
        return false;
    }
}

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
let linkedListContains = linkedList.contains(1); // Checking if it contains an element
linkedList.remove(1); // Removing an element


class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

let queue = new Queue();
queue.enqueue(1); // Adding an element
queue.enqueue(2);
let queueValue = queue.dequeue(); // Retrieving and removing the head
let queueHead = queue.peek(); // Retrieving the head without removing
let isQueueEmpty = queue.isEmpty(); // Checking if empty
let queueSize = queue.size(); // Getting the size



class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift().element;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[0].element;
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(3, 1); // Adding an element
priorityQueue.enqueue(1, 3);
priorityQueue.enqueue(2, 2);
let minPriority = priorityQueue.dequeue(); // Retrieving and removing the head (minimum element)
let priorityQueueHead = priorityQueue.peek(); // Retrieving the head without removing
let isPriorityQueueEmpty = priorityQueue.isEmpty(); // Checking if empty
let priorityQueueSize = priorityQueue.size(); // Getting the size



class LinkedListQueue {
    constructor() {
        this.items = new LinkedList();
    }

    enqueue(nodeValue) {
        this.items.add(nodeValue);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        const nodeValue = this.items.head.nodeValue;
        this.items.remove(nodeValue);
        return nodeValue;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items.head.nodeValue;
    }

    isEmpty() {
        return this.items.head === null;
    }

    size() {
        let size = 0;
        let current = this.items.head;
        while (current !== null) {
            size++;
            current = current.next;
        }
        return size;
    }
}

let linkedListQueue = new LinkedListQueue();
linkedListQueue.enqueue(1); // Adding an element
linkedListQueue.enqueue(2);
let linkedListQueueValue = linkedListQueue.dequeue(); // Retrieving and removing the head
let linkedListQueueHead = linkedListQueue.peek(); // Retrieving the head without removing
let isLinkedListQueueEmpty = linkedListQueue.isEmpty(); // Checking if empty
let linkedListQueueSize = linkedListQueue.size(); // Getting the size



class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

let stack = new Stack();
stack.push(1); // Pushing an element
stack.push(2);
let stackValue = stack.pop(); // Popping an element
let stackTop = stack.peek(); // Retrieving the top without removing
let isStackEmpty = stack.isEmpty(); // Checking if empty
let stackSize = stack.size(); // Getting the size


class Deque {
    constructor() {
        this.items = [];
    }

    addFirst(element) {
        this.items.unshift(element);
    }

    addLast(element) {
        this.items.push(element);
    }

    removeFirst() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    removeLast() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peekFirst() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    peekLast() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

let deque = new Deque();
deque.addFirst(1); // Adding to the front
deque.addLast(2); // Adding to the end
let firstElement = deque.removeFirst(); // Removing from the front
let lastElement = deque.removeLast(); // Removing from the end
let firstPeek = deque.peekFirst(); // Retrieving the first without removing
let lastPeek = deque.peekLast(); // Retrieving the last without removing
let isDequeEmpty = deque.isEmpty(); // Checking if empty
let dequeSize = deque.size(); // Getting the size


let set = new Set();
set.add(1); // Adding an element
set.add(2);
let setContains = set.has(1); // Checking if it contains an element
set.delete(1); // Removing an element
let isSetEmpty = set.size === 0; // Checking if empty
let setSize = set.size; // Getting the size


let hashSet = new Set();
hashSet.add(1); // Adding an element
hashSet.add(2);
let hashSetContains = hashSet.has(1); // Checking if it contains an element
hashSet.delete(1); // Removing an element
let isHashSetEmpty = hashSet.size === 0; // Checking if empty
let hashSetSize = hashSet.size; // Getting the size


let map = new Map();
map.set(1, "one"); // Adding a key-value pair
map.set(2, "two");
let mapValue = map.get(1); // Retrieving a value
map.delete(1); // Removing a key-value pair
let mapContainsKey = map.has(2); // Checking if it contains a key
let isMapEmpty = map.size === 0; // Checking if empty
let mapSize = map.size; // Getting the size


let hashMap = new Map();
hashMap.set(1, "one"); // Adding a key-value pair
hashMap.set(2, "two");
let hashMapValue = hashMap.get(1); // Retrieving a value
hashMap.delete(1); // Removing a key-value pair
let hashMapContainsKey = hashMap.has(2); // Checking if it contains a key
let isHashMapEmpty = hashMap.size === 0; // Checking if empty
let hashMapSize = hashMap.size; // Getting the size



class TreeNode {
    constructor(nodeValue) {
        this.nodeValue = nodeValue;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(nodeValue) {
        this.root = new TreeNode(nodeValue);
    }
}

let binaryTree = new BinaryTree(1);


class BinaryTree2 {
    constructor() {
        this.root = null;
    }

    add(nodeValue) {
        const newNode = new TreeNode(nodeValue);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._addNode(this.root, newNode);
        }
    }

    _addNode(node, newNode) {
        if (newNode.nodeValue < node.nodeValue) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._addNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._addNode(node.right, newNode);
            }
        }
    }
}

let binaryTree2 = new BinaryTree2();
binaryTree2.add(3);
binaryTree2.add(1);
binaryTree2.add(2);


class GenericTreeNode {
    constructor(nodeValue) {
        this.nodeValue = nodeValue;
        this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }
}

class GenericTree {
    constructor(nodeValue) {
        this.root = new GenericTreeNode(nodeValue);
    }

    addChild(parent, child) {
        parent.addChild(child);
    }
}

let tree = new GenericTree(1);
let treeChild = new GenericTreeNode(2);
tree.addChild(tree.root, treeChild);


class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }
}

let trie = new Trie();
trie.insert("hello");
let isWordPresent = trie.search("hello"); // true
let isPrefixPresent = trie.search("hell"); // false


class ListNode2 {
    constructor(nodeValue) {
        this.nodeValue = nodeValue;
        this.next = null;
    }
}

class TreeNode2 {
    constructor(nodeValue) {
        this.nodeValue = nodeValue;
        this.left = null;
        this.right = null;
    }
}


// let array = [1, 2, 3];
// array.push(4); // Adding an element
// let value = array[0]; // Getting an element
// array[0] = 10; // Setting an element
// array.pop(); // Removing the last element
// let length = array.length; // Getting the length of the array


// let arrayList = [];
// arrayList.push(1); // Adding an element
// arrayList.push(2);
// let value = arrayList[0]; // Getting an element
// arrayList[0] = 10; // Setting an element
// arrayList.splice(0, 1); // Removing an element
// let size = arrayList.length; // Getting the size
// let isEmpty = arrayList.length === 0; // Checking if empty
// let contains = arrayList.includes(2); // Checking if it contains an element

// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     add(value) {
//         const newNode = new ListNode(value);
//         if (this.head === null) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while (current.next !== null) {
//                 current = current.next;
//             }
//             current.next = newNode;
//         }
//     }

//     remove(value) {
//         if (this.head === null) return;

//         if (this.head.value === value) {
//             this.head = this.head.next;
//             return;
//         }

//         let current = this.head;
//         while (current.next !== null && current.next.value !== value) {
//             current = current.next;
//         }

//         if (current.next !== null) {
//             current.next = current.next.next;
//         }
//     }

//     contains(value) {
//         let current = this.head;
//         while (current !== null) {
//             if (current.value === value) return true;
//             current = current.next;
//         }
//         return false;
//     }
// }

// let linkedList = new LinkedList();
// linkedList.add(1);
// linkedList.add(2);
// let contains = linkedList.contains(1); // Checking if it contains an element
// linkedList.remove(1); // Removing an element


// class Queue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element) {
//         this.items.push(element);
//     }

//     dequeue() {
//         if (this.isEmpty()) return null;
//         return this.items.shift();
//     }

//     peek() {
//         if (this.isEmpty()) return null;
//         return this.items[0];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }
// }

// let queue = new Queue();
// queue.enqueue(1); // Adding an element
// queue.enqueue(2);
// let value = queue.dequeue(); // Retrieving and removing the head
// let head = queue.peek(); // Retrieving the head without removing
// let isEmpty = queue.isEmpty(); // Checking if empty
// let size = queue.size(); // Getting the size



// class PriorityQueue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element, priority) {
//         const queueElement = { element, priority };
//         let added = false;
//         for (let i = 0; i < this.items.length; i++) {
//             if (queueElement.priority < this.items[i].priority) {
//                 this.items.splice(i, 0, queueElement);
//                 added = true;
//                 break;
//             }
//         }
//         if (!added) {
//             this.items.push(queueElement);
//         }
//     }

//     dequeue() {
//         if (this.isEmpty()) return null;
//         return this.items.shift().element;
//     }

//     peek() {
//         if (this.isEmpty()) return null;
//         return this.items[0].element;
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }
// }

// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue(3, 1); // Adding an element
// priorityQueue.enqueue(1, 3);
// priorityQueue.enqueue(2, 2);
// let min = priorityQueue.dequeue(); // Retrieving and removing the head (minimum element)
// let head = priorityQueue.peek(); // Retrieving the head without removing
// let isEmpty = priorityQueue.isEmpty(); // Checking if empty
// let size = priorityQueue.size(); // Getting the size



// class LinkedListQueue {
//     constructor() {
//         this.items = new LinkedList();
//     }

//     enqueue(value) {
//         this.items.add(value);
//     }

//     dequeue() {
//         if (this.isEmpty()) return null;
//         const value = this.items.head.value;
//         this.items.remove(value);
//         return value;
//     }

//     peek() {
//         if (this.isEmpty()) return null;
//         return this.items.head.value;
//     }

//     isEmpty() {
//         return this.items.head === null;
//     }

//     size() {
//         let size = 0;
//         let current = this.items.head;
//         while (current !== null) {
//             size++;
//             current = current.next;
//         }
//         return size;
//     }
// }

// let linkedListQueue = new LinkedListQueue();
// linkedListQueue.enqueue(1); // Adding an element
// linkedListQueue.enqueue(2);
// let values = linkedListQueue.dequeue(); // Retrieving and removing the head
// let header = linkedListQueue.peek(); // Retrieving the head without removing
// let isEmptie = linkedListQueue.isEmpty(); // Checking if empty
// let sizer = linkedListQueue.size(); // Getting the size



// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(element) {
//         this.items.push(element);
//     }

//     pop() {
//         if (this.isEmpty()) return null;
//         return this.items.pop();
//     }

//     peek() {
//         if (this.isEmpty()) return null;
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }
// }

// let stack = new Stack();
// stack.push(1); // Pushing an element
// stack.push(2);
// let value = stack.pop(); // Popping an element
// let top = stack.peek(); // Retrieving the top without removing
// let isEmpty = stack.isEmpty(); // Checking if empty
// let size = stack.size(); // Getting the size


// class Deque {
//     constructor() {
//         this.items = [];
//     }

//     addFirst(element) {
//         this.items.unshift(element);
//     }

//     addLast(element) {
//         this.items.push(element);
//     }

//     removeFirst() {
//         if (this.isEmpty()) return null;
//         return this.items.shift();
//     }

//     removeLast() {
//         if (this.isEmpty()) return null;
//         return this.items.pop();
//     }

//     peekFirst() {
//         if (this.isEmpty()) return null;
//         return this.items[0];
//     }

//     peekLast() {
//         if (this.isEmpty()) return null;
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }
// }

// let deque = new Deque();
// deque.addFirst(1); // Adding to the front
// deque.addLast(2); // Adding to the end
// let first = deque.removeFirst(); // Removing from the front
// let last = deque.removeLast(); // Removing from the end
// let peekFirst = deque.peekFirst(); // Retrieving the first without removing
// let peekLast = deque.peekLast(); // Retrieving the last without removing
// let isEmpty = deque.isEmpty(); // Checking if empty
// let size = deque.size(); // Getting the size


// let set = new Set();
// set.add(1); // Adding an element
// set.add(2);
// let contains = set.has(1); // Checking if it contains an element
// set.delete(1); // Removing an element
// let isEmpty = set.size === 0; // Checking if empty
// let size = set.size; // Getting the size


// let hashSet = new Set();
// hashSet.add(1); // Adding an element
// hashSet.add(2);
// let contains = hashSet.has(1); // Checking if it contains an element
// hashSet.delete(1); // Removing an element
// let isEmpty = hashSet.size === 0; // Checking if empty
// let size = hashSet.size; // Getting the size


// let map = new Map();
// map.set(1, "one"); // Adding a key-value pair
// map.set(2, "two");
// let value = map.get(1); // Retrieving a value
// map.delete(1); // Removing a key-value pair
// let containsKey = map.has(2); // Checking if it contains a key
// let isEmpty = map.size === 0; // Checking if empty
// let size = map.size; // Getting the size


// let hashMap = new Map();
// hashMap.set(1, "one"); // Adding a key-value pair
// hashMap.set(2, "two");
// let value = hashMap.get(1); // Retrieving a value
// hashMap.delete(1); // Removing a key-value pair
// let containsKey = hashMap.has(2); // Checking if it contains a key
// let isEmpty = hashMap.size === 0; // Checking if empty
// let size = hashMap.size; // Getting the size



// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinaryTree {
//     constructor(value) {
//         this.root = new TreeNode(value);
//     }
// }

// let binaryTree = new BinaryTree(1);


// class BinaryTree {
//     constructor() {
//         this.root = null;
//     }

//     add(value) {
//         const newNode = new TreeNode(value);
//         if (this.root === null) {
//             this.root = newNode;
//         } else {
//             this._addNode(this.root, newNode);
//         }
//     }

//     _addNode(node, newNode) {
//         if (newNode.value < node.value) {
//             if (node.left === null) {
//                 node.left = newNode;
//             } else {
//                 this._addNode(node.left, newNode);
//             }
//         } else {
//             if (node.right === null) {
//                 node.right = newNode;
//             } else {
//                 this._addNode(node.right, newNode);
//             }
//         }
//     }
// }

// let binaryTree = new BinaryTree();
// binaryTree.add(3);
// binaryTree.add(1);
// binaryTree.add(2);


// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.children = [];
//     }

//     addChild(child) {
//         this.children.push(child);
//     }
// }

// class GenericTree {
//     constructor(value) {
//         this.root = new TreeNode(value);
//     }

//     addChild(parent, child) {
//         parent.addChild(child);
//     }
// }

// let tree = new GenericTree(1);
// let child = new TreeNode(2);
// tree.addChild(tree.root, child);


// class TrieNode {
//     constructor() {
//         this.children = {};
//         this.isEndOfWord = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new TrieNode();
//     }

//     insert(word) {
//         let node = this.root;
//         for (const char of word) {
//             if (!node.children[char]) {
//                 node.children[char] = new TrieNode();
//             }
//             node = node.children[char];
//         }
//         node.isEndOfWord = true;
//     }

//     search(word) {
//         let node = this.root;
//         for (const char of word) {
//             if (!node.children[char]) {
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return node.isEndOfWord;
//     }
// }

// let trie = new Trie();
// trie.insert("hello");
// let isWordPresent = trie.search("hello"); // true
// let isPrefixPresent = trie.search("hell"); // false


// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }



