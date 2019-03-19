package test.EventsApp.forms;

import test.EventsApp.EventsWidgetId;
import test.common.AppElement;
import test.common.Segment;


public class frmPresenter {


  public frmPresenter() throws Exception {
  AppElement lblHeader=new AppElement(EventsWidgetId.getWidgetId("frmPresenter_flxPresenterRoot"));
  }




public static boolean segSpeakerVisibility() throws Exception{
		try {
		//AppElement.scrollUntilVisible(label);
		Segment segVisible = new Segment(EventsWidgetId.getWidgetId("frmPresenter_segSpeaker"),EventsWidgetId.getWidgetId("tempSegSpeakerRow_flexSegSpeakerRoot"));
		return segVisible.isElementVisible();
		}catch(Exception e){		
			return false;
		}
	} 
public static frmEventDetails exitPresenter() throws Exception{
	AppElement flxClose=new AppElement(EventsWidgetId.getWidgetId("frmPresenter_flxClose"));
	flxClose.click();
	return new frmEventDetails();
}
}