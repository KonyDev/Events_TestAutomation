package test.EventsApp.forms;

import test.EventsApp.EventsWidgetId;
import test.common.AppElement;
import test.common.Segment;
import test.common.SgConfiguration;

import java.util.HashMap;

import org.kony.qa.stargate.wrappers.appy.Driver;
import org.openqa.selenium.JavascriptExecutor;


public class frmSplash {

	static public AppElement rate;

  public frmSplash() throws Exception {
  AppElement lblHeader=new AppElement(EventsWidgetId.getWidgetId("frmSplash_segSearchResult"));
  }




public void segSplashEvents(String label) throws Exception{
		try {
		AppElement.scrollUntilVisible(label);
		Segment lblStatusKA = new Segment(EventsWidgetId.getWidgetId("${frmname}_segSplashEvents"),EventsWidgetId.getWidgetId("${frmname}_btnSkip"));
		lblStatusKA.clickSegRowElementbyLabel(label);
		}catch(Exception e){
		
			//Handle Exception Code Here
		}
	} 
public static String getSplashScreen1Text() throws Exception {
	AppElement screen1Text=null;
	if (SgConfiguration.getInstance().isAndroid()) {
		AppElement.waitForEnable(EventsWidgetId.getWidgetId("segSplash_lblSplashDesc"));
		 screen1Text = new AppElement(EventsWidgetId.getWidgetId("segSplash_lblSplashDesc"));

	} else if (SgConfiguration.getInstance().isIOS()) {
		Segment segSplashEvents = new Segment(EventsWidgetId.getWidgetId("frmSplash_segSplashEvents"),
				EventsWidgetId.getWidgetId("segSplash_lblSplashDesc"));
		 screen1Text = segSplashEvents.getElementWithIndex(0);
	}
	return screen1Text.getText();

}

public static String getSplashSwipeText() throws Exception {
	AppElement screen2Text=null,swipeEle=null;;
	if (SgConfiguration.getInstance().isAndroid()) {
		AppElement.waitForEnable(EventsWidgetId.getWidgetId("segSplash_lblSplashDesc"));
		swipeEle = new AppElement(EventsWidgetId.getWidgetId("segSplash_lblSplashDesc"));
		swipeEle.swipeLeft();
		screen2Text = new AppElement(EventsWidgetId.getWidgetId("segSplash_lblSplashDesc"));
	} else if (SgConfiguration.getInstance().isIOS()) {
		/*TouchAction action1 = new TouchAction((MobileDriver) Driver.getInstance().getAppy()).press(240, 445)
				.waitAction(30).moveTo(50, 445).release();
		action1.perform();*/
		AppElement.waitForEnable(EventsWidgetId.getWidgetId("frmSplash_segSplashEvents"));
		
		JavascriptExecutor js = (JavascriptExecutor) Driver.getInstance().getAppy();
		HashMap<String, String> swipeObject = new HashMap<String, String>();
		swipeObject.put("direction", "left");
		js.executeScript("mobile: swipe", swipeObject);
		
		Segment segSplashEvents = new Segment(EventsWidgetId.getWidgetId("frmSplash_segSplashEvents"),
				EventsWidgetId.getWidgetId("segSplash_lblSplashDesc"));
		screen2Text = segSplashEvents.getElementWithIndex(0);

	}
	return screen2Text.getText();

}

public static void skipSplashScreen() throws Exception {
	AppElement screen3Text=null;
	if (SgConfiguration.getInstance().isAndroid()) {
		AppElement.waitForEnable(EventsWidgetId.getWidgetId("segSplash_btnSkip"));
		screen3Text = new AppElement(EventsWidgetId.getWidgetId("segSplash_btnSkip"));
		screen3Text.click();
	} else if (SgConfiguration.getInstance().isIOS()) {
		Segment segSplashEvents = new Segment(EventsWidgetId.getWidgetId("frmSplash_segSplashEvents"),
				EventsWidgetId.getWidgetId("segSplash_btnSkip"));
		segSplashEvents.clickSegRowElementbyLabel("SKIP");
	}
}

}