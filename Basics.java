import java.util.*;

public class Basics {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        // Arrays


        int[] array = new int[10];
        array[0] = 1;
        array[1] = 2;
        
        int[] arr1 = {1,2,3,4,5,6};

        //  ArrayList


        ArrayList<Integer> arrayList = new ArrayList<>();
        arrayList.add(1);
        arrayList.add(2);


        int value = arrayList.get(0); // Getting an element
        arrayList.set(0, 10); // Setting an element
        arrayList.remove(0); // Removing an element
        int size = arrayList.size(); // Getting the size
        boolean isEmpty = arrayList.isEmpty(); // Checking if empty
        boolean contains = arrayList.contains(2); // Checking if it contains an element



        // and so on

        // LinkedList
        LinkedList<Integer> linkedList = new LinkedList<>();
        linkedList.add(1);
        linkedList.add(2);

        int val = linkedList.get(0); // Getting an element
        linkedList.set(0, 10); // Setting an element
        linkedList.remove(0); // Removing an element
        int len = linkedList.size(); // Getting the size
        boolean isempty = linkedList.isEmpty(); // Checking if empty
        boolean contain = linkedList.contains(2); // Checking if it contains an element

        // and so on
        

        // Queue


        Queue<Integer> queue = new LinkedList<>();
        queue.add(1);
        queue.add(2);
        int first = queue.poll();

        int vals = queue.poll(); // Retrieving and removing the head
        int head = queue.peek(); // Retrieving the head without removing
        boolean empty = queue.isEmpty(); // Checking if empty
        int lens = queue.size(); // Getting the size

        
        // PriorityQueue


        
        
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();
        priorityQueue.add(3);
        priorityQueue.add(1);
        priorityQueue.add(2);
        int min = priorityQueue.poll();
        
        
        int valu = priorityQueue.poll(); // Retrieving and removing the head
        int header = priorityQueue.peek(); // Retrieving the head without removing
        boolean checkEmpty = priorityQueue.isEmpty(); // Checking if empty
        int sizer = priorityQueue.size(); // Getting the size
        
        // LinkedList Queue
        
        Queue<Integer> linkedListQueue = new LinkedList<>();
        linkedListQueue.add(1);
        linkedListQueue.add(2);
        int one = linkedListQueue.poll();

        
        int values = linkedListQueue.poll(); // Retrieving and removing the head
        int headers = linkedListQueue.peek(); // Retrieving the head without removing
        boolean checkEmpties = linkedListQueue.isEmpty(); // Checking if empty
        int sizers = linkedListQueue.size(); // Getting the size
        


        //Stack

        Stack<Integer> stack = new Stack<>();
        stack.push(1);
        stack.push(2);
        int top = stack.pop(); // retrieves and removes the top of the stack
        
        int valuer = stack.pop(); // Popping an element
        int topper = stack.peek(); // Retrieving the top without removing
        boolean isEmpties = stack.isEmpty(); // Checking if empty
        int sizes = stack.size(); 


        //Deque  

        Deque<Integer> deque = new ArrayDeque<>();
        deque.addFirst(1);
        deque.addLast(2);
        int firstly = deque.removeFirst(); // retrieves and removes the first element
        int lastly = deque.removeLast(); // retrieves and removes the last element

        int peekFirst = deque.peekFirst(); // Retrieving the first without removing
        int peekLast = deque.peekLast(); // Retrieving the last without removing
        boolean isEmptily = deque.isEmpty(); // Checking if empty
        int sizely = deque.size(); // Getting the size

        //Set 
        
        Set<Integer> set = new HashSet<>();
        set.add(1);
        set.add(2);
                
        boolean containers = set.contains(1); // Checking if it contains an element
        set.remove(1); // Removing an element
        boolean isEmptyly = set.isEmpty(); // Checking if empty
        int sizily = set.size(); // Getting the size

        // HashSet 

        HashSet<Integer> hashSet = new HashSet<>();
        hashSet.add(1);
        hashSet.add(2);

        boolean containes = hashSet.contains(1); // Checking if it contains an element
        hashSet.remove(1); // Removing an element
        boolean isEmptier = hashSet.isEmpty(); // Checking if empty
        int sizery = hashSet.size(); // Getting the size

        

        //HashMap
        
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "one");
        map.put(2, "two");
        String valuers = map.get(1); // retrieves the value for key 1
                
        map.remove(1); // Removing a key-value pair
        boolean containsKey = map.containsKey(2); // Checking if it contains a key
        boolean containsValue = map.containsValue("two"); // Checking if it contains a value
        boolean ifEmpty = map.isEmpty(); // Checking if empty
        int mass = map.size(); // Getting the size
        
        
        
    }


    //Tree
        
    class trees{
        class TreeNode {
            int value;
            TreeNode left, right;
        
            TreeNode(int value) {
                this.value = value;
                left = right = null;
            }
        }
        
        public class BinaryTree {
        
            TreeNode root;
        
            BinaryTree(int value) {
                root = new TreeNode(value);
            }
        
            BinaryTree() {
                root = null;
            }
        }

        void add(TreeNode node, int value) {
            if (value < node.value) {
                if (node.left != null) {
                    add(node.left, value);
                } else {
                    node.left = new TreeNode(value);
                }
            } else if (value > node.value) {
                if (node.right != null) {
                    add(node.right, value);
                } else {
                    node.right = new TreeNode(value);
                }
            }
        }


    }
}
