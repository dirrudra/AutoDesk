import java.util.*;

public class versionControl {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] logs = scanner.nextLine().split(",");

        Map<String, List<String>> hashmap = new HashMap<>();
        String currbranch = "";

        for (String log : logs) {
            int index = log.indexOf(" ");
            String cmd = log.substring(0, index).trim();
            String val = log.substring(index + 1).trim();

            if (cmd.equals("switch")) {
                if (!hashmap.containsKey(val)) {
                    hashmap.put(val, new ArrayList<>());
                }
                currbranch = val;
            } else if (cmd.equals("push")) {
                if (!hashmap.get(currbranch).contains(val)) {
                    hashmap.get(currbranch).add(val);
                }
            }
        }

        int maxi = 0;
        String res = "";
        for (String i : hashmap.keySet()) {
            int l = hashmap.get(i).size();
            if (l > maxi) {
                maxi = l;
                res = i;
            }
        }

        System.out.println(res);
    }
}