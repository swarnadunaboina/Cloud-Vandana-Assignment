import java.util.Scanner;
import java.io.*;
import java.util.HashMap;
class RomanToInt {
    public static void RnToIn(String val){
        HashMap<Character, Integer> map = new HashMap<>();
        map.put('I',1);
        map.put('V',5);
        map.put('X',10);
        map.put('L',50);
        map.put('C',100);
        map.put('D',500);
        map.put('M',1000);
        int strLen = val.length(); 
        int output =map.get(val.charAt(strLen-1));
        for(int i=strLen-2;i>=0;i--)
        {
            if(map.get(val.charAt(i)) < map.get(val.charAt(i+1)))
            {
                output -=map.get(val.charAt(i));
            }
            else{
                 output +=map.get(val.charAt(i));
            }
        }
        System.out.print("integer:"+output);
    }
     public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a Roman numeral:");
        String str = sc.nextLine();
        RnToIn(str);
    }
}
