package test.EventsApp.forms;

import test.EventsApp.EventsWidgetId;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;


public class frmEventsLanding {
	
	static String storeEventTitle;
	static String storeUpcomingEventTitle;
	static public AppElement rate;


  public frmEventsLanding() throws Exception {
  AppElement lblHeader=new AppElement(EventsWidgetId.getWidgetId("frmEventsLanding_frmEventsLanding"));
  }
public void btnExpMore() throws Exception{ 
  AppElement btnExpMore=new AppElement(EventsWidgetId.getWidgetId("${frmname}_btnExpMore"));
  btnExpMore.click();
  }
public void btnHamburger() throws Exception{ 
  AppElement btnHamburger=new AppElement(EventsWidgetId.getWidgetId("frmEventsLanding_btnHamburger"));
  btnHamburger.click();
  }
public static frmSearch btnSearchIcon() throws Exception{ 
  AppElement btnSearchIcon=new AppElement(EventsWidgetId.getWidgetId("frmEventsLanding_btnSearchIcon"));
  btnSearchIcon.click();
  return new frmSearch();
  }
public void btnVerticalStripSS() throws Exception{ 
  AppElement btnVerticalStripSS=new AppElement(EventsWidgetId.getWidgetId("${frmname}_btnVerticalStripSS"));
  btnVerticalStripSS.click();
  }


public void rchTextDateSS(String text) throws Exception{
  AppElement rchTextDateSS=new AppElement(EventsWidgetId.getWidgetId("${frmname}_rchTextDateSS"));
  rchTextDateSS.type(text);
  }
public void rchtxtMonthSS(String text) throws Exception{
  AppElement rchtxtMonthSS=new AppElement(EventsWidgetId.getWidgetId("${frmname}_rchtxtMonthSS"));
  rchtxtMonthSS.type(text);
  }


public static frmEventDetails segEventList(String label) throws Exception{
	if (SgConfiguration.getInstance().isAndroid()) {
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblEvent = new Segment(EventsWidgetId.getWidgetId("frmEventsLanding_segEventList"),EventsWidgetId.getWidgetId("tempSegEventList_lblEventTitle"));
		lblEvent.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	}else if(SgConfiguration.getInstance().isIOS()){
		try {
			Segment lblEvent = new Segment(EventsWidgetId.getWidgetId("frmEventsLanding_segEventList"),EventsWidgetId.getWidgetId("tempSegEventList_lblEventTitle"));
			lblEvent.swipeUp();
			lblEvent.getElementWithIndex(2).click();
			}catch(Exception e){
			
				//Handle Exception Code Here
			}
	}
		return new frmEventDetails();
	} 
public static frmEventsLanding clickOnAllEventsMenu() throws Exception {
	AppElement.waitForEnable(EventsWidgetId.getWidgetId("userwidgetmodel_flxmenu3"));
	AppElement allEvents = new AppElement(EventsWidgetId.getWidgetId("userwidgetmodel_flxmenu3"));
	allEvents.click();
	return new frmEventsLanding();

}
public static String getAllEventsTitle() throws Exception {
	AppElement.waitForEnable(EventsWidgetId.getWidgetId("frmEventsLanding_lblHeaderTitle"));
	AppElement lblHeaderTitle = new AppElement(EventsWidgetId.getWidgetId("frmEventsLanding_lblHeaderTitle"));
	return lblHeaderTitle.getText();

}

//public static String getUpcommingEventsTitle() throws Exception {
//	AppElement.waitForEnable(EventsWidgetId.getWidgetId("frmEventsLanding_lblHeaderTitle"));
//	AppElement rate = new AppElement(EventsWidgetId.getWidgetId("frmEventsLanding_lblHeaderTitle"));
//	return rate.getText();
//
//}
public static String getFirstEventTitle() throws Exception {
	String EventLandingTitle;
	AppElement firstEventTitle = null;
	if (SgConfiguration.getInstance().isAndroid()) {

		AppElement.waitForEnable(EventsWidgetId.getWidgetId("tempSegEventList_lblEventTitle"));
		 firstEventTitle = new AppElement(EventsWidgetId.getWidgetId("tempSegEventList_lblEventTitle"), 0);

	} else if (SgConfiguration.getInstance().isIOS()) {
		Segment segSplashEvents = new Segment(EventsWidgetId.getWidgetId("frmEventsLanding_segEventList"),
				EventsWidgetId.getWidgetId("tempSegEventList_lblEventTitle"));
		 firstEventTitle = segSplashEvents.getElementWithIndex(0);

	}
	EventLandingTitle = firstEventTitle.getText();
	firstEventTitle.click();
	return EventLandingTitle;
}


public static void clickOnUpcomingEventMenu() throws Exception {

	AppElement.waitForEnable(EventsWidgetId.getWidgetId("userwidgetmodel_flxmenu2"));
	AppElement upComingEventMenu = new AppElement(EventsWidgetId.getWidgetId("userwidgetmodel_flxmenu2"));
	upComingEventMenu.click();

}

//public static void UpcommingEventClick() throws Exception {
//	if (SgConfiguration.getInstance().isAndroid()) {
//		AppElement.waitForEnable(EventsWidgetId.getWidgetId("tempSegEventList_lblEventTitle"));
//		rate = new AppElement(EventsWidgetId.getWidgetId("tempSegEventList_lblEventTitle"), 0);
//
//	} else if (SgConfiguration.getInstance().isIOS()) {
//		Segment segSplashEvents = new Segment(EventsWidgetId.getWidgetId("frmEventsLanding_segEventList"),
//				EventsWidgetId.getWidgetId("tempSegEventList_lblEventTitle"));
//		rate = segSplashEvents.getElementWithIndex(0);
//
//	}
//	storeUpcomingEventTitle = rate.getText();
//	rate.click();
//}



public static boolean noEventsAvailable() throws Exception {
	if (SgConfiguration.getInstance().isAndroid()) {
		if (AppElement.isElementVisible("id", EventsWidgetId.getWidgetId("frmEventsLanding_lblNoEvents"))) {
			return true;
		}
	} else if (SgConfiguration.getInstance().isIOS()) {
		if (AppElement.isElementVisible("name", EventsWidgetId.getWidgetId("frmEventsLanding_lblNoEvents"))) {
			return true;
		}
	}
	return false;

}
public static frmEventDetails FirstEventClick() throws Exception {
	
	AppElement firstEventTitle = null;
	if (SgConfiguration.getInstance().isAndroid()) {

		AppElement.waitForEnable(EventsWidgetId.getWidgetId("tempSegEventList_lblEventTitle"));
		 firstEventTitle = new AppElement(EventsWidgetId.getWidgetId("tempSegEventList_lblEventTitle"), 0);

	} else if (SgConfiguration.getInstance().isIOS()) {
		Segment segSplashEvents = new Segment(EventsWidgetId.getWidgetId("frmEventsLanding_segEventList"),
				EventsWidgetId.getWidgetId("tempSegEventList_lblEventTitle"));
		 firstEventTitle = segSplashEvents.getElementWithIndex(0);

	}	
	firstEventTitle.click();
	return new frmEventDetails();
}

public static frmLogin loginBtnClick() throws Exception{
	AppElement loginBtn=new AppElement(EventsWidgetId.getWidgetId("frmEventsLanding_btnClick"));
	loginBtn.click();
	return new frmLogin();
}

public static frmLogin myEventsMenuClick() throws Exception{
	AppElement myEvents=new AppElement(EventsWidgetId.getWidgetId("userwidgetmodel_flxmenu1"));
	myEvents.click();
	return new frmLogin();
}

public static frmLogin ProfileMenuClick() throws Exception{
	AppElement profile=new AppElement(EventsWidgetId.getWidgetId("userwidgetmodel_flxmenu0"));
	profile.click();
	return new frmLogin();
}

}