package test.EventsApp.forms;

import java.util.HashMap;

import org.kony.qa.stargate.wrappers.appy.Driver;
import org.openqa.selenium.JavascriptExecutor;

import test.EventsApp.WidgetIdsPicker;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;

public class eventsTestModule {
	static public AppElement rate;
	static String storeEventTitle;
	static String storeUpcomingEventTitle;

	public static String getSplashScreen1Text() throws Exception {

		if (SgConfiguration.getInstance().isAndroid()) {
			AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmSplash_lblSplashDesc"));
			rate = new AppElement(WidgetIdsPicker.getWidgetId("frmSplash_lblSplashDesc"));

		} else if (SgConfiguration.getInstance().isIOS()) {
			Segment segSplashEvents = new Segment(WidgetIdsPicker.getWidgetId("frmSplash_segSplashEvents"),
					WidgetIdsPicker.getWidgetId("frmSplash_lblSplashDesc"));
			rate = segSplashEvents.getElementWithIndex(0);
		}
		return rate.getText();

	}

	public static String getSplashSwipeText() throws Exception {
		if (SgConfiguration.getInstance().isAndroid()) {
			AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmSplash_lblSplashDesc"));
			rate = new AppElement(WidgetIdsPicker.getWidgetId("frmSplash_lblSplashDesc"));
			rate.swipeLeft();
		} else if (SgConfiguration.getInstance().isIOS()) {
			/*TouchAction action1 = new TouchAction((MobileDriver) Driver.getInstance().getAppy()).press(240, 445)
					.waitAction(30).moveTo(50, 445).release();
			action1.perform();*/
			AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmSplash_segSplashEvents"));
			
			JavascriptExecutor js = (JavascriptExecutor) Driver.getInstance().getAppy();
			HashMap<String, String> swipeObject = new HashMap<String, String>();
			swipeObject.put("direction", "left");
			js.executeScript("mobile: swipe", swipeObject);
			
			Segment segSplashEvents = new Segment(WidgetIdsPicker.getWidgetId("frmSplash_segSplashEvents"),
					WidgetIdsPicker.getWidgetId("frmSplash_lblSplashDesc"));
			rate = segSplashEvents.getElementWithIndex(0);

		}
		return rate.getText();

	}

	public static void skipSplashScreen() throws Exception {
		if (SgConfiguration.getInstance().isAndroid()) {
			AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmSplash_btnSkip"));
			rate = new AppElement(WidgetIdsPicker.getWidgetId("frmSplash_btnSkip"));
			rate.click();
		} else if (SgConfiguration.getInstance().isIOS()) {
			Segment segSplashEvents = new Segment(WidgetIdsPicker.getWidgetId("frmSplash_segSplashEvents"),
					WidgetIdsPicker.getWidgetId("frmSplash_btnSkip"));
			segSplashEvents.clickSegRowElementbyLabel("SKIP");
		}
	}

	public static void clickOnHamburgerMenu() throws Exception {
		// if (SgConfiguration.getInstance().isAndroid()) {
		AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmEventsLanding_btnHamburger"));
		rate = new AppElement(WidgetIdsPicker.getWidgetId("frmEventsLanding_btnHamburger"));
		rate.click();
		// }

	}

	public static void clickOnAllEventsMenu() throws Exception {
		// if (SgConfiguration.getInstance().isAndroid()) {
		AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("userwidgetmodel_flxmenu3"));
		rate = new AppElement(WidgetIdsPicker.getWidgetId("userwidgetmodel_flxmenu3"));
		rate.click();
		// }

	}

	public static String getAllEventsTitle() throws Exception {
		// if (SgConfiguration.getInstance().isAndroid()) {
		AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmEventsLanding_lblHeaderTitle"));
		rate = new AppElement(WidgetIdsPicker.getWidgetId("frmEventsLanding_lblHeaderTitle"));
		// }
		return rate.getText();

	}

	public static String getUpcommingEventsTitle() throws Exception {
		// if (SgConfiguration.getInstance().isAndroid()) {
		AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmEventsLanding_lblHeaderTitle"));
		rate = new AppElement(WidgetIdsPicker.getWidgetId("frmEventsLanding_lblHeaderTitle"));
		// }
		return rate.getText();

	}
	// public static void takeScreenshot(String widget,String screenshotName)
	// throws Exception {
	// if (SgConfiguration.getInstance().isAndroid()) {
	// AppElement.waitForEnable(WidgetIdsPicker.getWidgetId(widget));
	// rate = new AppElement(WidgetIdsPicker.getWidgetId(widget));
	// rate.takeScreenshotAndCompare(screenshotName);;
	// }
	//
	// }

	public static void firstEventClick() throws Exception {
		if (SgConfiguration.getInstance().isAndroid()) {

			AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("tempSegEventList_lblEventTitle"));
			rate = new AppElement(WidgetIdsPicker.getWidgetId("tempSegEventList_lblEventTitle"), 0);

		} else if (SgConfiguration.getInstance().isIOS()) {
			Segment segSplashEvents = new Segment(WidgetIdsPicker.getWidgetId("frmEventsLanding_segEventList"),
					WidgetIdsPicker.getWidgetId("tempSegEventList_lblEventTitle"));
			rate = segSplashEvents.getElementWithIndex(0);

		}
		storeEventTitle = rate.getText();
		rate.click();
	}

	public static void allEventDetailValidate() throws Exception {
		// if (SgConfiguration.getInstance().isAndroid()) {

		AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmEventDetails_lblTitle"));
		rate = new AppElement(WidgetIdsPicker.getWidgetId("frmEventDetails_lblTitle"));
		rate.getText().equals(storeEventTitle);

		// }

	}

	public static void navigateBack() throws Exception {
		AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmEventDetails_flxClose"));
		rate = new AppElement(WidgetIdsPicker.getWidgetId("frmEventDetails_flxClose"));
		rate.click();

	}

	public static void clickOnUpcomingEventMenu() throws Exception {

		AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("userwidgetmodel_flxmenu2"));
		rate = new AppElement(WidgetIdsPicker.getWidgetId("userwidgetmodel_flxmenu2"));
		rate.click();

	}

	public static void UpcommingEventClick() throws Exception {
		if (SgConfiguration.getInstance().isAndroid()) {
			AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("tempSegEventList_lblEventTitle"));
			rate = new AppElement(WidgetIdsPicker.getWidgetId("tempSegEventList_lblEventTitle"), 0);

		} else if (SgConfiguration.getInstance().isIOS()) {
			Segment segSplashEvents = new Segment(WidgetIdsPicker.getWidgetId("frmEventsLanding_segEventList"),
					WidgetIdsPicker.getWidgetId("tempSegEventList_lblEventTitle"));
			rate = segSplashEvents.getElementWithIndex(0);

		}
		storeUpcomingEventTitle = rate.getText();
		rate.click();
	}

	public static void UpcommingDetailValidate() throws Exception {
		// if (SgConfiguration.getInstance().isAndroid()) {

		AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmEventDetails_lblTitle"));
		rate = new AppElement(WidgetIdsPicker.getWidgetId("frmEventDetails_lblTitle"));
		rate.getText().equals(storeUpcomingEventTitle);

		// }

	}

	public static boolean noUpcommingEventsVisible() throws Exception {
		if (SgConfiguration.getInstance().isAndroid()) {
			if (AppElement.isElementVisible("id", WidgetIdsPicker.getWidgetId("frmEventsLanding_lblNoEvents"))) {
				return true;
			}
		} else if (SgConfiguration.getInstance().isIOS()) {
			if (AppElement.isElementVisible("name", WidgetIdsPicker.getWidgetId("frmEventsLanding_lblNoEvents"))) {
				return true;
			}
		}
		return false;

	}
}
