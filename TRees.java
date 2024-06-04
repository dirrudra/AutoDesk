// Online Java Compiler
// Use this editor to write, compile and run your Java code online
public class Main {
    public static void main(String[] args) {
        
  
      
  
     Node first = new Node(1); 
     Node second = new Node(2);
     Node third = new Node(3);
     Node fourth = new Node(4);
     Node fifth = new Node(5);
     Node sixth = new Node(6);
     Node seventh = new Node(7);
  
     first.left = second;
     first.right = third;
  
     second.left = fourth;
     second.right = fifth;
  
     third.left = sixth;
     third.right = seventh;
  
     preOrder(first);
        inOrder(first);
           postOrder(first);
  
    }
  
   public static void preOrder(Node parent){
      
      if(parent==null){
        return;
      }
  
  
      System.out.print(parent.key + " ");
      preOrder(parent.left);
      preOrder(parent.right);
   }
  
    public static void inOrder(Node parent){
      
      if(parent==null){
        return;
      }
  
  
  
      preOrder(parent.left);
     System.out.print(parent.key + " ");
      preOrder(parent.right);
   }
  
  
    public static void postOrder(Node parent){
      
      if(parent==null){
        return;
      }
  
      preOrder(parent.left);
      preOrder(parent.right);
      System.out.print(parent.key + " ");
   }
  
  
  }
  
  class Node{
      int key; 
      Node left;
      Node right;
  
      Node(int key){
        this.key = key;
      }
  }