import java.util.*;

public class Songs {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String[] songsInput = scanner.nextLine().split(" ");
        String[] animationsInput = scanner.nextLine().split(" ");
        Map<String, Integer> hashsongs = new HashMap<>();
        for (String song : songsInput) {
            int index = song.indexOf(':');
            String key = song.substring(0, index);
            int value = Integer.parseInt(song.substring(index + 1));
            hashsongs.put(key, value);
        }
        Map<Integer, String> hashanimations = new TreeMap<>(); // TreeMap to maintain sorted order by default
        for (String animation : animationsInput) {
            int index = animation.indexOf(':');
            String key = animation.substring(0, index);
            int value = Integer.parseInt(animation.substring(index + 1));
            hashanimations.put(value, key);
        }
        
        List<String> res = new ArrayList<>();

        for (Map.Entry<String, Integer> songEntry : hashsongs.entrySet()) {
            String songKey = songEntry.getKey();
            int songValue = songEntry.getValue();
            
            for (Map.Entry<Integer, String> animationEntry : hashanimations.entrySet()) {
                int animationValue = animationEntry.getKey();
                String animationKey = animationEntry.getValue();
                
                if (songValue % animationValue == 0) {
                    String result = animationKey + ":" + (songValue / animationValue);
                    res.add(result);
                    break;
                }
            }
        }
        System.out.println(res);
    }
}
