package test.EventsApp.forms;

import test.EventsApp.EventsWidgetId;
import test.common.AppElement;


public class frmSchedular {


  public frmSchedular() throws Exception {
  AppElement lblHeader=new AppElement(EventsWidgetId.getWidgetId("frmSchedular_frmSchedular"));
  }
public void btnSearchIcon() throws Exception{ 
  AppElement btnSearchIcon=new AppElement(EventsWidgetId.getWidgetId("${frmname}_btnSearchIcon"));
  btnSearchIcon.click();
  }
public static boolean timeLineVisibility() throws Exception{
	AppElement timeline=new AppElement(EventsWidgetId.getWidgetId("userwidgetmodel_flexSegTimeLineMain"));	
	return timeline.isElementVisible();
}
public static frmEventDetails exitSchedular() throws Exception{
	AppElement flxClose=new AppElement(EventsWidgetId.getWidgetId("frmSchedular_flexCloseIcon"));
	flxClose.click();
	return new frmEventDetails();
}





}