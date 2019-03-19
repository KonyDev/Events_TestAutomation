package test.EventsApp.forms;

import test.EventsApp.EventsWidgetId;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;


public class frmSearch {


 public frmSearch() throws Exception {
  AppElement lblHeader=new AppElement(EventsWidgetId.getWidgetId("frmSearch_frmSearch"));
  }
public static void btnCat1() throws Exception{ 
  AppElement btnCat1=new AppElement(EventsWidgetId.getWidgetId("frmSearch_btnCat1"));
  btnCat1.click();
  }
public static void btnCat2() throws Exception{ 
  AppElement btnCat2=new AppElement(EventsWidgetId.getWidgetId("frmSearch_btnCat2"));
  btnCat2.click();
  }
public static void btnCat3() throws Exception{ 
  AppElement btnCat3=new AppElement(EventsWidgetId.getWidgetId("frmSearch_btnCat3"));
  btnCat3.click();
  }
public static void btnCat4() throws Exception{ 
  AppElement btnCat4=new AppElement(EventsWidgetId.getWidgetId("frmSearch_btnCat4"));
  btnCat4.click();
  }
public static void btnCat5() throws Exception{ 
  AppElement btnCat5=new AppElement(EventsWidgetId.getWidgetId("frmSearch_btnCat5"));
  btnCat5.click();
  }
public static void btnCross() throws Exception{
	if(SgConfiguration.getInstance().isAndroid()) {
  AppElement btnCross=new AppElement(EventsWidgetId.getWidgetId("frmSearch_btnCross"));
  btnCross.click();
	}if(SgConfiguration.getInstance().isIOS()) {
		AppElement btnCross=new AppElement("Clear text");
		  btnCross.click();
	}
  }
public static frmEventsLanding btnSearchIcon() throws Exception{ 
  AppElement btnSearchIcon=new AppElement(EventsWidgetId.getWidgetId("frmSearch_btnSearchIcon"));
  btnSearchIcon.click();
  return new frmEventsLanding();
  }
public static void btnSelectAll() throws Exception{ 
  AppElement btnSelectAll=new AppElement(EventsWidgetId.getWidgetId("frmSearch_btnSelectAll"));
  btnSelectAll.click();
  }

public static void txtSearch(String text) throws Exception{
	  AppElement txtSearch=new AppElement(EventsWidgetId.getWidgetId("frmSearch_txtSearch"));
	  txtSearch.type(text);
	  if(SgConfiguration.getInstance().isIOS()) {
	    txtSearch.click();
	  }
	  
 }

public static String getTxtFrmSearch() throws Exception{
	  AppElement txtSearch=new AppElement(EventsWidgetId.getWidgetId("frmSearch_txtSearch"));
	  return txtSearch.getText();
	  }
public static boolean chkbtnSelectAllAvailability() throws Exception{
	AppElement selectAll=null;
	try{
		selectAll = new AppElement(EventsWidgetId.getWidgetId("frmSearch_btnSelectAll"));
		return true;
	}catch(Exception e){
		
			return false;
		
	}
}

public static void segSelectFirstSearchResult() throws Exception{
		try {
		Segment segSugg = new Segment(EventsWidgetId.getWidgetId("frmSearch_segSearchResult"),EventsWidgetId.getWidgetId("tempSegSearch_flexMainSearchTemp"));
		AppElement frstSugestn=segSugg.getElementWithIndex(0);
		frstSugestn.click();
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public static boolean verifySegSugVisibility() throws Exception{
	AppElement frstSugestn=null;
	try {
	Segment segSugg = new Segment(EventsWidgetId.getWidgetId("frmSearch_segSearchResult"),EventsWidgetId.getWidgetId("tempSegSearch_flexMainSearchTemp"));
	frstSugestn=segSugg.getElementWithIndex(0);
	return true;
	}catch(Exception e){
	
		return false;
	}
}

}