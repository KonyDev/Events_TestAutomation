package test.EventsApp.tests;

import org.testng.AssertJUnit;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import test.EventsApp.BaseConfigurations;
import test.EventsApp.forms.eventsTestModule;

public class SplashScreen extends BaseConfigurations {
	@Test
	static void test_ValidateSplashText() throws Exception {
		try {
			SoftAssert sa = new SoftAssert();
//			sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmSplash_lblSplashDesc")),
//					"SplashScreen1 Text is different");
			sa.assertEquals(eventsTestModule.getSplashScreen1Text(), "Explore events");
//			sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmSplash_lblSplashDesc")),
//					"SplashScreen2 Text is different");
			sa.assertEquals(eventsTestModule.getSplashSwipeText(), "Browse event details");
//			sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmSplash_lblSplashDesc")),
//					"SplashScreen3 Text is different");
			sa.assertEquals(eventsTestModule.getSplashSwipeText(), "Login and register for events");
//			sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmSplash_btnSkip")),
//					"SplashScreen not present");
			eventsTestModule.skipSplashScreen();
			sa.assertAll();
		} catch (Exception e) {
			AssertJUnit.fail("Verify " + e.getMessage());
		}

	}
}
