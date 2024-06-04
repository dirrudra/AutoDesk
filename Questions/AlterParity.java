import java.util.*;

public class AlterParity {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);

            int n = sc.nextInt();
            int[] arr = new int[n];
            for(int i=0;i<n;i++) {
                arr[i] = sc.nextInt();
            }
            

            boolean flag = false;
            if (arr[0] % 2 == 0) flag = true;
            System.out.println(isAlter(arr, flag));
        }

        public static int isAlter(int[] arr, boolean flag) {
            for(int i=1;i<arr.length;i++) {
                boolean temp = false;
                if (arr[i] % 2 == 0) temp = true;
                if (temp == flag) return i;
                flag =!flag;
            }

            return -1;
        }
}
