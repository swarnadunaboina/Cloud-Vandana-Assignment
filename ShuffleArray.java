import java.util.*;
class ShuffleArray
{
  public static void main(String args[])
  {
    int[] array = {1,2,3,4,5,6,7 };
    shuffleArray(array);
    for (int i = 0; i < array.length; i++)
    {
      System.out.print(array[i] + " ");
    }
  }
  static void shuffleArray(int[] array)
  {
    Random rnd = new Random();
    for (int i = array.length - 1; i > 0; i--)
    {
      int j = rnd.nextInt(i + 1);
      int a = array[j];
      array[j] = array[i];
      array[i] = a;
    }
  }
}
