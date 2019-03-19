define("frmManageUser", function() {
    return function(controller) {
        function addWidgetsfrmManageUser() {
            this.setDefaultUnit(kony.flex.PERCENTAGE);
            var flxRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRoot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxf9f9fa",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
            var flxInfoItemContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "90%",
                "horizontalScrollIndicator": true,
                "id": "flxInfoItemContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "30px",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "81%",
                "zIndex": 1
            }, {}, {});
            flxInfoItemContainer.setDefaultUnit(kony.flex.DP);
            var flexHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "66px",
                "id": "flexHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexHeader.setDefaultUnit(kony.flex.DP);
            var LblTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "50%",
                "id": "LblTitle",
                "isVisible": true,
                "left": "2.50%",
                "skin": "sknlblHeader00a0ddAL28px",
                "text": "Manage Users",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUnderLineEventMain = new kony.ui.Label({
                "bottom": "0px",
                "height": "1px",
                "id": "lblUnderLineEventMain",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblheaderlblLineLightGrey",
                "width": "100%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexHeader.add(LblTitle, lblUnderLineEventMain);
            var flxEventDropdownContainer = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "45px",
                "id": "flxEventDropdownContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "25px",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxEventDropdownContainer.setDefaultUnit(kony.flex.DP);
            var listBoxEvent = new kony.ui.ListBox({
                "centerY": "50%",
                "focusSkin": "sknListBoxInfo",
                "height": "100%",
                "id": "listBoxEvent",
                "isVisible": true,
                "left": "0dp",
                "masterData": [
                    ["lb1", "Placeholder One"],
                    ["lb2", "Placeholder Two"],
                    ["lb3", "Placeholder Three"],
                    ["keyInfo", "Select Event"]
                ],
                "selectedKey": "keyInfo",
                "selectedKeyValue": ["keyInfo", "Select Event"],
                "skin": "sknListBoxInfo",
                "top": "0dp",
                "width": "474px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "hoverSkin": "sknLblGreyBG",
                "multiSelect": false
            });
            var btnProceed = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnGredient",
                "height": "100%",
                "id": "btnProceed",
                "isVisible": true,
                "left": "10px",
                "onClick": controller.AS_Button_afc005346af041ea99edbfd77be06a8e,
                "skin": "sknBtnGredient",
                "text": "Proceed",
                "width": "120px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventDropdownContainer.add(listBoxEvent, btnProceed);
            var lblSelectorInfo = new kony.ui.Label({
                "bottom": "2px",
                "height": "35px",
                "id": "lblSelectorInfo",
                "isVisible": true,
                "left": "0px",
                "skin": "sknLblInfo",
                "text": "Select events from the dropdown menu to view the user details.",
                "top": "10dp",
                "width": "95%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEventDetailContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxEventDetailContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxWhiteBGRoundedCorner0he69847ac57941",
                "top": "0",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            flxEventDetailContainer.setDefaultUnit(kony.flex.DP);
            var lblEventTitle = new kony.ui.Label({
                "centerX": "50%",
                "height": "35dp",
                "id": "lblEventTitle",
                "isVisible": true,
                "skin": "sknLblVioletBlue",
                "text": "Webinar Event Upgrade",
                "top": "15dp",
                "width": "97%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLine1 = new kony.ui.Label({
                "bottom": "2px",
                "centerX": "50%",
                "height": "1px",
                "id": "lblLine1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknheaderlblLineDarkGrey",
                "top": "5dp",
                "width": "97%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEventInfoRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "96px",
                "id": "flxEventInfoRoot",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBG",
                "top": "10px",
                "width": "97%",
                "zIndex": 1
            }, {}, {});
            flxEventInfoRoot.setDefaultUnit(kony.flex.DP);
            var flxRootEventTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxRootEventTitle",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxRootEventTitle.setDefaultUnit(kony.flex.DP);
            var flxEventBanner = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "96px",
                "id": "flxEventBanner",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxRounderCorner",
                "width": "96px",
                "zIndex": 1
            }, {}, {});
            flxEventBanner.setDefaultUnit(kony.flex.DP);
            var imgEventBanner = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgEventBanner",
                "isVisible": true,
                "skin": "slImage",
                "src": "event01_1.jpg",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventBanner.add(imgEventBanner);
            var flxEventInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "75dp",
                "id": "flxEventInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "42px",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "330dp",
                "zIndex": 1
            }, {}, {});
            flxEventInfo.setDefaultUnit(kony.flex.DP);
            var flxCategory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxCategory",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCategory.setDefaultUnit(kony.flex.DP);
            var lblCategoryTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblCategoryTitle",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl00a0d514px",
                "text": "Category",
                "width": "21%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHyphen = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblHyphen",
                "isVisible": true,
                "skin": "sknlbl343e48A80",
                "text": " - ",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventDescCategoryText = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEventDescCategoryText",
                "isVisible": true,
                "left": "4dp",
                "skin": "sknlbl797979AM14",
                "text": "Conference",
                "width": "73%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCategory.add(lblCategoryTitle, lblHyphen, lblEventDescCategoryText);
            var flxEventDescDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxEventDescDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventDescDate.setDefaultUnit(kony.flex.DP);
            var lblEventDescDateTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEventDescDateTitle",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl00a0d514px",
                "text": "Date",
                "width": "21%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHyphen2 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHyphen2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl343e48A80",
                "text": " - ",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventDescDateText = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEventDescDateText",
                "isVisible": true,
                "left": "4dp",
                "skin": "sknlbl797979AM14",
                "text": "14 Mar - 15 Mar, 2018",
                "top": "0dp",
                "width": "73%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventDescDate.add(lblEventDescDateTitle, lblHyphen2, lblEventDescDateText);
            var flxEventDescLocation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "25dp",
                "id": "flxEventDescLocation",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventDescLocation.setDefaultUnit(kony.flex.DP);
            var lblEventDescLocation = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEventDescLocation",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl00a0d514px",
                "text": "Location",
                "width": "21%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHyphen3 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHyphen3",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlbl343e48A80",
                "text": " - ",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventDescLocationText = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEventDescLocationText",
                "isVisible": true,
                "left": "4dp",
                "skin": "sknlbl797979AM14",
                "text": "Convocation Center, Hyderabad",
                "top": "0dp",
                "width": "73%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventDescLocation.add(lblEventDescLocation, lblHyphen3, lblEventDescLocationText);
            flxEventInfo.add(flxCategory, flxEventDescDate, flxEventDescLocation);
            flxRootEventTitle.add(flxEventBanner, flxEventInfo);
            var lblLine0 = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblLine0",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblLineUltraLightGrey",
                "width": "1px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxMenuIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMenuIcon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxMenuIcon.setDefaultUnit(kony.flex.DP);
            var flxRegisteredUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRegisteredUser",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {}, {});
            flxRegisteredUser.setDefaultUnit(kony.flex.DP);
            var lblRegisteredUserCount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRegisteredUserCount",
                "isVisible": true,
                "skin": "sknLblCount",
                "text": "30",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblRegisteredUser = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRegisteredUser",
                "isVisible": true,
                "skin": "sknlbl797979AM14",
                "text": "Registered Users",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRegisteredUser.add(lblRegisteredUserCount, lblRegisteredUser);
            var lblLine2 = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblLine2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblLineUltraLightGrey",
                "width": "1px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEventShared = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEventShared",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {}, {});
            flxEventShared.setDefaultUnit(kony.flex.DP);
            var lblSharedEventCount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSharedEventCount",
                "isVisible": true,
                "skin": "sknLblCount",
                "text": "55",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSharedEvent = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSharedEvent",
                "isVisible": true,
                "skin": "sknlbl797979AM14",
                "text": "Events Share",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventShared.add(lblSharedEventCount, lblSharedEvent);
            var lblLine3 = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblLine3",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblVerticalline",
                "top": "24dp",
                "width": "1dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEventView = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEventView",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {}, {});
            flxEventView.setDefaultUnit(kony.flex.DP);
            var lblViewedEventCount = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblViewedEventCount",
                "isVisible": true,
                "skin": "sknLblCount",
                "text": "55",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventView = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEventView",
                "isVisible": true,
                "skin": "sknlbl797979AM14",
                "text": "Events View",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventView.add(lblViewedEventCount, lblEventView);
            flxMenuIcon.add(flxRegisteredUser, lblLine2, flxEventShared, lblLine3, flxEventView);
            flxEventInfoRoot.add(flxRootEventTitle, lblLine0, flxMenuIcon);
            var CopylblLine0ba567fdb417245 = new kony.ui.Label({
                "bottom": "2px",
                "centerX": "50%",
                "height": "1px",
                "id": "CopylblLine0ba567fdb417245",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknheaderlblLineDarkGrey",
                "top": "5dp",
                "width": "97%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flexEventInfoRootTM = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "96px",
                "id": "flexEventInfoRootTM",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBG",
                "top": "10px",
                "width": "97%",
                "zIndex": 1
            }, {}, {});
            flexEventInfoRootTM.setDefaultUnit(kony.flex.DP);
            var flexMetricsTM = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexMetricsTM",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexMetricsTM.setDefaultUnit(kony.flex.DP);
            var flxRegisteredUserTM = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRegisteredUserTM",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {}, {});
            flxRegisteredUserTM.setDefaultUnit(kony.flex.DP);
            var lblRegisteredUserCountTM = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRegisteredUserCountTM",
                "isVisible": true,
                "skin": "sknLblCount",
                "text": "30",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblRegisteredUserTM = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRegisteredUserTM",
                "isVisible": true,
                "skin": "sknlbl797979AM14",
                "text": "Registered Users",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRegisteredUserTM.add(lblRegisteredUserCountTM, lblRegisteredUserTM);
            var lblLine2TM = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblLine2TM",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblLineUltraLightGrey",
                "width": "1px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEventSharedTM = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEventSharedTM",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {}, {});
            flxEventSharedTM.setDefaultUnit(kony.flex.DP);
            var lblSharedEventCountTM = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSharedEventCountTM",
                "isVisible": true,
                "skin": "sknLblCount",
                "text": "55",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSharedEventTM = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblSharedEventTM",
                "isVisible": true,
                "skin": "sknlbl797979AM14",
                "text": "Events Share",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventSharedTM.add(lblSharedEventCountTM, lblSharedEventTM);
            var lblLine3TM = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblLine3TM",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblVerticalline",
                "top": "24dp",
                "width": "1dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxEventViewTM = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEventViewTM",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "33%",
                "zIndex": 1
            }, {}, {});
            flxEventViewTM.setDefaultUnit(kony.flex.DP);
            var lblViewedEventCountTM = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblViewedEventCountTM",
                "isVisible": true,
                "skin": "sknLblCount",
                "text": "55",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventViewTM = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEventViewTM",
                "isVisible": true,
                "skin": "sknlbl797979AM14",
                "text": "Events View",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEventViewTM.add(lblViewedEventCountTM, lblEventViewTM);
            flexMetricsTM.add(flxRegisteredUserTM, lblLine2TM, flxEventSharedTM, lblLine3TM, flxEventViewTM);
            flexEventInfoRootTM.add(flexMetricsTM);
            var CopylblLine0j1ad4573101b46 = new kony.ui.Label({
                "bottom": "2px",
                "centerX": "50%",
                "height": "1px",
                "id": "CopylblLine0j1ad4573101b46",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknheaderlblLineDarkGrey",
                "top": "5dp",
                "width": "97%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxRegisteredUserContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "440px",
                "id": "flxRegisteredUserContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10px",
                "width": "98%",
                "zIndex": 10
            }, {}, {});
            flxRegisteredUserContainer.setDefaultUnit(kony.flex.DP);
            flxRegisteredUserContainer.add();
            var flxUserContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxUserContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserContainer.setDefaultUnit(kony.flex.DP);
            var flxRegisteredUserList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxRegisteredUserList",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100.00%",
                "zIndex": 1
            }, {}, {});
            flxRegisteredUserList.setDefaultUnit(kony.flex.DP);
            var flxUserHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxUserHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBlueBG",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUserHeader.setDefaultUnit(kony.flex.DP);
            var flxIndex = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxIndex",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "4%",
                "zIndex": 1
            }, {}, {});
            flxIndex.setDefaultUnit(kony.flex.DP);
            var lblSerialNo = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "lblSerialNo",
                "isVisible": true,
                "skin": "sknLblWhite",
                "text": "SI",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxIndex.add(lblSerialNo);
            var lblVerticalLine1 = new kony.ui.Label({
                "centerY": "50%",
                "height": "85%",
                "id": "lblVerticalLine1",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblVerticalline",
                "width": "1px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUserName = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblUserName",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblWhite",
                "text": "User Name",
                "width": "33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblVerticalLine2 = new kony.ui.Label({
                "centerY": "50%",
                "height": "85%",
                "id": "lblVerticalLine2",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblVerticalline",
                "width": "1px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEmailId = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmailId",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblWhite",
                "text": "Email ID",
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblVerticalLine3 = new kony.ui.Label({
                "centerY": "50%",
                "height": "85%",
                "id": "lblVerticalLine3",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknlblVerticalline",
                "width": "1px",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblActions = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblActions",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblWhite",
                "text": "Actions",
                "width": "32.60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUserHeader.add(flxIndex, lblVerticalLine1, lblUserName, lblVerticalLine2, lblEmailId, lblVerticalLine3, lblActions);
            var segUserList = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "data": [{
                    "btnDone": "Done",
                    "btnEdit": "Edit",
                    "imgRemoveIcon": "delete_icon.png",
                    "lblEmail": "Email ID",
                    "lblIndex": "1",
                    "lblUserId": "Label",
                    "lblUserName": "User Name",
                    "lblVerticalLine0": "",
                    "lblVerticalLine1": "",
                    "lblVerticalLine2": "",
                    "lblVerticalLine3": ""
                }, {
                    "btnDone": "Done",
                    "btnEdit": "Edit",
                    "imgRemoveIcon": "delete_icon.png",
                    "lblEmail": "Email ID",
                    "lblIndex": "1",
                    "lblUserId": "Label",
                    "lblUserName": "User Name",
                    "lblVerticalLine0": "",
                    "lblVerticalLine1": "",
                    "lblVerticalLine2": "",
                    "lblVerticalLine3": ""
                }, {
                    "btnDone": "Done",
                    "btnEdit": "Edit",
                    "imgRemoveIcon": "delete_icon.png",
                    "lblEmail": "Email ID",
                    "lblIndex": "1",
                    "lblUserId": "Label",
                    "lblUserName": "User Name",
                    "lblVerticalLine0": "",
                    "lblVerticalLine1": "",
                    "lblVerticalLine2": "",
                    "lblVerticalLine3": ""
                }],
                "groupCells": false,
                "id": "segUserList",
                "isVisible": true,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot_1.png",
                "pageOnDotImage": "pageondot_1.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTempUser",
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnDone": "btnDone",
                    "btnEdit": "btnEdit",
                    "flxEditNDone": "flxEditNDone",
                    "flxEmailI": "flxEmailI",
                    "flxRegisteredUser": "flxRegisteredUser",
                    "flxRemove": "flxRemove",
                    "flxTempUser": "flxTempUser",
                    "flxUserName": "flxUserName",
                    "imgRemoveIcon": "imgRemoveIcon",
                    "lblEmail": "lblEmail",
                    "lblIndex": "lblIndex",
                    "lblUserId": "lblUserId",
                    "lblUserName": "lblUserName",
                    "lblVerticalLine0": "lblVerticalLine0",
                    "lblVerticalLine1": "lblVerticalLine1",
                    "lblVerticalLine2": "lblVerticalLine2",
                    "lblVerticalLine3": "lblVerticalLine3"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRegisteredUserList.add(flxUserHeader, segUserList);
            var flxLoading = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "220dp",
                "id": "flxLoading",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBG",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxLoading.setDefaultUnit(kony.flex.DP);
            var imgLoading = new kony.ui.Image2({
                "centerX": "33%",
                "centerY": "50%",
                "height": "150dp",
                "id": "imgLoading",
                "isVisible": true,
                "skin": "slImage",
                "src": "ajax_loader.gif",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgLoading2 = new kony.ui.Image2({
                "centerX": "66%",
                "centerY": "50%",
                "height": "150dp",
                "id": "imgLoading2",
                "isVisible": true,
                "skin": "slImage",
                "src": "ajax_loader.gif",
                "width": "150dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoading.add(imgLoading, imgLoading2);
            var flxNoUser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "120dp",
                "id": "flxNoUser",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBG",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxNoUser.setDefaultUnit(kony.flex.DP);
            var lblLine4 = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblLine4",
                "isVisible": true,
                "skin": "sknheaderlblLineDarkGrey",
                "top": "0dp",
                "width": "100%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblNoUser = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblNoUser",
                "isVisible": true,
                "left": "315dp",
                "skin": "sknLblLightBlueFont",
                "text": "No users have currently registered for this event.",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNoUser.add(lblLine4, lblNoUser);
            flxUserContainer.add(flxRegisteredUserList, flxLoading, flxNoUser);
            flxEventDetailContainer.add(lblEventTitle, lblLine1, flxEventInfoRoot, CopylblLine0ba567fdb417245, flexEventInfoRootTM, CopylblLine0j1ad4573101b46, flxRegisteredUserContainer, flxUserContainer);
            flxInfoItemContainer.add(flexHeader, flxEventDropdownContainer, lblSelectorInfo, flxEventDetailContainer);
            var lblFooter = new kony.ui.Label({
                "bottom": "0%",
                "centerX": "50%",
                "height": "10%",
                "id": "lblFooter",
                "isVisible": false,
                "skin": "sknLblFooter6e6e6eAL15px",
                "text": "© Copyright 2018 Kony, Inc. All Rights Reserved.",
                "width": "40%",
                "zIndex": 20
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [1, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var profileheader = new com.konyenb.profileheader({
                "clipBounds": true,
                "height": "10%",
                "id": "profileheader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "17.50%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f8e0708310cd4d",
                "top": "0dp",
                "width": "82.50%",
                "zIndex": 1
            }, {}, {});
            profileheader.btnUser.isVisible = true;
            profileheader.btnUser.left = null;
            profileheader.btnUser.right = "2.50%";
            profileheader.btnUser.top = null;
            profileheader.btnUser.width = "50%";
            profileheader.btnUser.onClick = controller.AS_Button_a55900dc4596483f88dfdfae647e2e4c;
            profileheader.flexProfilePhotoANdTitle.left = null;
            profileheader.flexProfilePhotoANdTitle.right = "2.50%";
            profileheader.flexProfilePhotoANdTitle.width = "50%";
            profileheader.flxMenuIcon.isVisible = false;
            profileheader.flxProfile.autogrowMode = kony.flex.AUTOGROW_NONE;
            profileheader.flxProfile.height = "35dp";
            profileheader.flxProfile.isVisible = true;
            profileheader.flxProfile.left = "5%";
            profileheader.flxProfile.top = null;
            profileheader.flxProfile.width = "35dp";
            profileheader.flxProfile.onClick = controller.AS_FlexContainer_e3528929001243eab8a07b6082e56662;
            profileheader.imgDashBoard.src = "menucollapse.png";
            profileheader.lblDashboard.isVisible = false;
            profileheader.lblDashboard.width = kony.flex.USE_PREFFERED_SIZE;
            profileheader.lblUserName.isVisible = true;
            profileheader.left = "17.50%";
            profileheader.top = "0dp";
            profileheader.width = "82.50%";
            profileheader.zIndex = 1;
            var menuItem = new com.konyenb.menu({
                "clipBounds": true,
                "height": "100%",
                "id": "menuItem",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "FlexsknGradient",
                "top": "0dp",
                "width": "19.20%",
                "zIndex": 1
            }, {}, {});
            menuItem.flexAllNewEvent.onClick = controller.AS_FlexContainer_h00c5831c06d4309a84e8b4839856432;
            menuItem.flxCreateNewEvent.onClick = controller.AS_FlexContainer_gc9fc7c3894c4513967504ccf46bf3bb;
            menuItem.flxManageUser.onClick = controller.AS_FlexContainer_c95719533337433ca1cbac5343864bfd;
            menuItem.isVisible = true;
            menuItem.width = "19.20%";
            menuItem.zIndex = 1;
            flxRoot.add(flxInfoItemContainer, lblFooter, profileheader, menuItem);
            var flxMenuClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMenuClose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "65%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_aa0e1bdec3354e9981dbb11e5e8aaa5e,
                "skin": "CopyslFbox0fb1aa32e474842",
                "top": "0%",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxMenuClose.setDefaultUnit(kony.flex.DP);
            flxMenuClose.add();
            var flexProfileOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flexProfileOptions",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "right": "2%",
                "skin": "CopyCopyslFbox1",
                "top": "6.50%",
                "width": "120dp",
                "zIndex": 50
            }, {}, {});
            flexProfileOptions.setDefaultUnit(kony.flex.DP);
            var imgProfileDropDown = new kony.ui.Image2({
                "centerX": "50%",
                "height": "15px",
                "id": "imgProfileDropDown",
                "isVisible": true,
                "left": "6dp",
                "skin": "CopyslImage",
                "src": "drop_down_menu_1_1.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxProfile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "95%",
                "id": "flxProfile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "-5px",
                "width": "100%",
                "zIndex": 500
            }, {}, {});
            flxProfile.setDefaultUnit(kony.flex.DP);
            var flxEditProfile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxEditProfile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 50
            }, {}, {});
            flxEditProfile.setDefaultUnit(kony.flex.DP);
            var lblEditProfile = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEditProfile",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblProfileNormal",
                "text": "Edit Profile",
                "top": "6dp",
                "width": "100%",
                "zIndex": 50
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEditProfile.add(lblEditProfile);
            var lblLineEditProfile = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblLineEditProfile",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopydefLabel",
                "top": "0%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLogout = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxLogout",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_g35717c1d72b4c30bbf351d2fea25658,
                "skin": "CopyslFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLogout.setDefaultUnit(kony.flex.DP);
            var lblLogout = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblLogout",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblProfileNormal",
                "text": "Logout",
                "top": "6dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLogout.add(lblLogout);
            flxProfile.add(flxEditProfile, lblLineEditProfile, flxLogout);
            flexProfileOptions.add(imgProfileDropDown, flxProfile);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1920,
                "480": {
                    "flxInfoItemContainer": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "top": {
                            "type": "string",
                            "value": "10%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flexHeader": {
                        "isVisible": false
                    },
                    "LblTitle": {},
                    "flxEventDropdownContainer": {
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "2.50%"
                        },
                        "width": {
                            "type": "string",
                            "value": "90%"
                        }
                    },
                    "listBoxEvent": {
                        "width": {
                            "type": "string",
                            "value": "70%"
                        }
                    },
                    "btnProceed": {
                        "left": {
                            "type": "string",
                            "value": "5%"
                        },
                        "width": {
                            "type": "string",
                            "value": "20%"
                        }
                    },
                    "lblSelectorInfo": {
                        "left": {
                            "type": "string",
                            "value": "2.50%"
                        }
                    },
                    "flxEventDetailContainer": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "width": {
                            "type": "string",
                            "value": "95%"
                        }
                    },
                    "flxRootEventTitle": {
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblLine0": {
                        "isVisible": false
                    },
                    "flxMenuIcon": {
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "1%"
                        },
                        "instanceId": "profileheader"
                    },
                    "flexEventInfoRootTM": {
                        "top": {
                            "type": "string",
                            "value": "2dp"
                        }
                    },
                    "flxRegisteredUserList": {
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblFooter": {
                        "height": {
                            "type": "string",
                            "value": "5%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "profileheader": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "instanceId": "profileheader"
                    },
                    "btnUser": {
                        "instanceId": "profileheader"
                    },
                    "flexProfilePhotoANdTitle": {
                        "instanceId": "profileheader"
                    },
                    "imgDashBoard": {
                        "height": {
                            "type": "string",
                            "value": "30%"
                        },
                        "src": "menudesk.png",
                        "width": {
                            "type": "string",
                            "value": "45%"
                        },
                        "instanceId": "profileheader"
                    },
                    "lblDashboard": {
                        "instanceId": "profileheader"
                    },
                    "lblUserName": {
                        "instanceId": "profileheader"
                    },
                    "menuItem": {
                        "isVisible": false,
                        "width": {
                            "type": "string",
                            "value": "65%"
                        },
                        "instanceId": "menuItem"
                    },
                    "flxMenuClose": {
                        "isVisible": false,
                        "width": {
                            "type": "string",
                            "value": "35%"
                        }
                    },
                    "flexProfileOptions": {
                        "isVisible": false
                    },
                    "flxProfile": {}
                },
                "771": {
                    "flxInfoItemContainer": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "top": {
                            "type": "string",
                            "value": "10%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "flexHeader": {
                        "isVisible": false
                    },
                    "flxEventDropdownContainer": {
                        "height": {
                            "type": "string",
                            "value": "40px"
                        },
                        "left": {
                            "type": "string",
                            "value": "2.50%"
                        },
                        "width": {
                            "type": "string",
                            "value": "90%"
                        }
                    },
                    "listBoxEvent": {
                        "width": {
                            "type": "string",
                            "value": "70%"
                        }
                    },
                    "btnProceed": {
                        "left": {
                            "type": "string",
                            "value": "5%"
                        },
                        "width": {
                            "type": "string",
                            "value": "20%"
                        }
                    },
                    "lblSelectorInfo": {
                        "left": {
                            "type": "string",
                            "value": "2.50%"
                        }
                    },
                    "flxEventDetailContainer": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "width": {
                            "type": "string",
                            "value": "95%"
                        },
                        "zIndex": 20
                    },
                    "lblEventTitle": {
                        "text": "Webinar Event Upgrade"
                    },
                    "flxRootEventTitle": {
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "lblLine0": {
                        "isVisible": false
                    },
                    "flxMenuIcon": {
                        "isVisible": true,
                        "instanceId": "profileheader"
                    },
                    "lblFooter": {
                        "height": {
                            "type": "string",
                            "value": "5%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "profileheader": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "instanceId": "profileheader"
                    },
                    "flexProfilePhotoANdTitle": {
                        "instanceId": "profileheader"
                    },
                    "menuItem": {
                        "width": {
                            "type": "string",
                            "value": "40%"
                        },
                        "instanceId": "menuItem"
                    },
                    "flxMenuClose": {
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "40%"
                        },
                        "width": {
                            "type": "string",
                            "value": "60%"
                        }
                    },
                    "flexProfileOptions": {},
                    "flxProfile": {
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        }
                    }
                },
                "1366": {
                    "flxRoot": {},
                    "flxInfoItemContainer": {
                        "left": {
                            "type": "string",
                            "value": "19%"
                        },
                        "top": {
                            "type": "string",
                            "value": "10%"
                        }
                    },
                    "LblTitle": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "width": {
                            "type": "string",
                            "value": "95%"
                        }
                    },
                    "flxEventDropdownContainer": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "width": {
                            "type": "string",
                            "value": "95%"
                        }
                    },
                    "lblSelectorInfo": {
                        "left": {
                            "type": "string",
                            "value": "2.50%"
                        },
                        "top": {
                            "type": "string",
                            "value": "10dp"
                        }
                    },
                    "flxEventDetailContainer": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "width": {
                            "type": "string",
                            "value": "95%"
                        }
                    },
                    "CopylblLine0ba567fdb417245": {
                        "isVisible": false
                    },
                    "flexEventInfoRootTM": {
                        "isVisible": false
                    },
                    "flexMetricsTM": {
                        "isVisible": true
                    },
                    "CopylblLine0j1ad4573101b46": {
                        "isVisible": false
                    },
                    "lblFooter": {
                        "height": {
                            "type": "string",
                            "value": "5%"
                        }
                    },
                    "profileheader": {
                        "left": {
                            "type": "string",
                            "value": "19%"
                        },
                        "width": {
                            "type": "string",
                            "value": "81%"
                        },
                        "instanceId": "profileheader"
                    },
                    "flexProfilePhotoANdTitle": {
                        "centerY": {
                            "type": "string",
                            "value": "50.00%"
                        },
                        "right": {
                            "type": "string",
                            "value": "2.50%"
                        },
                        "instanceId": "profileheader"
                    },
                    "menuItem": {
                        "width": {
                            "type": "string",
                            "value": "19%"
                        },
                        "instanceId": "menuItem"
                    },
                    "flxMenuClose": {
                        "isVisible": false
                    },
                    "flexProfileOptions": {}
                },
                "1920": {
                    "flxRoot": {},
                    "flxInfoItemContainer": {
                        "left": {
                            "type": "string",
                            "value": "19%"
                        },
                        "top": {
                            "type": "string",
                            "value": "10%"
                        }
                    },
                    "flexHeader": {
                        "centerX": {
                            "type": "string",
                            "value": "50.00%"
                        },
                        "left": {
                            "type": "string",
                            "value": "2.50%"
                        },
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "95%"
                        }
                    },
                    "flxEventDropdownContainer": {
                        "left": {
                            "type": "string",
                            "value": "2.50%"
                        },
                        "top": {
                            "type": "string",
                            "value": "25px"
                        },
                        "width": {
                            "type": "string",
                            "value": "97.50%"
                        }
                    },
                    "lblSelectorInfo": {
                        "left": {
                            "type": "string",
                            "value": "2.50%"
                        }
                    },
                    "flxEventDetailContainer": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "width": {
                            "type": "string",
                            "value": "95%"
                        }
                    },
                    "lblFooter": {
                        "height": {
                            "type": "string",
                            "value": "5%"
                        },
                        "left": {
                            "type": "string",
                            "value": "0%"
                        }
                    },
                    "profileheader": {
                        "left": {
                            "type": "string",
                            "value": "19%"
                        },
                        "width": {
                            "type": "string",
                            "value": "81%"
                        },
                        "instanceId": "profileheader"
                    },
                    "btnUser": {
                        "instanceId": "profileheader"
                    },
                    "menuItem": {
                        "width": {
                            "type": "string",
                            "value": "19%"
                        },
                        "instanceId": "menuItem"
                    },
                    "flxMenuClose": {
                        "isVisible": false
                    },
                    "flexProfileOptions": {}
                }
            }
            this.add(flxRoot, flxMenuClose, flexProfileOptions);
        };
        return [{
            "addWidgets": addWidgetsfrmManageUser,
            "enabledForIdleTimeout": false,
            "id": "frmManageUser",
            "init": controller.AS_Form_i6355a3694614e85b1e940843f7ef516,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_e5ee2744321a4665a1dfc6cfd31bcbd9,
            "skin": "sknfrmffffff",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [480, 771, 1366, 1920],
            "onBreakpointChange": controller.AS_Form_j7cf8c4a78074258b2feb8e0f8e76ba3
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});