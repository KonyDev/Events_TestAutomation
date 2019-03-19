package test.EventsApp.forms;

import test.EventsApp.EventsWidgetId;
import test.common.AppElement;


public class frmLocation {


  public frmLocation() throws Exception {
  AppElement lblHeader=new AppElement(EventsWidgetId.getWidgetId("frmLocation_frmLocation"));
  }
  public static frmEventDetails exitLocation() throws Exception{
		AppElement flxClose=new AppElement(EventsWidgetId.getWidgetId("frmLocation_flxClose"));
		flxClose.click();
		return new frmEventDetails();
	}




}