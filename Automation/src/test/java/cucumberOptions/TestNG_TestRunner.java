package cucumberOptions;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(  
	    features = "src/test/java/features",
	    glue="stepDefinations",tags="@PortalTest",monochrome=true,
	    plugin= {"pretty","html:target/cucumber","json:target/cucumber.json","junit:target/cukes.xml"})


public class TestNG_TestRunner extends  AbstractTestNGCucumberTests{

}
