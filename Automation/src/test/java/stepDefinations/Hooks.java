package stepDefinations;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	
		@Before("@MobileTest")
		public void beforevaldiation()
		{
			System.out.println("Before Mobile  hook******************Test Cases Starts Here**************************************");
		}
		
		@After("@MobileTest")
		public void Aftervaldiation()
		{
			System.out.println("  After Mobile before hook******************Test Cases Ends Here**************************************\n\n\n\n");
		}
		
		@Before("@WebTest")
		public void beforeWebvaldiation()
		{
			System.out.println("Before Web  hook**************Test Cases Starts Here**************************************");
		}
		
		@After("@WebTest")
		public void AfterWebvaldiation()
		{
			System.out.println("  After Web before hook*********************Test Cases Ends Here***********************************\n\n\n\n");
		}
	}

