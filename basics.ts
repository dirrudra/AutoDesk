let array: number[] = [1, 2, 3];
array.push(4); // Adding an element
let firstValue: number = array[0]; // Getting an element
array[0] = 10; // Setting an element
array.pop(); // Removing the last element
let arrayLength: number = array.length; // Getting the length of the array



let arrayList: number[] = [];
arrayList.push(1); // Adding an element
arrayList.push(2);
let firstListValue: number = arrayList[0]; // Getting an element
arrayList[0] = 10; // Setting an element
arrayList.splice(0, 1); // Removing an element
let listSize: number = arrayList.length; // Getting the size
let isArrayListEmpty: boolean = arrayList.length === 0; // Checking if empty
let arrayListContains: boolean = arrayList.includes(2); // Checking if it contains an element

class ListNode {
    nodeValue: number;
    next: ListNode | null;

    constructor(nodeValue: number) {
        this.nodeValue = nodeValue;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    add(nodeValue: number): void {
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

    remove(nodeValue: number): void {
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

    contains(nodeValue: number): boolean {
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
let linkedListContains: boolean = linkedList.contains(1); // Checking if it contains an element
linkedList.remove(1); // Removing an element

class Queue {
    items: any[];

    constructor() {
        this.items = [];
    }

    enqueue(element: any): void {
        this.items.push(element);
    }

    dequeue(): any | null {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    peek(): any | null {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

let queue = new Queue();
queue.enqueue(1); // Adding an element
queue.enqueue(2);
let queueValue = queue.dequeue(); // Retrieving and removing the head
let queueHead = queue.peek(); // Retrieving the head without removing
let isQueueEmpty: boolean = queue.isEmpty(); // Checking if empty
let queueSize: number = queue.size(); // Getting the size

class PriorityQueue {
    items: { element: any, priority: number }[];

    constructor() {
        this.items = [];
    }

    enqueue(element: any, priority: number): void {
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

    dequeue(): any | null {
        if (this.isEmpty()) return null;
        return this.items.shift()?.element ?? null;
    }

    peek(): any | null {
        if (this.isEmpty()) return null;
        return this.items[0]?.element ?? null;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(3, 1); // Adding an element
priorityQueue.enqueue(1, 3);
priorityQueue.enqueue(2, 2);
let minPriority = priorityQueue.dequeue(); // Retrieving and removing the head (minimum element)
let priorityQueueHead = priorityQueue.peek(); // Retrieving the head without removing
let isPriorityQueueEmpty: boolean = priorityQueue.isEmpty(); // Checking if empty
let priorityQueueSize: number = priorityQueue.size(); // Getting the size

class LinkedListQueue {
    items: LinkedList;

    constructor() {
        this.items = new LinkedList();
    }

    enqueue(nodeValue: number): void {
        this.items.add(nodeValue);
    }

    dequeue(): number | null {
        if (this.isEmpty()) return null;
        const nodeValue = this.items.head?.nodeValue ?? null;
        if (nodeValue !== null) {
            this.items.remove(nodeValue);
        }
        return nodeValue;
    }

    peek(): number | null {
        return this.items.head?.nodeValue ?? null;
    }

    isEmpty(): boolean {
        return this.items.head === null;
    }

    size(): number {
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
let isLinkedListQueueEmpty: boolean = linkedListQueue.isEmpty(); // Checking if empty
let linkedListQueueSize: number = linkedListQueue.size(); // Getting the size

class Stack {
    items: any[];

    constructor() {
        this.items = [];
    }

    push(element: any): void {
        this.items.push(element);
    }

    pop(): any | null {
        if (this.isEmpty()) return null;
        return this.items.pop() ?? null;
    }

    peek(): any | null {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1] ?? null;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

let stack = new Stack();
stack.push(1); // Pushing an element
stack.push(2);
let stackValue = stack.pop(); // Popping an element
let stackTop = stack.peek(); // Retrieving the top without removing
let isStackEmpty: boolean = stack.isEmpty(); // Checking if empty
let stackSize: number = stack.size(); // Getting the size





class Deque {
    items: any[];

    constructor() {
        this.items = [];
    }

    addFirst(element: any): void {
        this.items.unshift(element);
    }

    addLast(element: any): void {
        this.items.push(element);
    }

    removeFirst(): any | null {
        if (this.isEmpty()) return null;
        return this.items.shift() ?? null;
    }

    removeLast(): any | null {
        if (this.isEmpty()) return null;
        return this.items.pop() ?? null;
    }

    peekFirst(): any | null {
        if (this.isEmpty()) return null;
        return this.items[0] ?? null;
    }

    peekLast(): any | null {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1] ?? null;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
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
let isDequeEmpty: boolean = deque.isEmpty(); // Checking if empty
let dequeSize: number = deque.size(); // Getting the size





let set: Set<number> = new Set();
set.add(1); // Adding an element
set.add(2);
let setContains: boolean = set.has(1); // Checking if it contains an element
set.delete(1); // Removing an element
let isSetEmpty: boolean = set.size === 0; // Checking if empty
let setSize: number = set.size; // Getting the size





let hashSet: Set<number> = new Set();
hashSet.add(1); // Adding an element
hashSet.add(2);
let hashSetContains: boolean = hashSet.has(1); // Checking if it contains an element
hashSet.delete(1); // Removing an element
let isHashSetEmpty: boolean = hashSet.size === 0; // Checking if empty
let hashSetSize: number = hashSet.size; // Getting the size




let map: Map<number, string> = new Map();
map.set(1, "one"); // Adding a key-value pair
map.set(2, "two");
let mapValue: string | undefined = map.get(1); // Retrieving a value
map.delete(1); // Removing a key-value pair
let mapContainsKey: boolean = map.has(2); // Checking if it contains a key
let isMapEmpty: boolean = map.size === 0; // Checking if empty
let mapSize: number = map.size; // Getting the size




let hashMap: Map<number, string> = new Map();
hashMap.set(1, "one"); // Adding a key-value pair
hashMap.set(2, "two");
let hashMapValue: string | undefined = hashMap.get(1); // Retrieving a value
hashMap.delete(1); // Removing a key-value pair
let hashMapContainsKey: boolean = hashMap.has(2); // Checking if it contains a key
let isHashMapEmpty: boolean = hashMap.size === 0; // Checking if empty
let hashMapSize: number = hashMap.size; // Getting the size






class TreeNode {
    nodeValue: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(nodeValue: number) {
        this.nodeValue = nodeValue;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: TreeNode;

    constructor(nodeValue: number) {
        this.root = new TreeNode(nodeValue);
    }
}

let binaryTree = new BinaryTree(1);






class BinaryTree2 {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    add(nodeValue: number): void {
        const newNode = new TreeNode(nodeValue);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._addNode(this.root, newNode);
        }
    }

    _addNode(node: TreeNode, newNode: TreeNode): void {
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
    nodeValue: number;
    children: GenericTreeNode[];

    constructor(nodeValue: number) {
        this.nodeValue = nodeValue;
        this.children = [];
    }

    addChild(child: GenericTreeNode): void {
        this.children.push(child);
    }
}

class GenericTree {
    root: GenericTreeNode;

    constructor(nodeValue: number) {
        this.root = new GenericTreeNode(nodeValue);
    }

    addChild(parent: GenericTreeNode, child: GenericTreeNode): void {
        parent.addChild(child);
    }
}

let tree = new GenericTree(1);
let treeChild = new GenericTreeNode(2);
tree.addChild(tree.root, treeChild);







class TrieNode {
    children: { [key: string]: TrieNode };
    isEndOfWord: boolean;

    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word: string): boolean {
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
let isWordPresent: boolean = trie.search("hello"); // true
let isPrefixPresent: boolean = trie.search("hell"); // false







class ListNode2 {
    nodeValue: number;
    next: ListNode2 | null;

    constructor(nodeValue: number) {
        this.nodeValue = nodeValue;
        this.next = null;
    }
}






class TreeNode2 {
    nodeValue: number;
    left: TreeNode2 | null;
    right: TreeNode2 | null;

    constructor(nodeValue: number) {
        this.nodeValue = nodeValue;
        this.left = null;
        this.right = null;
    }
}
