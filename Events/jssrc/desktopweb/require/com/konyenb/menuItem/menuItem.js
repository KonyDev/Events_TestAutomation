define(function() {
    return function(controller) {
        var menuItem = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "menuItem",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "17.50%"
        }, {}, {});
        menuItem.setDefaultUnit(kony.flex.DP);
        var flexCreateEventMain = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexCreateEventMain",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "FlexsknGradient",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexCreateEventMain.setDefaultUnit(kony.flex.DP);
        var flexEventLogo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "9%",
            "id": "flexEventLogo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": "90%",
            "zIndex": 5
        }, {}, {});
        flexEventLogo.setDefaultUnit(kony.flex.DP);
        var imgLogo = new kony.ui.Image2({
            "bottom": "12dp",
            "centerY": "50%",
            "id": "imgLogo",
            "isVisible": true,
            "left": "4px",
            "skin": "slImage",
            "src": "eventstitlw.png",
            "width": "66%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexEventLogo.add(imgLogo);
        var lblUnderLineLogo = new kony.ui.Label({
            "centerX": "50.00%",
            "height": "1px",
            "id": "lblUnderLineLogo",
            "isVisible": true,
            "skin": "sknheaderlblLine",
            "top": "1dp",
            "width": "90%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexAllNewEvent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "7.50%",
            "id": "flexAllNewEvent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_b70c6ced81c74b73a8760fb4a941a5b3,
            "skin": "sknFlxMenuClick",
            "top": "1%",
            "width": "90%",
            "zIndex": 5
        }, {}, {});
        flexAllNewEvent.setDefaultUnit(kony.flex.DP);
        var imgAllNewEvent = new kony.ui.Image2({
            "centerY": "50%",
            "height": "38dp",
            "id": "imgAllNewEvent",
            "isVisible": true,
            "left": "0px",
            "skin": "slImage",
            "src": "alleventsicon.png",
            "width": "38dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblAllEvent = new kony.ui.Label({
            "centerY": "50%",
            "height": "45%",
            "id": "lblAllEvent",
            "isVisible": true,
            "left": "38px",
            "skin": "sknlblHAm",
            "text": "All Events",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexAllNewEvent.add(imgAllNewEvent, lblAllEvent);
        var lblUnderLineHam = new kony.ui.Label({
            "bottom": "0%",
            "centerX": "50%",
            "height": "1px",
            "id": "lblUnderLineHam",
            "isVisible": true,
            "left": "0%",
            "skin": "sknheaderlblLine",
            "width": "90%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxCreateNewEvent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "7.50%",
            "id": "flxCreateNewEvent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_e03a6b839a6e4fc989650b6cc3a71285,
            "skin": "sknCreateEventManuSkin",
            "top": "0%",
            "width": "90%",
            "zIndex": 5
        }, {}, {});
        flxCreateNewEvent.setDefaultUnit(kony.flex.DP);
        var imgCreateNewEvent = new kony.ui.Image2({
            "centerY": "50%",
            "height": "38dp",
            "id": "imgCreateNewEvent",
            "isVisible": true,
            "left": "0px",
            "skin": "slImage",
            "src": "neweventicon.png",
            "width": "38dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblCreateNewEvent = new kony.ui.Label({
            "centerY": "50%",
            "height": "45%",
            "id": "lblCreateNewEvent",
            "isVisible": true,
            "left": "38px",
            "skin": "sknlblHAm",
            "text": "Create New Events",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCreateNewEvent.add(imgCreateNewEvent, lblCreateNewEvent);
        var lblUnderLineHam2 = new kony.ui.Label({
            "bottom": "0%",
            "centerX": "50%",
            "height": "1px",
            "id": "lblUnderLineHam2",
            "isVisible": true,
            "left": "0%",
            "skin": "sknheaderlblLine",
            "width": "90%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxManageUser = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "7.50%",
            "id": "flxManageUser",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_h279a49476064771b8b8c16fb99bad5a,
            "skin": "slFbox",
            "top": "0%",
            "width": "90%",
            "zIndex": 5
        }, {}, {});
        flxManageUser.setDefaultUnit(kony.flex.DP);
        var imgManageUser = new kony.ui.Image2({
            "centerY": "50%",
            "height": "38dp",
            "id": "imgManageUser",
            "isVisible": true,
            "left": "0px",
            "skin": "slImage",
            "src": "manageusers.png",
            "width": "38dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblManageUser = new kony.ui.Label({
            "centerY": "50%",
            "height": "45%",
            "id": "lblManageUser",
            "isVisible": true,
            "left": "38px",
            "skin": "sknlblHAm",
            "text": "Manage Users",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxManageUser.add(imgManageUser, lblManageUser);
        var lblLine3 = new kony.ui.Label({
            "bottom": "0%",
            "centerX": "50%",
            "height": "1px",
            "id": "lblLine3",
            "isVisible": true,
            "left": "0%",
            "skin": "sknheaderlblLine",
            "width": "90%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxNotification = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "7.50%",
            "id": "flxNotification",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_fa11dc763958474b8f16769d311d8b44,
            "skin": "slFbox",
            "top": "0%",
            "width": "90%",
            "zIndex": 5
        }, {}, {});
        flxNotification.setDefaultUnit(kony.flex.DP);
        var imgNotification = new kony.ui.Image2({
            "centerY": "50%",
            "height": "38dp",
            "id": "imgNotification",
            "isVisible": true,
            "left": "0px",
            "skin": "slImage",
            "src": "notificationicon.png",
            "width": "38dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblNotification = new kony.ui.Label({
            "centerY": "50%",
            "height": "45%",
            "id": "lblNotification",
            "isVisible": true,
            "left": "38px",
            "skin": "sknlblHAm",
            "text": "Notification",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxNotification.add(imgNotification, lblNotification);
        var lblLine4 = new kony.ui.Label({
            "bottom": "0%",
            "centerX": "50%",
            "height": "1px",
            "id": "lblLine4",
            "isVisible": false,
            "left": "0%",
            "skin": "sknheaderlblLine",
            "width": "90%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxMyCalendar = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "7.50%",
            "id": "flxMyCalendar",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_fb4d4a906f1643dcaaeae163a6dbb764,
            "skin": "slFbox",
            "top": "0%",
            "width": "90%",
            "zIndex": 5
        }, {}, {});
        flxMyCalendar.setDefaultUnit(kony.flex.DP);
        var imgCalendar = new kony.ui.Image2({
            "centerY": "50%",
            "height": "38dp",
            "id": "imgCalendar",
            "isVisible": true,
            "left": "0px",
            "skin": "slImage",
            "src": "calender.png",
            "width": "38dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblMyCalendar = new kony.ui.Label({
            "centerY": "50%",
            "height": "45%",
            "id": "lblMyCalendar",
            "isVisible": true,
            "left": "38px",
            "skin": "sknlblHAm",
            "text": "My Calendar",
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMyCalendar.add(imgCalendar, lblMyCalendar);
        var lblLine5 = new kony.ui.Label({
            "bottom": "0%",
            "centerX": "50%",
            "height": "1px",
            "id": "lblLine5",
            "isVisible": false,
            "left": "0%",
            "skin": "sknheaderlblLine",
            "width": "90%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxSetting = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "7.50%",
            "id": "flxSetting",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_c6e8a61598c0470b8ca88d5d672255ab,
            "skin": "slFbox",
            "top": "0%",
            "width": "90%",
            "zIndex": 5
        }, {}, {});
        flxSetting.setDefaultUnit(kony.flex.DP);
        var imgSetting = new kony.ui.Image2({
            "centerY": "50%",
            "height": "38dp",
            "id": "imgSetting",
            "isVisible": true,
            "left": "0px",
            "skin": "slImage",
            "src": "settingsicon.png",
            "width": "38dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSetting = new kony.ui.Label({
            "centerY": "50%",
            "height": "45%",
            "id": "lblSetting",
            "isVisible": true,
            "left": "38px",
            "skin": "sknlblHAm",
            "text": "Settings",
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSetting.add(imgSetting, lblSetting);
        flexCreateEventMain.add(flexEventLogo, lblUnderLineLogo, flexAllNewEvent, lblUnderLineHam, flxCreateNewEvent, lblUnderLineHam2, flxManageUser, lblLine3, flxNotification, lblLine4, flxMyCalendar, lblLine5, flxSetting);
        menuItem.add(flexCreateEventMain);
        return menuItem;
    }
})