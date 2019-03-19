package test.EventsApp.tests;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;



import test.EventsApp.EventsBaseTest;
import test.EventsApp.EventsWidgetId;
import test.EventsApp.forms.frmEventDetails;
import test.EventsApp.forms.frmEventsLanding;
import test.EventsApp.forms.frmLocation;
import test.EventsApp.forms.frmLogin;
import test.common.Alerts;
import test.common.AppElement;
import test.common.SgConfiguration;
import test.common.Segment;

public class EventsLandingTests extends EventsBaseTest{
	@BeforeMethod
	public void beforeMethod() {
		AppElement skipBtnEle = null;
		AppElement hamburgerIconEle = null;
		try {
			if (SgConfiguration.getInstance().isAndroid()) {
				skipBtnEle = new AppElement(EventsWidgetId.getWidgetId("segSplash_btnSkip"));
				skipBtnEle.click();
			} else if (SgConfiguration.getInstance().isIOS()) {
				Segment segSplashEvents = new Segment(EventsWidgetId.getWidgetId("frmSplash_segSplashEvents"),
						EventsWidgetId.getWidgetId("segSplash_btnSkip"));
				segSplashEvents.clickSegRowElementbyLabel("SKIP");
				Thread.sleep(2000);
				Alerts.acceptAlert();
			}

			hamburgerIconEle = new AppElement(EventsWidgetId.getWidgetId("frmEventsLanding_btnHamburger"));
			hamburgerIconEle.click();

		} catch (Exception e) {
			try {
				if (SgConfiguration.getInstance().isAndroid()) {
					if (skipBtnEle == null) {
						hamburgerIconEle = new AppElement(EventsWidgetId.getWidgetId("frmEventsLanding_btnHamburger"));
						if (hamburgerIconEle.isElementVisible()) {

							hamburgerIconEle.click();
						}
					} else {
						e.printStackTrace();
					}
				} else if (SgConfiguration.getInstance().isIOS()) {
					if (!AppElement.isElementVisible("name",
							EventsWidgetId.getWidgetId("frmEventsLanding_btnHamburger"))) {
						Thread.sleep(2000);
						Alerts.acceptAlert();
						hamburgerIconEle = new AppElement(EventsWidgetId.getWidgetId("frmEventsLanding_btnHamburger"));
						hamburgerIconEle.click();
					} else {
						hamburgerIconEle = new AppElement(EventsWidgetId.getWidgetId("frmEventsLanding_btnHamburger"));
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
			sa.assertTrue(AppElement.waitForEnable(EventsWidgetId.getWidgetId("userwidgetmodel_flxmenu3"), 3),
					"AllEvents Option not available");
			frmEventsLanding.clickOnAllEventsMenu();
			sa.assertTrue(AppElement.waitForEnable(EventsWidgetId.getWidgetId("frmEventsLanding_lblHeaderTitle"), 3),
					"AllEvents Form Title is not available");
			sa.assertEquals(frmEventsLanding.getAllEventsTitle(), "All Events");
			sa.assertAll();
		} catch (Exception e) {
			Assert.fail("Verify " + e.getMessage());
		}

	}
	
	@Test
	static void test_AllEventsEvent() throws Exception {
		try {
			SoftAssert sa = new SoftAssert();
			sa.assertTrue(AppElement.waitForEnable(EventsWidgetId.getWidgetId("userwidgetmodel_flxmenu3"), 3),
					"AllEvents Option not available");
			frmEventsLanding.clickOnAllEventsMenu();
			String EventLandingTitle=frmEventsLanding.getFirstEventTitle();
			sa.assertTrue(AppElement.waitForEnable(EventsWidgetId.getWidgetId("frmEventDetails_lblTitle"), 3),
					"Event deatil screen title not available");
			String EventDetailTitle=frmEventDetails.getAllEventDetailTitle();
			sa.assertEquals(EventLandingTitle, EventDetailTitle);
			sa.assertTrue(AppElement.waitForEnable(EventsWidgetId.getWidgetId("frmEventDetails_flxClose"), 3),
					"Event detail close button not available");
			frmEventDetails.navigateBack();
			sa.assertAll();
		} catch (Exception e) {
			Assert.fail("Verify " + e.getMessage());
		}

	} 

	@Test
	static void test_UpcomingEvents() throws Exception {
		try {

			SoftAssert sa = new SoftAssert();
			sa.assertTrue(AppElement.waitForEnable(EventsWidgetId.getWidgetId("userwidgetmodel_flxmenu2"), 3),
					"Upcoming Option not available");
			frmEventsLanding.clickOnUpcomingEventMenu();
			sa.assertTrue(AppElement.waitForEnable(EventsWidgetId.getWidgetId("frmEventsLanding_lblHeaderTitle"), 3),
					"Upcoming Form Title is not available");
			sa.assertEquals(frmEventsLanding.getAllEventsTitle(), "Upcoming Events");
			if (!frmEventsLanding.noEventsAvailable()) {
				String EventLandingTitle=frmEventsLanding.getFirstEventTitle();
				sa.assertTrue(AppElement.waitForEnable(EventsWidgetId.getWidgetId("frmEventDetails_lblTitle"), 3),
						"Event deatail screen title not available");
				String EventDetailTitle=frmEventDetails.getAllEventDetailTitle();
				sa.assertEquals(EventLandingTitle, EventDetailTitle);
				frmEventDetails.navigateBack();
			}			
			sa.assertAll();
		} catch (Exception e) {
			Assert.fail("Verify " + e.getMessage());
		}

	}
	
	@Test
	
	static void test_Loginmenu() throws Exception{
		try{
			SoftAssert sa = new SoftAssert();
			frmEventsLanding.loginBtnClick();
			frmLogin.headerButtonLeft();
			sa.assertAll();
		}catch (Exception e){
			Assert.fail("Verify " + e.getMessage());
		}
	}
	
@Test
	
	static void test_myEventsmenu() throws Exception{
		try{
			SoftAssert sa = new SoftAssert();
			frmEventsLanding.loginBtnClick();
			frmLogin.headerButtonLeft();
			sa.assertAll();
		}catch (Exception e){
			Assert.fail("Verify " + e.getMessage());
		}
	}

@Test

static void test_profilesmenu() throws Exception{
	try{
		SoftAssert sa = new SoftAssert();
		frmEventsLanding.ProfileMenuClick();
		frmLogin.headerButtonLeft();
		sa.assertAll();
	}catch (Exception e){
		Assert.fail("Verify " + e.getMessage());
	}
}
@Test

static void test_offlineEvent() throws Exception{
	try{
		SoftAssert sa = new SoftAssert();
		frmEventsLanding.clickOnAllEventsMenu();
		frmEventsLanding.segEventList("Kony Payments App Demo");
		frmEventDetails.navigateToLocation();
		frmLocation.exitLocation();
		frmEventDetails.navigateBack();
		sa.assertAll();
	}catch (Exception e){
		Assert.fail("Verify " + e.getMessage());
	}
}
}
