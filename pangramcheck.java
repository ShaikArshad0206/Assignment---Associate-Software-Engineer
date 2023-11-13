import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a sentence to check for pangram: ");
        String sentence = scanner.nextLine().toLowerCase();

        boolean isPangram = sentence.chars().filter(Character::isLetter).distinct().count() == 26;

        System.out.println(isPangram ? "It's a pangram!" : "It's not a pangram.");
    }
}
