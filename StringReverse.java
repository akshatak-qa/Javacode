package JavaPractice;

public class StringReverse {
	
	public static void main(String[] args) {
		
		String input="Akshata";
		String	output="";
		for(int i=input.length()-1;i>=0;i--) {
			
			char b=input.charAt(i);
			output=output+b;
		}
		System.out.println(output);
		
	}

}
