package test.EventsApp.tests;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import test.EventsApp.BaseConfigurations;
import test.EventsApp.WidgetIdsPicker;

// import com.sun.mail.imap.Utility;

import test.EventsApp.forms.eventsTestModule;
import test.common.Alerts;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;

public class EventsTest extends BaseConfigurations {

	@BeforeMethod
	public void beforeMethod() {
		AppElement skipBtnEle = null;
		AppElement hamburgerIconEle = null;
		try {
			if (SgConfiguration.getInstance().isAndroid()) {
				skipBtnEle = new AppElement(WidgetIdsPicker.getWidgetId("frmSplash_btnSkip"));
				skipBtnEle.click();
			} else if (SgConfiguration.getInstance().isIOS()) {
				Segment segSplashEvents = new Segment(WidgetIdsPicker.getWidgetId("frmSplash_segSplashEvents"),
						WidgetIdsPicker.getWidgetId("frmSplash_btnSkip"));
				segSplashEvents.clickSegRowElementbyLabel("SKIP");
				Thread.sleep(2000);
				Alerts.acceptAlert();
			}

			hamburgerIconEle = new AppElement(WidgetIdsPicker.getWidgetId("frmEventsLanding_btnHamburger"));
			hamburgerIconEle.click();

		} catch (Exception e) {
			try {
				if (SgConfiguration.getInstance().isAndroid()) {
					if (skipBtnEle == null) {
						hamburgerIconEle = new AppElement(WidgetIdsPicker.getWidgetId("frmEventsLanding_btnHamburger"));
						if (hamburgerIconEle.isElementVisible()) {

							hamburgerIconEle.click();
						}
					} else {
						e.printStackTrace();
					}
				} else if (SgConfiguration.getInstance().isIOS()) {
					if (!AppElement.isElementVisible("name",
							WidgetIdsPicker.getWidgetId("frmEventsLanding_btnHamburger"))) {
						Thread.sleep(2000);
						Alerts.acceptAlert();
						hamburgerIconEle = new AppElement(WidgetIdsPicker.getWidgetId("frmEventsLanding_btnHamburger"));
						hamburgerIconEle.click();
					} else {
						hamburgerIconEle = new AppElement(WidgetIdsPicker.getWidgetId("frmEventsLanding_btnHamburger"));
						hamburgerIconEle.click();
					}

				}
			} catch (Exception e1) {

				e1.printStackTrace();
			}
		}
	}

	@Test
	static void test_AllEventsTitle() throws Exception {
		try {
			SoftAssert sa = new SoftAssert();
			sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("userwidgetmodel_flxmenu3"), 3),
					"AllEvents Option not available");
			eventsTestModule.clickOnAllEventsMenu();
			sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmEventsLanding_lblHeaderTitle"), 3),
					"AllEvents Form Title is not available");
			sa.assertEquals(eventsTestModule.getAllEventsTitle(), "All Events");
			sa.assertAll();
		} catch (Exception e) {
			Assert.fail("Verify " + e.getMessage());
		}

	}

	@Test
	static void test_AllEventsEvent() throws Exception {
		try {
			SoftAssert sa = new SoftAssert();
			sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("userwidgetmodel_flxmenu3"), 3),
					"AllEvents Option not available");
			eventsTestModule.clickOnAllEventsMenu();
			sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmEventsLanding_lblHeaderTitle"), 3),
					"AllEvents Form Title is not available");
			sa.assertEquals(eventsTestModule.getAllEventsTitle(), "All Events");
			eventsTestModule.firstEventClick();
			sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmEventDetails_lblTitle"), 3),
					"Event deatil screen title not available");
			eventsTestModule.allEventDetailValidate();
			sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmEventDetails_flxClose"), 3),
					"Event detail close button not available");

			eventsTestModule.navigateBack();
			sa.assertAll();
		} catch (Exception e) {
			Assert.fail("Verify " + e.getMessage());
		}

	}

	@Test
	static void test_UpcomingEvents() throws Exception {
		try {

			SoftAssert sa = new SoftAssert();
			sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("userwidgetmodel_flxmenu2"), 3),
					"Upcoming Option not available");
			eventsTestModule.clickOnUpcomingEventMenu();
			sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmEventsLanding_lblHeaderTitle"), 3),
					"Upcoming Form Title is not available");
			sa.assertEquals(eventsTestModule.getUpcommingEventsTitle(), "Upcoming Events");
			if (!eventsTestModule.noUpcommingEventsVisible()) {
				eventsTestModule.UpcommingEventClick();
				sa.assertTrue(AppElement.waitForEnable(WidgetIdsPicker.getWidgetId("frmEventDetails_lblTitle"), 3),
						"Event deatail screen title not available");
				eventsTestModule.UpcommingDetailValidate();
			}
			sa.assertAll();
		} catch (Exception e) {
			Assert.fail("Verify " + e.getMessage());
		}

	}
}
