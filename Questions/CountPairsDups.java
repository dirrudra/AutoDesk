import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CountPairsDups {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        String[] inputArray = scanner.nextLine().split(" ");
        int[] arr = new int[inputArray.length];
        for (int i = 0; i < inputArray.length; i++) {
            arr[i] = Integer.parseInt(inputArray[i]);
        }

        int k = Integer.parseInt(scanner.nextLine());
        System.out.println(countDuplicates(arr, k));
        scanner.close();
    }

    public static int countDuplicates(int[] arr, int k) {
        int res = 0;

        for (int i = 0; i < arr.length; i++) {
            Map<Integer, Integer> hashmap = new HashMap<>();
            int count = 0;

            for (int j = i; j < arr.length; j++) {
                hashmap.put(arr[j], hashmap.getOrDefault(arr[j], 0) + 1);

                count += hashmap.get(arr[j]) / 2;

                if (count >= k) {
                    res++;
                }
            }
        }
        return res;
    }
}
