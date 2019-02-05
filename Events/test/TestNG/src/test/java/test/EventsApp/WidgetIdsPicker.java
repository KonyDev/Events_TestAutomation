package test.EventsApp;

import java.io.IOException;

import test.common.SgConfiguration;
import test.common.WidgetID;

public class WidgetIdsPicker {
static WidgetID widgetIds;
	
	public static String getWidgetId(String key) throws Exception,IOException{
		System.out.println("key is "+key+" \n");
		if(widgetIds==null){
			if(SgConfiguration.getInstance().getKeyValue("Device").equalsIgnoreCase("Tablet"))
				widgetIds = new WidgetID("WidgetIds.properties");
			else
				widgetIds = new WidgetID("WidgetIds.properties");
		}
		
			System.out.println("id is "+widgetIds.getWidgetId(key));
		return widgetIds.getWidgetId(key);
	}

}
