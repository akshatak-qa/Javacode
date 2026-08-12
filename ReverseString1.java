package JavaPractice;

public class ReverseString1 {

	public static void main(String[] args) {

		String input = "swami";
		//String input = "mam";
		String output = "";
		for (int i = input.length() - 1; i >= 0; i--) {

			char b = input.charAt(i);
			output = output + b;

		}

		System.out.println(output);
		if (output.equals(input)) {

			System.out.println("string is palindrome");
		}

		else {

			System.out.println("string is not palindrome");
		}

	}

}
