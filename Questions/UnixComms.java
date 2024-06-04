import java.util.*;

public class UnixComms {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        sc.nextLine();  // consume the newline after the integer input
        String[] cmd = new String[n];
        for (int i = 0; i < n; i++) {
            cmd[i] = sc.nextLine();
        }

        int[] ans = func(cmd);
        for (int var : ans) {
            System.out.print(var + " ");
        }
    }

    public static int[] func(String[] cmd) {
        int l = cmd.length;
        int[] res = new int[3]; // Array to hold counts for "cp", "mv", "ls"

        for (int i = 0; i < l; i++) {
            switch (cmd[i]) {
                case "ls":
                    res[0]++;
                    break;
                case "cp":
                    res[1]++;
                    break;
                case "mv":
                    res[2]++;
                    break;
                default:
                    boolean looper = false;
                    int index = Integer.parseInt(cmd[i].substring(1)) - 1;
                    while (!looper) {
                        
                    System.out.println("______________CHECK_______________");
                    System.out.println(cmd[i]);
                    System.out.println(index);
                    System.out.println(cmd[index]); // Get the index from the command
                    System.out.println("______________END_CHECK_______________");
                    
                    String s = cmd[index];
                        if (s.charAt(0) == 'l') {
                            res[0]++;
                            looper = true;
                        } else if (s.charAt(0) == 'c') {
                            res[1]++;
                            looper = true;
                        } else if (s.charAt(0) == 'm') {
                            res[2]++;
                            looper = true;
                        } else {
                            index = Integer.parseInt(s.substring(1)) -1;

                        }
                    }
                    break;
            }
        }
        return res;
    }
}
