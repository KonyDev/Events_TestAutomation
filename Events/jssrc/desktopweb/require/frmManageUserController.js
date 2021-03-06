define('userfrmManageUserController',{
    //Type your controller code here 
    eventList: null,
    record: null,
    selectedEvent: null,
    eventSubscriber: null,
    selectedUserIdToDelete: null,
    selectedRowIndexToDelete: null,
    /**
     * @function onNavigate
     * @description This function is used to populate data on the form while navigating to it.
     * @private
     */
    onNavigate: function() {
        try {
            this.view.menuItem.setSelectedFlex(3);
            this.view.flxEventDetailContainer.setVisibility(false);
            this.displayEventViewAndShare(0, 0);
        } catch (error) {
            kony.print("FrmManageUser Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function getAllEvent
     * @description This function is used to fetch all events and set it to dropdown list.
     * @private
     */
    getAllEvent: function() {
        this.setProfile();
        showLoading(this);
        try {
            var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
                "access": "online"
            });
            var dataObject = new kony.sdk.dto.DataObject("event");
            var odataUrl = "$select=event_id,name";
            dataObject.odataUrl = odataUrl;
            var options = {
                "dataObject": dataObject
            };
            objSvc.fetch(options, this.eventFetchSuccessCallback.bind(this), this.eventFetchFailureCallback.bind(this));
        } catch (excp) {
            this.dismissLoading();
            alert(excp.message);
        }
    },
    /**
     * @function eventFetchSuccessCallback
     * @description Success callback for the getAllEvent method
     * @private
     * @param{JSON} response
     */
    eventFetchSuccessCallback: function(response) {
        try {
            this.dismissLoading();
            this.eventList = response.records;
            this.mapEventToListBox(response.records);
        } catch (error) {
            kony.print("FrmManageUser Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function eventFetchFailureCallback
     * @description failure callback for the getAllEvent method
     * @private
     * @param{JSON} error
     */
    eventFetchFailureCallback: function(error) {
        kony.print("Error while fetching the event list: " + JSON.stringify(error));
        this.dismissLoading();
    },
    /**
     * @function mapEventToListBox
     * @description This function is used to populate the event list to the drop down list.
     * @private
     * @param{JSONArray} eventList
     */
    mapEventToListBox: function(eventList) {
        try {
            var masterDataList = [];
            masterDataList.push(["-1", "Select Event"]);
            if (eventList === undefined || eventList === null || eventList.length === 0) {
                masterDataList = [];
            } else {
                var masterDataObj = [];
                for (var i = 0; i < eventList.length; i++) {
                    masterDataObj = [];
                    masterDataObj.push(eventList[i].event_id);
                    masterDataObj.push(eventList[i].event_id + " - " + eventList[i].name);
                    masterDataList.push(masterDataObj);
                }
            }
            this.view.listBoxEvent.masterData = masterDataList;
            this.view.listBoxEvent.selectedKey = "-1";
        } catch (error) {
            kony.print("FrmManageUser Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function populateEvent
     * @description This function is used to display the selected event from the dropdown list.
     * @private
     */
    populateEvent: function() {
        try {
            if (this.eventList === null) return;
            var slectedKey = this.view.listBoxEvent.selectedKey;
            if (slectedKey === "-1") {
                alert("select event first!");
                return;
            }
            this.fetchEventDetailsWithID(slectedKey);
            this.getShareAndView(slectedKey);
        } catch (error) {
            kony.print("FrmManageUser Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function fetchEventDetailsWithID
     * @description This function is used to fetch the event wiht its ID
     * @private
     * @param{string} eventID
     */
    fetchEventDetailsWithID: function(eventID) {
        try {
            this.view.flxLoading.setVisibility(true);
            var controllerScope = this;
            var client = kony.sdk.getCurrentInstance();
            showLoading(this);
            var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
                "access": "online"
            });
            var dataObject = new kony.sdk.dto.DataObject("event");
            var options = {
                "dataObject": dataObject,
                "queryParams": {
                    "$filter": "event_id eq " + eventID + " and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))",
                    "$expand": "location,event_banners,presenter,event_metrics,event_registration"
                }
            };
            objSvc.fetch(options, this.fetchEventDetailsWithIDSuccessCallBack.bind(this), this.fetchEventDetailsWithIDFailureCallBack.bind(this));
        } catch (excp) {
            this.dismissLoading();
            kony.print(JSON.stringify(excp));
        }
    },
    /**
     * @function fetchEventDetailsWithID
     * @description This function is the success callback of the fetchEventDetailsWithID
     * @private
     * @param{JSON} response
     */
    fetchEventDetailsWithIDSuccessCallBack: function(response) {
        try {
            this.dismissLoading();
            this.selectedEvent = response.records[0];
            this.setEvent(response.records[0]);
        } catch (error) {
            kony.print("FrmManageUser Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function fetchEventDetailsWithIDFailureCallBack
     * @description This function is the failure callback of the fetchEventDetailsWithID
     * @private
     * @param{JSON} error
     */
    fetchEventDetailsWithIDFailureCallBack: function(error) {
        this.dismissLoading();
        kony.print(JSON.stringify(error));
    },
    /**
     * @function setEvent
     * @description function to display the selected event in the form.
     * @private
     * @param{JSON} record
     */
    setEvent: function(record) {
        try {
            if (this.eventList === null) return;
            this.view.lblEventTitle.text = checkValue(record.name);
            var registeredUser = record.event_registration;
            var bannerURL = record.event_banners;
            if (bannerURL.length > 0) {
                this.view.imgEventBanner.src = bannerURL[0]["banner_url"];
            } else {
                this.view.imgEventBanner.src = "event01.jpg";
            }
            this.view.lblRegisteredUserCountTM.text = this.view.lblRegisteredUserCount.text = checkValue(registeredUser.length);
            this.view.lblEventDescCategoryText.text = getEventCategory(record.event_category);
            if (record.event_type === "1") {
                this.view.lblEventDescLocationText.text = "online";
            } else if (record.event_type === "2") {
                var locations = record.location;
                if (locations.length > 0) {
                    this.view.lblEventDescLocationText.text = locations[0].addressLine1 + " " + locations[0].cityname;
                } else {
                    this.view.lblEventDescLocationText.text = "Location not available";
                }
            } else {
                this.view.lblEventDescLocationText.text = "Info not available";
            }
            var dateRange = getDateRange(record.start_date, record.end_date);
            this.view.lblEventDescDateText.text = dateRange;
            this.view.flxEventDetailContainer.setVisibility(true);
            this.view.forceLayout();
            this.getUsers(record.event_registration);
        } catch (error) {
            kony.print("FrmManageUser Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function getUsers
     * @description function to get the registerd users detail for the selected event.
     * @private
     * @param{JSON} subscribers
     */
    getUsers: function(subscribers) {
        if (subscribers === null || subscribers === undefined || subscribers.length === 0) {
            this.view.flxLoading.setVisibility(false);
            this.view.segUserList.removeAll();
            this.view.flxUserContainer.setVisibility(false);
            this.view.flxLoading.setVisibility(false);
            this.view.flxNoUser.setVisibility(true);
            return;
        }
        this.view.flxUserContainer.setVisibility(true);
        this.view.flxNoUser.setVisibility(false);
        var filterParam = "user_id eq " + subscribers[0].user_id;
        for (var i = 1; i < subscribers.length; i++) {
            filterParam = filterParam + " or user_id eq " + subscribers[i].user_id;
        }
        try {
            var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
                "access": "online"
            });
            var dataObject = new kony.sdk.dto.DataObject("users");
            var odataUrl = "$filter=" + filterParam + " ";
            dataObject.odataUrl = odataUrl;
            var options = {
                "dataObject": dataObject
            };
            showLoading(this);
            objSvc.fetch(options, this.userFetchSuccessCallBack.bind(this), this.userFetchFailureCallBack.bind(this));
        } catch (excp) {
            this.dismissLoading();
            alert(excp.message);
        }
    },
    /**
     * @function userFetchSuccessCallBack
     * @description success callback for the function getUsers
     * @private
     * @param{JSON} response
     */
    userFetchSuccessCallBack: function(response) {
        try {
            this.dismissLoading();
            this.eventSubscriber = response.records;
            this.setSubscriber();
        } catch (error) {
            kony.print("FrmManageUser Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function userFetchFailureCallBack
     * @description fialure callback for the function userFetchFailureCallBack
     * @private
     * @param{JSON} error
     */
    userFetchFailureCallBack: function(error) {
        kony.print("Error occured while ");
        this.dismissLoading();
    },
    /**
     * @function setSubscriber
     * @description function to set the subscribers for the event
     * @private
     */
    setSubscriber: function() {
        try {
            var subscribers = this.eventSubscriber;
            if (subscribers === null || subscribers === undefined) return;
            if (subscribers.length === 0) {
                this.view.segUserList.removeAll();
                this.view.flxUserContainer.setVisibility(false);
                this.view.flxLoading.setVisibility(false);
                this.view.flxNoUser.setVisibility(true);
                return;
            }
            this.view.flxUserContainer.setVisibility(true);
            this.view.flxNoUser.setVisibility(false);
            var segObj = {};
            var segDataList = [];
            for (var i = 0, count = 1; i < subscribers.length; i++) {
                if (subscribers[i]["isDeleted"] === true) continue;
                segObj = {};
                segObj["lblIndex"] = count;
                segObj["lblUserName"] = checkValue(subscribers[i].first_name) + " " + checkValue(subscribers[i].last_name); //"Brite Sreedharan";
                segObj["lblEmail"] = checkValue(subscribers[i].mail) + " "; //"brite.sreedharan@kony.com";
                if (i % 2 === 0) {
                    segObj["flxTempUser"] = {
                        "skin": "sknFlxWhiteBG"
                    };
                } else {
                    segObj["flxTempUser"] = {
                        "skin": "sknFlxLightBlueBG"
                    };
                }
                segObj["lblVerticalLine0"] = " ";
                segObj["lblVerticalLine1"] = " ";
                segObj["lblVerticalLine2"] = " ";
                segObj["lblVerticalLine3"] = " ";
                segObj["btnEdit"] = {
                    "text": "Edit"
                };
                segObj["btnDone"] = {
                    "text": "Done"
                };
                segObj["lblUserId"] = subscribers[i].user_id;
                segObj["imgRemoveIcon"] = {
                    "src": "delete_icon.png"
                };
                segDataList.push(segObj);
                count++;
            }
            this.view.segUserList.removeAll();
            this.view.segUserList.addAll(segDataList);
            this.view.flxLoading.setVisibility(false);
            this.view.forceLayout();
        } catch (error) {
            kony.print("FrmManageUser Controller" + JSON.stringify(error));
        }
    },
    getConfirmation: function() {
        try {
            var isConfirmed = false;
            return isConfirmed;
        } catch (error) {
            kony.print("FrmManageUser Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function deRegisterUser
     * @description function to get the registration id of the selected user.
     * @private
     * @param{string} selecteditems
     */
    deRegisterUser: function(selecteditems) {
        try {
            var userId = selecteditems.lblUserId;
            this.selectedUserIdToDelete = userId;
            var rowIndex = selecteditems["rowIndex"];
            this.selectedRowIndexToDelete = rowIndex;
            var registrationId = null;
            if (this.selectedEvent !== null && this.selectedEvent !== undefined) {
                var registrationList = this.selectedEvent.event_registration;
                for (var i = 0; i < registrationList.length; i++) {
                    if (registrationList[i].user_id == userId) {
                        registrationId = registrationList[i].registration_id;
                        break;
                    }
                }
                this.deleteUserRegistration(registrationId);
            }
        } catch (error) {
            kony.print("FrmManageUser Controller" + JSON.stringify(error));
        }
    },
    /**
     * @function deleteUserRegistration
     * @description function to remove the registration of the selected user.
     * @private
     * @param{number} registrationId
     */
    deleteUserRegistration: function(registrationId) {
        if (registrationId === null || registrationId === undefined || isNaN(registrationId)) return;
        var objSvc = kony.sdk.getCurrentInstance().getObjectService("EventsSOS", {
            "access": "online"
        });
        var dataObject = new kony.sdk.dto.DataObject("event_registration");
        dataObject.setRecord({
            "registration_id": registrationId
        });
        var options = {
            "dataObject": dataObject
        };
        try {
            objSvc.deleteRecord(options, this.deleteUserRegistrationSuccessCallBack.bind(this), this.deleteUserRegistrationFailureCallBack.bind(this));
        } catch (excp) {
            kony.print("Exception occured while deregistering user:" + excp(excp));
        }
    },
    /**
     * @function deleteUserRegistrationSuccessCallBack
     * @description success callback for the deleteUserRegistration method
     * @private
     * @param{json} response
     */
    deleteUserRegistrationSuccessCallBack: function(response) {
        var eventSubscribers = this.eventSubscriber;
        if (eventSubscribers !== null && eventSubscribers !== undefined) {
            for (var i = 0; i < eventSubscribers.length; i++) {
                if (eventSubscribers[i].user_id == this.selectedUserIdToDelete) {
                    eventSubscribers[i].isDeleted = true;
                }
            }
        }
        var animationObject = getRemoveAnimation();
        this.view.segUserList.removeAt(this.selectedRowIndexToDelete, 0, animationObject);
        var count = this.view.lblRegisteredUserCount.text = this.view.lblRegisteredUserCountTM.text;
        count = parseInt(count);
        this.view.lblRegisteredUserCount.text = count - 1;
        this.view.lblRegisteredUserCountTM.text = count - 1;
        this.setSubscriber();
    },
    /**
     * @function deleteUserRegistrationFailureCallBack
     * @description failure callback for the deleteUserRegistration method
     * @private
     * @param{json} error
     */
    deleteUserRegistrationFailureCallBack: function(error) {
        alert("Unable to unsubscribe!");
    },
    /**
     * @function dismissLoading
     * @description function to dismiss the loading screen.
     * @private
     */
    dismissLoading: function() {
        kony.application.dismissLoadingScreen();
        this.view.forceLayout();
    },
    /**
     * @function navigateToAllEvents
     * @description function to navigate to AllEvents form.
     * @private
     */
    navigateToAllEvents: function() {
        var nav = new kony.mvc.Navigation("frmAllEvents");
        nav.navigate();
    },
    /**
     * @function setProfile
     * @description function to set the login user info in the form.
     * @private
     */
    setProfile: function() {
        if (glbIsLoggedIn) {
            this.view.profileheader.flexProfilePhotoANdTitle.isVisible = true;
            this.view.profileheader.btnUser.isVisible = false;
            if (glbProfile !== undefined && glbProfile !== null && glbProfile !== {}) {
                if (glbProfile.first_name !== undefined) {
                    this.view.profileheader.lblUserName.isVisible = true;
                    this.view.profileheader.lblUserName.text = glbProfile.first_name;
                }
                if (glbProfile.profile !== undefined) {
                    this.view.profileheader.imgProfile.src = glbProfile.profile;
                } else {
                    this.view.profileheader.imgProfile.src = "profile.png";
                }
                this.view.profileheader.flxProfile.isVisible = true;
            }
        } else {
            this.view.profileheader.btnUser.isVisible = true;
            this.view.profileheader.flexProfilePhotoANdTitle.isVisible = false;
        }
    },
    /**
     * @function navigateToAllEvents
     * @description function to navigate to AllEvents form.
     * @private
     */
    navigateToCreateEvent: function() {
        var nav = new kony.mvc.Navigation("frmCreateEvent");
        nav.navigate();
    },
    /**
     * @function getShareAndView
     * @description - this function will fetch the metric results from back by event_id
     * @param - {Number - event_id}
     **/
    getShareAndView: function(eventID) {
        try {
            var sdkClient = new kony.sdk.getCurrentInstance();
            var objectInstance = sdkClient.getObjectService("EventsSOS", {
                "access": "online"
            });
            if (objectInstance === null || objectInstance === undefined) {
                alert("Please connect app to MF");
                return;
            }
            var dataObject = new kony.sdk.dto.DataObject("event_metrics");
            var options = {
                "dataObject": dataObject,
                "headers": {},
                "queryParams": {
                    "$filter": "event_id eq " + "'" + eventID + "' and ((SoftDeleteFlag ne true) or (SoftDeleteFlag eq null))"
                }
            };
            // kony.application.showLoadingScreen("", "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, {});
            if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
                objectInstance.fetch(options, this.getShareAndViewSuccess.bind(this), this.getShareAndViewFailure.bind(this));
            } else {
                //kony.application.dismissLoadingScreen();
                alert("No Network connected");
            }
        } catch (e) {
            // kony.application.dismissLoadingScreen();
            kony.print("Exception occured while getting events: " + e.message);
            alert("Exception occured while getting events: " + e.message);
        }
    },
    /**
     * @function getShareAndViewSuccess
     * @description - this function is the sucess call back of the getShareAndView
     * this functio will filter the event share and view to get the count
     * @response - {Array - response from backend}
     **/
    getShareAndViewSuccess: function(response) {
        var viewCount = 0;
        var shareCount = 0;
        if (response.records.length > 0) {
            shareCount = response.records.filter((obj) => obj.action === "share").length;
            viewCount = response.records.filter((obj) => obj.action === "view").length;
        }
        this.displayEventViewAndShare(viewCount, shareCount);
    },
    /**
     * @function getShareAndViewFailure
     * @description - this function is the error call back of the getShareAndView
     * @error - {Object - error response from backend}
     **/
    getShareAndViewFailure: function(error) {
        kony.print("Something Went wrong");
    },
    /**
     * @function displayEventViewAndShare
     * @description - this function will do the UI actions for share and view
     **/
    displayEventViewAndShare: function(views, shares) {
        this.view.lblViewedEventCount.text = views;
        this.view.lblSharedEventCount.text = shares;
        this.view.lblViewedEventCountTM.text = views;
        this.view.lblSharedEventCountTM.text = shares;
    },
    /**
     * @function checkBreakpointAndSetUI
     * @description - this function will check breakpoint and set sidemenu and change layout for sessions
     **/
    checkBreakpointAndSetUI: function(breakpoint) {
        this.breakpoint = breakpoint;
        if (isTablet(breakpoint)) {
            this.setMenuItem(false);
            this.isCloseAvailableForMenu = true;
        } else if (isDesktop(breakpoint)) {
            this.setMenuItem(true);
            this.isCloseAvailableForMenu = false;
        } else if (isDesktopLarge(breakpoint)) {
            this.setMenuItem(true);
            this.isCloseAvailableForMenu = false;
        } else if (isMobile(breakpoint)) {
            this.setMenuItem(false);
            this.isCloseAvailableForMenu = true;
        }
    },
    /**
     * @function setMenuItem
     * @description - this function will set menu Item visibility and handles menu click on different break point
     **/
    setMenuItem: function(visibility) {
        if (!visibility) {
            this.view.profileheader.flxMenuIcon.onClick = function() {
                this.setHamVisibility();
            }.bind(this);
            this.setMenuVisbility(false);
        } else {
            this.view.profileheader.flxMenuIcon.onClick = null;
            this.setMenuVisbility(true);
        }
    },
    /**
     * @function setMenuVisbility
     * @description - this function will sets the visibility of menuItem
     **/
    setMenuVisbility: function(visibility) {
        this.view.menuItem.setVisibility(visibility);
        this.view.forceLayout();
    },
    /**
     * @function setHamVisibility
     * @description - this function will check the visibility ot the menu bar, 
     * if the menu bar is visible then it makes the menubar visibility false else true
     **/
    setHamVisibility: function() {
        var menubarVisibity = this.view.menuItem.isVisible;
        if (menubarVisibity) {
            if (this.isCloseAvailableForMenu) {
                this.view.flxMenuClose.isVisible = false;
                this.setMenuVisbility(false);
            }
        } else {
            if (this.isCloseAvailableForMenu) {
                this.view.flxMenuClose.isVisible = true;
            }
            this.setMenuVisbility(true);
        }
    },
    /**
     * @function option1SelectionCallback
     * @description - this function is the callback of onclick of create new event on the menubar
     * this function sets the menubar visibilty false and set the selected flex to create event
     **/
    option1SelectionCallback: function() {
        this.setHamVisibility();
        this.navigateToCreateEvent();
    },
    /**
     * @function option2SelectionCallback
     * @description - this function is the callback of onclick of All Event on the menubar
     * this function sets the menubar visibilty false and navigate to all events page
     **/
    option2SelectionCallback: function() {
        this.setHamVisibility();
        this.navigateToAllEvents();
    },
    /**
     * @function option2SelectionCallback
     * @description - this function is the callback of onclick of All Event on the menubar
     * this function sets the menubar visibilty false and navigate to all events page
     **/
    option3SelectionCallback: function() {
        this.setHamVisibility();
        this.getAllEvent();
    },
    showProfileOptions: function() {
        if (this.view.flexProfileOptions.isVisible) {
            this.view.flexProfileOptions.isVisible = false;
        } else {
            this.view.flexProfileOptions.isVisible = true;
        }
    },
    /**
     * @function logout
     * @description - this function will reset the UI back to logout state
     **/
    logout: function() {
        glbIsLoggedIn = false;
        EVENT_CONSTANS.MODE.USERROLE = EVENT_CONSTANS.USERROLE.CONSUMER;
        var navObj = new kony.mvc.Navigation("frmAllEvents");
        navObj.navigate(EVENT_CONSTANS.MODE.ALLEVENTS);
    }
});
define('frmManageUserControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxProfile **/
    AS_FlexContainer_e3528929001243eab8a07b6082e56662: function AS_FlexContainer_e3528929001243eab8a07b6082e56662(eventobject) {
        var self = this;
        this.showProfileOptions()
    },
    /** onClick defined for btnUser **/
    AS_Button_a55900dc4596483f88dfdfae647e2e4c: function AS_Button_a55900dc4596483f88dfdfae647e2e4c(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("frmLogin");
        ntf.navigate();
    },
    /** onClick defined for btnProceed **/
    AS_Button_afc005346af041ea99edbfd77be06a8e: function AS_Button_afc005346af041ea99edbfd77be06a8e(eventobject) {
        var self = this;
        this.populateEvent();
        //this.setEvent();
    },
    /** onClick defined for flxCreateNewEvent **/
    AS_FlexContainer_gc9fc7c3894c4513967504ccf46bf3bb: function AS_FlexContainer_gc9fc7c3894c4513967504ccf46bf3bb(eventobject) {
        var self = this;
        this.view.menuItem.createEvent(this.option1SelectionCallback());
    },
    /** onClick defined for flexAllNewEvent **/
    AS_FlexContainer_h00c5831c06d4309a84e8b4839856432: function AS_FlexContainer_h00c5831c06d4309a84e8b4839856432(eventobject) {
        var self = this;
        this.view.menuItem.getEvents(this.option2SelectionCallback());
    },
    /** onClick defined for flxManageUser **/
    AS_FlexContainer_c95719533337433ca1cbac5343864bfd: function AS_FlexContainer_c95719533337433ca1cbac5343864bfd(eventobject) {
        var self = this;
        this.view.menuItem.manageUser(this.option3SelectionCallback());
    },
    /** onClick defined for flxMenuClose **/
    AS_FlexContainer_aa0e1bdec3354e9981dbb11e5e8aaa5e: function AS_FlexContainer_aa0e1bdec3354e9981dbb11e5e8aaa5e(eventobject) {
        var self = this;
        this.setHamVisibility();
    },
    /** onClick defined for flxLogout **/
    AS_FlexContainer_g35717c1d72b4c30bbf351d2fea25658: function AS_FlexContainer_g35717c1d72b4c30bbf351d2fea25658(eventobject) {
        var self = this;
        if (EVENT_CONSTANS.MODE.USERROLE == EVENT_CONSTANS.USERROLE.CONSUMER) {
            this.logout();
        } else {
            Events.consumerLogin.logout(this.logout)
        }
    },
    /** init defined for frmManageUser **/
    AS_Form_i6355a3694614e85b1e940843f7ef516: function AS_Form_i6355a3694614e85b1e940843f7ef516(eventobject) {
        var self = this;
        this.view.onBreakpointChange = function(eventobject, breakpoint) {
            self.checkBreakpointAndSetUI(breakpoint);
        }
    },
    /** postShow defined for frmManageUser **/
    AS_Form_e5ee2744321a4665a1dfc6cfd31bcbd9: function AS_Form_e5ee2744321a4665a1dfc6cfd31bcbd9(eventobject) {
        var self = this;
        //this.onPostShow();
        this.getAllEvent();
        try {
            kony.application.destroyForm("frmCreateEvent");
        } catch (err) {
            kony.print(err);
        }
    }
});



define('frmManageUserController',["userfrmManageUserController","frmManageUserControllerActions"],
		function(){
			var controller = require("userfrmManageUserController");
			var controllerActions = ["frmManageUserControllerActions"];

			for(var i = 0; i < controllerActions.length; i++){
				var actions = require(controllerActions[i]);
				for(var key in actions){
					controller[key] = actions[key];
				}
			}

		return controller;
});
