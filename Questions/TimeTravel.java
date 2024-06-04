import java.util.*;


public class TimeTravel {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        
        int hours[] = {0,1,2};
        int n = sc.nextInt();
        int arr[] = new int[n];

        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }
        int answer = 0;
        for(int i = 0; i < n-1; i++){
            if(arr[i] == arr[i+1]){
                answer += hours[0];
            }else if(
                arr[i] < arr[i+1]
            )
                {
                 answer += hours[1];
            }else if(arr[i] > arr[i+1]){
                answer+= hours[2];
            }
        }
        System.out.println(answer);
    }
}
