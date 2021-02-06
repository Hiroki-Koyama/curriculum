package check;

import constants.Constants;

public class Check {

	private static String firstName = "小山";
	private static String lastName = "大輝";

	private static void printName() {
		System.out.println("printNameメソッド → " + firstName + lastName);
	}

	public static void main(String[] args) {

		// TODO 自動生成されたメソッド・スタブ
		Check.printName();

		Pet pet = new Pet(Constants.CHECK_CLASS_JAVA, Constants.CHECK_CLASS_HOGE);
		RobotPet robotpet = new RobotPet(Constants.CHECK_CLASS_R2D2, Constants.CHECK_CLASS_LUKE);

		pet.introduce();
		robotpet.introduce();
	}
}