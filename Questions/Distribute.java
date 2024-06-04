import java.util.*;

public class Distribute {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] arr = scanner.nextLine().split(" ");
        System.out.println(distribute(arr));
    }

    public static String distribute(String[] arr) {
        List<String> a = new ArrayList<>();
        List<String> b = new ArrayList<>();
        a.add(arr[0]);
        b.add(arr[1]);
        for (int i = 2; i < arr.length; i++) {
            if (count(a, arr[i]) > count(b, arr[i])) {
                a.add(arr[i]);
            } else if (count(a, arr[i]) < count(b, arr[i])) {
                b.add(arr[i]);
            } else {
                if (a.size() > b.size()) {
                    a.add(arr[i]);
                } else if (a.size() < b.size()) {
                    b.add(arr[i]);
                } else {
                    a.add(arr[i]);
                }
            }
        }
        a.addAll(b);
        return String.join(" ", a);
    }

    private static int count(List<String> list, String str) {
        int count = 0;
        for (String s : list) {
            if (s.equals(str)) {
                count++;
            }
        }
        return count;
    }
}
