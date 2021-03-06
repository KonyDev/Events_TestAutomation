define(function() {
    return function(controller) {
        var EventsHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "11.10%",
            "id": "EventsHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "17.50%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "10%",
            "width": "82.50%"
        }, {}, {});
        EventsHeader.setDefaultUnit(kony.flex.DP);
        var flexHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "-2%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexHeader.setDefaultUnit(kony.flex.DP);
        var LblTitle = new kony.ui.Label({
            "height": "100%",
            "id": "LblTitle",
            "isVisible": true,
            "left": "5%",
            "skin": "sknlbl00a0ddAL28px",
            "text": "Create New Event",
            "top": "0dp",
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblUnderLineEventMain = new kony.ui.Label({
            "centerX": "50%",
            "height": "1%",
            "id": "lblUnderLineEventMain",
            "isVisible": true,
            "left": "78dp",
            "skin": "sknheaderlblLine",
            "top": "80%",
            "width": "90%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexOperations = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexOperations",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "5%",
            "skin": "slFbox",
            "top": "0%",
            "width": "31.43%",
            "zIndex": 7
        }, {}, {});
        flexOperations.setDefaultUnit(kony.flex.DP);
        var flexBasic = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexBasic",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "-7%",
            "width": "50%",
            "zIndex": 6
        }, {}, {});
        flexBasic.setDefaultUnit(kony.flex.DP);
        var lblundbas = new kony.ui.Label({
            "centerX": "50%",
            "height": "3px",
            "id": "lblundbas",
            "isVisible": true,
            "left": "78dp",
            "skin": "sknheaderlblLineSel",
            "top": "85%",
            "width": "100%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnBasic = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "sknbtnheadersel",
            "height": "100%",
            "id": "btnBasic",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknbtnheadersel",
            "text": "Basic Information",
            "top": "0%",
            "width": "90%",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblstep1 = new kony.ui.Label({
            "centerX": "50%",
            "height": "18px",
            "id": "lblstep1",
            "isVisible": true,
            "left": "32dp",
            "skin": "sknlblstepsel",
            "text": "1",
            "top": "75%",
            "width": "18px",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexBasic.add(lblundbas, btnBasic, lblstep1);
        var flxSessions = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSessions",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "-6%",
            "width": "50%",
            "zIndex": 6
        }, {}, {});
        flxSessions.setDefaultUnit(kony.flex.DP);
        var lblundSes = new kony.ui.Label({
            "centerX": "50%",
            "height": "3px",
            "id": "lblundSes",
            "isVisible": true,
            "left": "78dp",
            "skin": "sknheaderlblLineNormal",
            "top": "85%",
            "width": "100%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnSessions = new kony.ui.Button({
            "centerX": "50%",
            "focusSkin": "sknbtnheadernormal",
            "height": "100%",
            "id": "btnSessions",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknbtnheadernormal",
            "text": "Sessions",
            "top": "0%",
            "width": "90%",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblstep2 = new kony.ui.Label({
            "centerX": "50%",
            "height": "18px",
            "id": "lblstep2",
            "isVisible": true,
            "left": "32dp",
            "skin": "sknlblstepnor",
            "text": "2",
            "top": "75%",
            "width": "18px",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSessions.add(lblundSes, btnSessions, lblstep2);
        flexOperations.add(flexBasic, flxSessions);
        flexHeader.add(LblTitle, lblUnderLineEventMain, flexOperations);
        EventsHeader.add(flexHeader);
        return EventsHeader;
    }
})