import java.util.*;

public class NotEqualArray{
    public static void main(String[]args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i] = sc.nextInt();
        }

        int counter = 0;

        for(int i = 0;i<arr.length;i++){
            if(arr[i] != arr[0] && arr[i] != arr[1] ){
                counter++;
            }
        }

        System.out.println(counter);
    }
}