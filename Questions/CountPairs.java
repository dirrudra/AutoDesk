import java.util.*;



public class TwoArrays {
    public static void main(String[] args) {
        Scanner sc = new Scanner (System.in);
        int n1 = sc.nextInt();
        int n2 = sc.nextInt();
        int[] arr1 = new int[n1];
        int [] arr2 = new int[n2];

        for(int i = 0; i < n1; i++) {
            arr1[i] = sc.nextInt();
        }
        for(int i = 0; i < n2; i++) {
            arr2[i] = sc.nextInt();
        }

        int target = sc.nextInt();

        System.out.println(countPairs(arr1, arr2, target));
    }

    public static boolean checkRemain(int[] arr2, int target){
        int tots = 0;
        for(int i = 0; i < arr2.length; i++){
            for(int j = i; j < arr2.length; j++){
                tots += arr2[j];
                if(tots == target){
                    return true;
                }else if(tots > target){
                    tots = 0;
                    break;
                }
            }
        }
        return false;
    }
    public static int countPairs(int[] arr1, int[] arr2, int target){
        int tots = 0;
        int ctr = 0;
        for(int i = 0; i < arr1.length; i++){
            for(int j = i; j < arr1.length; j++){
                tots += arr1[j];
                if (tots > target){
                    tots = 0;
                    break;
                }
                int rem = target - tots;
                if(checkRemain(arr2, rem)){
                    ctr++;
                }
            }
        }
        return ctr;
    }

}
