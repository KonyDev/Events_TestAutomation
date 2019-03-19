package test.EventsApp.forms;

import test.EventsApp.EventsWidgetId;
import test.common.AppElement;


public class frmEventDetails {


  public frmEventDetails() throws Exception {
  AppElement lblHeader=new AppElement(EventsWidgetId.getWidgetId("frmEventDetails_frmEventDetails"));
  }
public void btnRegister() throws Exception{ 
  AppElement btnRegister=new AppElement(EventsWidgetId.getWidgetId("${frmname}_btnRegister"));
  btnRegister.click();
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
public static String getAllEventDetailTitle() throws Exception {

	AppElement.waitForEnable(EventsWidgetId.getWidgetId("frmEventDetails_lblTitle"));
	AppElement detailTitle = new AppElement(EventsWidgetId.getWidgetId("frmEventDetails_lblTitle"));
	return detailTitle.getText();

}

public static void navigateBack() throws Exception {
	AppElement.waitForEnable(EventsWidgetId.getWidgetId("frmEventDetails_flxClose"));
	AppElement back = new AppElement(EventsWidgetId.getWidgetId("frmEventDetails_flxClose"));
	back.click();

}

//public static void UpcommingDetailValidate() throws Exception {
//	AppElement.waitForEnable(EventsWidgetId.getWidgetId("frmEventDetails_lblTitle"));
//	rate = new AppElement(EventsWidgetId.getWidgetId("frmEventDetails_lblTitle"));
//	rate.getText().equals(storeUpcomingEventTitle);
//
//}
public static frmPresenter navigateToPresenter() throws Exception{ 
	  AppElement presenter=new AppElement(EventsWidgetId.getWidgetId("frmEventDetails_flxInfoItem2"));
	  presenter.click();
	  return new frmPresenter();
	  }
public static frmSchedular navigateToSchedule() throws Exception{ 
	  AppElement presenter=new AppElement(EventsWidgetId.getWidgetId("frmEventDetails_flxInfoItem0"));
	  presenter.click();
	  return new frmSchedular();
	  }
public static frmLocation navigateToLocation() throws Exception{ 
	  AppElement presenter=new AppElement(EventsWidgetId.getWidgetId("frmEventDetails_flxInfoItem1"));
	  presenter.click();
	  return new frmLocation();
	  }

}