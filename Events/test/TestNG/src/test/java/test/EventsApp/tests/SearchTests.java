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
import test.EventsApp.forms.frmSearch;
import test.common.Alerts;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;

public class SearchTests extends EventsBaseTest {
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
	static void test_searchWithEmptyValue() throws Exception {
		try {
			SoftAssert sa = new SoftAssert();
			frmEventsLanding.clickOnAllEventsMenu();
			frmEventsLanding.btnSearchIcon();
			frmSearch.btnCat1();
			frmSearch.btnCat2();
			frmSearch.btnCat3();
			frmSearch.btnCat4();
			frmSearch.btnCat5();
			frmSearch.btnSearchIcon();
			sa.assertTrue(frmEventsLanding.noEventsAvailable());
			sa.assertAll();
		} catch (Exception e) {
			Assert.fail("Verify " + e.getMessage());
		}

	}
	@Test
	static void test_searchWithEventName() throws Exception {
		try {
			SoftAssert sa = new SoftAssert();
			frmEventsLanding.clickOnAllEventsMenu();
			frmEventsLanding.btnSearchIcon();
			if(frmSearch.chkbtnSelectAllAvailability())
			{
			frmSearch.btnSelectAll();
			}
			frmSearch.txtSearch("kony payments app");
			frmSearch.segSelectFirstSearchResult();
			frmSearch.btnSearchIcon();
			String searchResult=frmEventsLanding.getFirstEventTitle();
			frmEventDetails.navigateBack();
			sa.assertEquals(searchResult, "Kony Payments App Demo");
			sa.assertAll();
		} catch (Exception e) {
			Assert.fail("Verify " + e.getMessage());
		}

	}
	
	@Test
	static void test_searchClearWithCrossBtn() throws Exception {
		try {
			SoftAssert sa = new SoftAssert();
			frmEventsLanding.clickOnAllEventsMenu();
			frmEventsLanding.btnSearchIcon();			
			frmSearch.txtSearch("kony payments app demo");
			frmSearch.btnCross();
			sa.assertEquals(frmSearch.getTxtFrmSearch(),"Event name..");
			frmSearch.btnSearchIcon();
			sa.assertAll();
		} catch (Exception e) {
			Assert.fail("Verify " + e.getMessage());
		}

	}
	
	@Test
	static void test_searchWithNonExistingEventName() throws Exception {
		try {
			SoftAssert sa = new SoftAssert();
			frmEventsLanding.clickOnAllEventsMenu();
			frmEventsLanding.btnSearchIcon();
			if(frmSearch.chkbtnSelectAllAvailability())
			{
			frmSearch.btnSelectAll();
			}
			frmSearch.txtSearch("Sample");
			sa.assertFalse(frmSearch.verifySegSugVisibility());
			frmSearch.btnSearchIcon();
			sa.assertTrue(frmEventsLanding.noEventsAvailable());
			sa.assertAll();
		} catch (Exception e) {
			Assert.fail("Verify " + e.getMessage());
		}

	}
}
