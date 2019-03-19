package test.EventsApp.tests;

import org.testng.AssertJUnit;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import test.EventsApp.EventsBaseTest;
import test.EventsApp.forms.frmSplash;

public class SplashScreenTests extends EventsBaseTest{
 
	@Test
	static void test_ValidateSplashText() throws Exception {
		try {
			SoftAssert sa = new SoftAssert();
			sa.assertEquals(frmSplash.getSplashScreen1Text(), "Explore events");
			sa.assertEquals(frmSplash.getSplashSwipeText(), "Browse event details");
			sa.assertEquals(frmSplash.getSplashSwipeText(), "Login and register for events");
			frmSplash.skipSplashScreen();
			sa.assertAll();
		} catch (Exception e) {
			AssertJUnit.fail("Verify " + e.getMessage());
		}

	}
 
}