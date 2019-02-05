package test.EventsApp;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Method;
import java.util.Date;

import org.apache.commons.io.FileUtils;
import org.kony.qa.stargate.wrappers.appy.Driver;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.Augmenter;
import org.testng.ITestResult;
import org.testng.Reporter;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;

//import dbSetup.DbConnection;
//import test.MobileBanking.forms.AppSpecificFunctions;
//import test.MobileBanking.forms.frmLogin;
//import com.kony.appiumtests.forms.forms.FormPinBasedLoginKA;
import test.common.Alerts;
import test.common.AppBaseTest;
import test.common.AppElement;
import test.common.SgConfiguration;

public class BaseConfigurations extends AppBaseTest{
SgConfiguration sg = SgConfiguration.getInstance();
	
	@BeforeClass(alwaysRun = true)
	@Parameters({ "appNamePerClass", "packageNamePerClass","activityNamePerClass", "bundleId" })
	
	public void beforeClass(
			@Optional("Events") String appNamePerClass,
			@Optional("com.orgname.Events") String packageNamePerClass,  // 1st change
			@Optional(".Events") String activityNamePerClass,                  //2nd change
			@Optional("com.orgname.Events") String bundleId) throws Exception {

			super.beforeClass(sg.getKeyValue("appname"), sg.getKeyValue("apppackage"),
					sg.getKeyValue("launchactivity"),sg.getKeyValue("bundle_id"));
	}
		
    /**
     * After method.
     *
     * @param result the result
     * @throws Exception the exception
     */ 
    @AfterMethod(alwaysRun = true)
    public void afterMethod(ITestResult result) throws Exception {
        try {          
                if (result.getStatus() == ITestResult.FAILURE || result.getStatus() == ITestResult.SKIP) {
                	takeScreenshot(result);            	
                }	 
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    private void takeScreenshot(ITestResult result) throws Exception{    	
		String methodName = getCorrectMethodName(result);
        WebDriver aug1 = (WebDriver)(new Augmenter().augment(Driver.getInstance().getAppy()));
        File scrFile = ((TakesScreenshot) aug1).getScreenshotAs(OutputType.FILE);
        String screenshotDir = "test-output_Smoke" + File.separator + "Screenshots" + File.separator;
        String fileName = screenshotDir + methodName + ".jpg";
        FileUtils.copyFile(scrFile, new File(fileName));
        Reporter.setCurrentTestResult(result); 
        Reporter.log("<a href=\"" + ".." + File.separator + fileName + "\"><p align=\"left\"> " + methodName + " Screenshot: " + new Date() + "</p><img src=" + ".." + File.separator + fileName + " height='500' width='300'>");
    }
    
    public static String getCorrectMethodName(ITestResult testResult)
    {
    	String methodName = "";
        if(testResult.getMethod().getMethodName() == "unitTestMethod"){
        	methodName = testResult.getParameters()[0].toString();
        }
        else {
        	methodName = testResult.getMethod().getMethodName();
        }
        
        return methodName;
    }
	
	}
