package test.EventsApp.forms;

import test.EventsApp.EventsWidgetId;
import test.common.AppElement;


public class frmProfile {


  public frmProfile() throws Exception {
  AppElement lblHeader=new AppElement(EventsWidgetId.getWidgetId("frmProfile_btnBack"));
  }
public void btnBack() throws Exception{ 
  AppElement btnBack=new AppElement(EventsWidgetId.getWidgetId("${frmname}_btnBack"));
  btnBack.click();
  }





}