define({
  eventList: null,
  /**
   * @function onNavigate
   * @description This function is used to populate data on the form while navigating to it.
   * @private
   */
  onNavigate: function () {
    try{
    this.view.menuItem.setSelectedFlex(1);
    this.view.flxScEventList.removeAll();
    if (glbUserAttributes !== undefined && glbUserAttributes !== null && glbUserAttributes !== {}) {
      this.view.dashboard.text = glbUserAttributes.firstname;
    }
    }catch(error){
      kony.print("FrmAllEvents Controller"+JSON.stringify(error));
    }
  },
  /**
   * @function ProcessEventData
   * @description This function is used to pre process the data before setting it to the form widget.
   * @private
   */
  ProcessEventData: function (records) {
    this.view.flxScEventList.removeAll();
    if (records === null || records === undefined)
      return;
    var noOfEvents = records.length;
    var eventList = [];
    var event;
    var location;
    try {
      for (var i = 0; i < noOfEvents; i++) {
        event = records[i];
        location = "";
        if(records[i]["event_banners"]!== null&&records[i]["event_banners"]!== undefined){
          if(records[i]["event_banners"].length>0){
            if(records[i]["event_banners"][0]["banner_url"]===undefined||records[i]["event_banners"][0]["banner_url"]===null){
              records[i]["event_banners"][0]["banner_url"]="event01.jpg";
            }
          }else{
            records[i]["event_banners"]=[{"banner_url":"event01.jpg"}];
          }
        }else{
          records[i]["event_banners"]=[{"banner_url":"event01.jpg"}];
        }
       
        if (records[i]["name"] === null || records[i]["name"] === undefined) {
          records[i]["name"]= "Name not available";
        }
        if (records[i]["event_category"] === null || records[i]["event_category"] ===undefined) {
          records[i]["event_category"] = "NA";
        } else {
          records[i]["event_category"]  = getEventCategory(records[i]["event_category"]);
        }
        records[i]["event_date"] = getDateRange(records[i]["start_date"],records[i]["end_date"]);//records[i]["start_date_mon"] + " - " + records[i]["end_date_mon"] + "," + records[i]["end_year"];
      }
      eventList=records;
      this.eventList = eventList;
      this.displayEvents(eventList);
    } catch (excp) {
      kony.print("exception occured while parsing the response: " + excp.message);
    }
  },
  /**
   * @function getEventsData
   * @description This function is used to fetch all events.
   * @private
   */
  getEventsData: function () { 
    showLoading(this);
    try {
      var client = kony.sdk.getCurrentInstance();
      var intgService;
      intgService = client.getIntegrationService("EventsOrchService");
      intgService.invokeOperation("getAllEventDetail",{},{},
                                  this.eventFetchSuccessCallback.bind(this),
                                  this.eventFetchFailureCallback.bind(this));
    } catch (excp) {
      this.stopLoadingScreen();
      alert(excp.message);
    }
  },
  /**
   * @function eventFetchSuccessCallback
   * @description This function is the success callback for the getEventsData method.
   * @private
   * @param {JSONArray} result
   */
  eventFetchSuccessCallback: function (result) {
    try{
    var eventDetail=parseEventData(result);
    this.stopLoadingScreen();
    this.ProcessEventData(eventDetail);
    }catch(error){
      kony.print("FrmAllEvents Controller"+JSON.stringify(error));
    }
  },
  /**
   * @function eventFetchFailureCallback
   * @description This function is the failure callback for the getEventsData method.
   * @private
   * @param {JSON} error
   */
  eventFetchFailureCallback: function (error) {
    this.stopLoadingScreen();
    alert("something went wrong.Please try later");
  },
  /**
   * @function stopLoadingScreen
   * @description This function is used to dismiss the loading screen.
   * @private
   */
  stopLoadingScreen: function () {
    kony.application.dismissLoadingScreen();
  },
  /**
   * @function navigateToFormCreateNewEvent
   * @description This function is used to navigate to form CreateNewEvent.
   * @private
   */
  navigateToFormCreateNewEvent:function(){
    try{
      var navobj=new kony.mvc.Navigation("frmCreateEvent");
      navobj.navigate();
    }catch(excp){
      kony.print("excp: "+excp.message);
    }
  },
  /**
   * @function displayEvents
   * @description This function is used to displayEvents
   * @private
   * @param {JSONArray} eventList
   */
  displayEvents: function (eventList) {
    try{
    var eventListLength = eventList.length;
    var flexContainer;
    var eventComp;
    var left = 2;
    var top = -340;
    var i;
    for (i = 0; i < eventListLength; i++) {
      if (i % 3 === 0) {
        left = 2;
        top = top + 370;
      }
      eventComp = getEventDescComp(i, left, top, eventList[i], this);
      this.view.flxScEventList.add(eventComp);
      left = left + 354;
    }
    if (i % 3 === 0) {
      left = 0;
      top = top + 370;
      //getCreateNewEventComp
     this.view.flxScEventList.add(getCreateNewEventComp(left, top,this));
    } else {
     this.view.flxScEventList.add(getCreateNewEventComp(left, top,this));
    }
    if(top<500){
      top=430;
    }
    var footer = getFooter(0, top + 350);
    this.view.flxScEventList.add(footer);
    this.view.forceLayout();
    }catch(error){
      kony.print("FrmAllEvents Controller"+JSON.stringify(error));
    }
  },
  /**
   * @function onViewEvent
   * @description This function is used to view the eventdetails
   * @param {JSON} event
   */
  onViewEvent : function(event){
    this.view.eventpreview.setEventDetails(event);
    this.animateDetailsPage(19);
  },
  /**
   * @function onEventEdit
   * @description This function is used to navigate to the frmCreteEvent and edit the existing event by passing event data to it.
   * @private
   * @param {JSON} event
   */
  onEventEdit: function (event) {
    try{
    var navObj = new kony.mvc.Navigation("frmCreateEvent");
    var param = {};
    param.editMode = true;
    param.eventData = event;
    navObj.navigate(param);
    }catch(error){
      kony.print("FrmAllEvents Controller"+JSON.stringify(error));
    }
  },
  /**
   * @function onEventRemove
   * @description This function is used to navigate to the frmCreteEvent and edit the existing event by passing event data to it.
   * @private
   * @param {JSON} event
   */
  onEventRemove: function (event) {
    try{
    this.eventsToDel = [];
    this.eventsToDel.push({
      "event_id": event.event_id
    });
    var pspConfig = {
      "iconPosition": constants.ALERT_CONTENT_ALIGN_CENTER,
      "contentAlignment": constants.ALERT_ICON_POSITION_LEFT
    };
    var alert = kony.ui.Alert({
      "message": "Are you sure you want to delete this event?",
      "alertType": constants.ALERT_TYPE_CONFIRMATION,
      "alertTitle": "Delete",
      "yesLabel": "Yes",
      "noLabel": "No",
      "alertIcon": "",
      "alertHandler": handleAlert.bind(this)
    },
                              pspConfig);
    function handleAlert(response) {
      if (response)
        this.delete ("event", this.getEventsData, this.eventsToDel);
    }
    }catch(error){
      kony.print("FrmAllEvents Controller"+JSON.stringify(error));
    }
  },
  onMenuItemClick: function () {},

  delete : function (object, callback, data) {
    try{
    showLoading(this);
    this.delCount = 0;
    this.delObjectName = object;
    this.delCallBack = callback;
    this.dataToDelete = data;
    this.deleteRecursiveCommon();
    }catch(error){
      kony.print("FrmAllEvents Controller"+JSON.stringify(error));
    }
  },

  //Delete Recursive call
  deleteRecursiveCommon: function () {
    try {
      if (this.dataToDelete.length) {
        var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
          "access": "online"
        });
        var dataObject = new kony.sdk.dto.DataObject(this.delObjectName);
        dataObject.setRecord(this.dataToDelete[this.delCount]);
        var options = {
          "dataObject": dataObject
        };
        objSvc.deleteRecord(options,
                            this.deleteRecursiveCommonSuccessCallback.bind(this),
                            this.deleteRecursiveCommonFailureCallback.bind(this));
      } else {
        this.delCallBack();
      }
    } catch (err) {
      kony.application.dismissLoadingScreen();
      alert("Something went wrong while deleting " + this.delObjectName + " Error:" + JSON.stringify(error));
    }

  },

  deleteRecursiveCommonSuccessCallback: function (success) {
    try{
    this.delCount++;
    if (this.delCount < this.dataToDelete.length) {
      this.deleteRecursiveCommon();
    } else {
      this.delCallBack();
    }
    }catch(error){
      kony.print("FrmAllEvents Controller"+JSON.stringify(error));
    }
  },

  deleteRecursiveCommonFailureCallback: function (error) {
    kony.application.dismissLoadingScreen();
    alert("Something went wrong while deleting " + this.delObjectName + " Error:" + JSON.stringify(error));
  },
  navigateToManageUser : function(){
    try{
      var nav = new kony.mvc.Navigation("frmManageUser");
      nav.navigate();
    }catch(excp){
      kony.print("Exception while navigating to manage user form!"+JSON.stringify(excp));
    }

  },
  
  /**
	 * @function animateDetailsPage
	 * @description Function to animate the event previe page to the given left
	 * @private
	 */
	animateDetailsPage: function (left) {
		try {
			this.view.eventpreview.animate(
				kony.ui.createAnimation({
					100: {
						left: left + "%",
						"stepConfig": {}
					}
				}), {
				delay: 0,
				fillMode: kony.anim.FILL_MODE_FORWARDS,
				duration: 0.1
			}, {
				animationEnd: function () {
                }
			});
		} catch (error) {
			kony.print("frm Event Login Controller" + JSON.stringify(error));
		}
	},

});