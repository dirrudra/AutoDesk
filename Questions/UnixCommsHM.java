import java.util.*;

public class UnixCommsHM {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine();  // consume the newline after the integer input
        String[] cmd = new String[n];
        for (int i = 0; i < n; i++) {
            cmd[i] = sc.nextLine();
        }

        Map<String, Integer> ans = func(cmd);
        for (Map.Entry<String, Integer> entry : ans.entrySet()) {
            System.out.println(entry.getKey() + " " + entry.getValue());
        }
    }

    public static Map<String, Integer> func(String[] cmd) {
        Map<String, Integer> res = new HashMap<>(); // Map to hold counts for each command

        for (String s : cmd) {
            if (s.equals("ls") || s.equals("cp") || s.equals("mv")) {
                res.put(s, res.getOrDefault(s, 0) + 1);
            } else {
                boolean looper = false;
                int index = Integer.parseInt(s.substring(1)) - 1;
                while (!looper) {
                    String command = cmd[index];
                    
                    System.out.println("______________CHECK_______________");
                    System.out.println(s);
                    System.out.println(index);
                    System.out.println(command); // Get the index from the command
                    System.out.println("______________END_CHECK_______________");
                    
                    if (command.equals("ls") || command.equals("cp") || command.equals("mv")) {
                        res.put(command, res.getOrDefault(command, 0) + 1);
                        looper = true;
                    } else {
                        index = Integer.parseInt(command.substring(1)) - 1;
                    }
                }
            }
        }
        return res;
    }
}
