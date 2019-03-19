define(function() {
    return function(controller) {
        var EventsHeader = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "EventsHeader"), extendConfig({}, controller.args[1], "EventsHeader"), extendConfig({}, controller.args[2], "EventsHeader"));
        EventsHeader.setDefaultUnit(kony.flex.DP);
        var flexHeader = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexHeader"), extendConfig({}, controller.args[1], "flexHeader"), extendConfig({}, controller.args[2], "flexHeader"));
        flexHeader.setDefaultUnit(kony.flex.DP);
        var LblTitle = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "LblTitle",
            "isVisible": true,
            "left": "5%",
            "skin": "sknlbl00a0ddAL28px",
            "text": "Create New Event",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "LblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "LblTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "LblTitle"));
        var lblUnderLineEventMain = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "1%",
            "id": "lblUnderLineEventMain",
            "isVisible": true,
            "left": "78dp",
            "skin": "sknheaderlblLine",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "80%",
            "width": "90%",
            "zIndex": 5
        }, controller.args[0], "lblUnderLineEventMain"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUnderLineEventMain"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUnderLineEventMain"));
        var flexOperations = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexOperations"), extendConfig({}, controller.args[1], "flexOperations"), extendConfig({}, controller.args[2], "flexOperations"));
        flexOperations.setDefaultUnit(kony.flex.DP);
        var flexBasic = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexBasic"), extendConfig({}, controller.args[1], "flexBasic"), extendConfig({}, controller.args[2], "flexBasic"));
        flexBasic.setDefaultUnit(kony.flex.DP);
        var lblundbas = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "3px",
            "id": "lblundbas",
            "isVisible": true,
            "left": "78dp",
            "skin": "sknheaderlblLineSel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "85%",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "lblundbas"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblundbas"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblundbas"));
        var btnBasic = new kony.ui.Button(extendConfig({
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
        }, controller.args[0], "btnBasic"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnBasic"), extendConfig({}, controller.args[2], "btnBasic"));
        var lblstep1 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "18px",
            "id": "lblstep1",
            "isVisible": true,
            "left": "32dp",
            "skin": "sknlblstepsel",
            "text": "1",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "75%",
            "width": "18px",
            "zIndex": 5
        }, controller.args[0], "lblstep1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblstep1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblstep1"));
        flexBasic.add(lblundbas, btnBasic, lblstep1);
        var flxSessions = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxSessions"), extendConfig({}, controller.args[1], "flxSessions"), extendConfig({}, controller.args[2], "flxSessions"));
        flxSessions.setDefaultUnit(kony.flex.DP);
        var lblundSes = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "3px",
            "id": "lblundSes",
            "isVisible": true,
            "left": "78dp",
            "skin": "sknheaderlblLineNormal",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "85%",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "lblundSes"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblundSes"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblundSes"));
        var btnSessions = new kony.ui.Button(extendConfig({
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
        }, controller.args[0], "btnSessions"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSessions"), extendConfig({}, controller.args[2], "btnSessions"));
        var lblstep2 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "18px",
            "id": "lblstep2",
            "isVisible": true,
            "left": "32dp",
            "skin": "sknlblstepnor",
            "text": "2",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "75%",
            "width": "18px",
            "zIndex": 5
        }, controller.args[0], "lblstep2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblstep2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblstep2"));
        flxSessions.add(lblundSes, btnSessions, lblstep2);
        flexOperations.add(flexBasic, flxSessions);
        flexHeader.add(LblTitle, lblUnderLineEventMain, flexOperations);
        EventsHeader.add(flexHeader);
        return EventsHeader;
    }
})