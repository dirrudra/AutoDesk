import java.util.Scanner;

public class LaserBoard {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.println("Enter board size");
        
        int n = sc.nextInt();
        int m = sc.nextInt();
        int board[][] = new int[n][m];

        System.out.println("Enter start coords");

        int crow = sc.nextInt();
        int ccol = sc.nextInt();

        System.out.println("Enter lasers count");

        int lcount = sc.nextInt();

        int lasers[][] = new int[lcount][2];
        System.out.println("Enter laser coords");

        for (int i = 0; i < lcount; i++) {
            lasers[i][0] = sc.nextInt();
            lasers[i][1] = sc.nextInt();
        }

        boolean path[][] = new boolean[n][m];

        int up = func(crow, ccol, lcount, board, lasers, path, 1);
        int down = func(crow, ccol, lcount, board, lasers, path, 2);
        int left = func(crow, ccol, lcount, board, lasers, path, 3);
        int right = func(crow, ccol, lcount, board, lasers, path, 4);

        System.out.println("Up: " + up);
        System.out.println("Down: " + down);
        System.out.println("Left: " + left);
        System.out.println("Right: " + right);

        System.out.println("Max possible path");

        int max1 = Math.max(up,down);
        int max2 = Math.max(left,right);
        int max = Math.max(max1,max2);
        System.out.println(max);
    }

    public static boolean isValid(int crow, int ccol, int lcount, int[][] board, int lasers[][], boolean[][] path) {
        int n = board.length;
        int m = board[0].length;

        if (crow < 0 || crow >= n || ccol < 0 || ccol >= m) {
            return false;
        }
        for (int i = 0; i < lcount; i++) {
            if (crow == lasers[i][0] || ccol == lasers[i][1]) {
                return false;
            }
        }
        return true;
    }

    public static int func(int crow, int ccol, int lcount, int[][] board, int lasers[][], boolean[][] path, int dir) {
        // Directions represented as row and column deltas
        int[][] directions = {
            {-1, 0}, // Up
            {1, 0},  // Down
            {0, -1}, // Left
            {0, 1}   // Right
        };

        // Get the row and column deltas based on the direction
        int drow = directions[dir - 1][0];
        int dcol = directions[dir - 1][1];

        int steps = 0;

        // Traverse the board in the specified direction
        while (isValid(crow + drow, ccol + dcol, lcount, board, lasers, path)) {
            crow += drow;
            ccol += dcol;
            steps++;
        }

        return steps;
    }
}
