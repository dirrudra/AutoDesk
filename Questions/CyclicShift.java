import java.util.*;

public class CyclicShift {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Integer> l1 = Arrays.stream(scanner.nextLine().split(" ")).mapToInt(Integer::parseInt).boxed().toList();
        int c = 0;

        for (int i = 0; i < l1.size(); i++) {
            for (int j = i + 1; j < l1.size(); j++) {
                String s = String.valueOf(l1.get(i)) + String.valueOf(l1.get(i));
                if (String.valueOf(l1.get(j)).indexOf(s) != -1) {
                    c++;
                }
            }
        }

        System.out.println(c);
    }
}
