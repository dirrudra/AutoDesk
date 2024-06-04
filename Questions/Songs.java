import java.util.*;

public class Songs {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        List<String> songs = Arrays.asList(scanner.nextLine().split(","));
        List<String> animations = Arrays.asList(scanner.nextLine().split(","));

        Map<String, Integer> hashSongs = new HashMap<>();
        Map<Integer, String> hashAnimations = new HashMap<>();

        for (String song : songs) {
            int index = song.indexOf(":");
            hashSongs.put(song.substring(0, index), Integer.parseInt(song.substring(index + 1)));
        }

        for (String animation : animations) {
            int index = animation.indexOf(":");
            hashAnimations.put(Integer.parseInt(animation.substring(index + 1)), animation.substring(0, index));
        }

        List<String> res = new ArrayList<>();

        for (String song : hashSongs.keySet()) {
            int val = hashSongs.get(song);
            for (int animation : sorted(hashAnimations.keySet())) {
                if (val % animation == 0) {
                    String s = hashAnimations.get(animation) + ":" + String.valueOf(val / animation);
                    res.add(s);
                    break;
                }
            }
        }

        System.out.println(res);
    }

    private static List<Integer> sorted(List<Integer> list) {
        List<Integer> sortedList = new ArrayList<>(list);
        Collections.sort(sortedList);
        return sortedList;
    }
}