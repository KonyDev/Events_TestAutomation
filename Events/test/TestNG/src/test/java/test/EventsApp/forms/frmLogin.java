package test.EventsApp.forms;

import java.util.List;
import java.util.Set;

import org.kony.qa.stargate.wrappers.appy.Driver;
import org.openqa.selenium.WebDriver.TargetLocator;
import org.openqa.selenium.WebElement;

import test.EventsApp.EventsWidgetId;
import test.common.AppElement;
import test.common.SgConfiguration;
import org.kony.qa.stargate.wrappers.appy.SwitchContext;

public class frmLogin {


 public frmLogin() throws Exception {
  AppElement lblHeader=new AppElement(EventsWidgetId.getWidgetId("frmLogin_frmLogin"));
  }
public static void btnLinkedIn() throws Exception{ 
  AppElement btnLinkedIn=new AppElement(EventsWidgetId.getWidgetId("frmLogin_btnLinkedIn"));
  btnLinkedIn.click();
  }
public void btnOffice365() throws Exception{ 
  AppElement btnOffice365=new AppElement(EventsWidgetId.getWidgetId("${frmname}_btnOffice365"));
  btnOffice365.click();
  }
public void btnPleaseWait() throws Exception{ 
  AppElement btnPleaseWait=new AppElement(EventsWidgetId.getWidgetId("${frmname}_btnPleaseWait"));
  btnPleaseWait.click();
  }
public static void headerButtonLeft() throws Exception{ 
  AppElement headerButtonLeft=new AppElement(EventsWidgetId.getWidgetId("frmLogin_headerButtonLeft"));
  headerButtonLeft.click();
  }
//public static void enterUsername(String text) throws Exception{
//	AppElement usrname=new AppElement("username");
//	  usrname.type(text);
//	  }
//public static  void enterPwd(String text) throws Exception{
//	AppElement pwd=new AppElement("password");
//	  pwd.type(text);
//	  }

//public static  void signIn() throws Exception{
//	//Driver driver=new Driver(null);
//
////	for (String contextName : contextNames) {
////	    System.out.println(contextNames); //prints out something like NATIVE_APP \n WEBVIEW_1
////	}
//	//SwitchContext sc=new SwitchContext();
//	SwitchContext.switchToWebViewContext();
//	List<AppElement> btnList=AppElement.getElementlistByClassName(Button());
//	AppElement signIn=btnList.get(3);
//	String str=signIn.getText();
//	System.out.println("SignIn String: "+str);
//	signIn.click();
//}
//public static  String Button() throws Exception {
//    //Returns the class of type Button with respective mobileOS 
//    if (SgConfiguration.getInstance().isAndroid()) {
//        return "android.widget.Button";
//    } else if(SgConfiguration.getInstance().isIOS()){
//        return "UIAButton";
//    }
//    return null;
//}
//
//public static void doLogin() throws Exception{
//	//enterUsername("farzana224@gmail.com");
//	//enterPwd("Wafask@30");
//	signIn();
//}

}