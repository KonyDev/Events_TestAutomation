package test.EventsApp.tests;

import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

import test.EventsApp.EventsBaseTest;
import test.EventsApp.EventsWidgetId;
import test.EventsApp.forms.frmEventDetails;
import test.EventsApp.forms.frmEventsLanding;
import test.EventsApp.forms.frmPresenter;
import test.EventsApp.forms.frmSchedular;
import test.common.Alerts;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;

public class EventDetailsTests extends EventsBaseTest{
	
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
	static void test_AllEventsPresenter() throws Exception {
		try {
			SoftAssert sa = new SoftAssert();
			sa.assertTrue(AppElement.waitForEnable(EventsWidgetId.getWidgetId("userwidgetmodel_flxmenu3"), 3),
					"AllEvents Option not available");
			frmEventsLanding.clickOnAllEventsMenu();
			frmEventsLanding.FirstEventClick();
			frmEventDetails.navigateToPresenter();
			sa.assertTrue(frmPresenter.segSpeakerVisibility());
			frmPresenter.exitPresenter();
			frmEventDetails.navigateBack();
			sa.assertAll();
		} catch (Exception e) {
			Assert.fail("Verify " + e.getMessage());
		}

	}
	
	@Test
	static void test_AllEventsSchedular() throws Exception {
		try {
			SoftAssert sa = new SoftAssert();
			sa.assertTrue(AppElement.waitForEnable(EventsWidgetId.getWidgetId("userwidgetmodel_flxmenu3"), 3),
					"AllEvents Option not available");
			frmEventsLanding.clickOnAllEventsMenu();
			frmEventsLanding.FirstEventClick();
			frmEventDetails.navigateToSchedule();
			sa.assertTrue(frmSchedular.timeLineVisibility());
			frmSchedular.exitSchedular(); 
			frmEventDetails.navigateBack();
			sa.assertAll();
		} catch (Exception e) {
			Assert.fail("Verify " + e.getMessage());
		}

	}
}
