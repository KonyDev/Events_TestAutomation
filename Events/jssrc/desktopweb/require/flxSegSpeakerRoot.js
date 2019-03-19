define("flxSegSpeakerRoot", function() {
    return function(controller) {
        var flxSegSpeakerRoot = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSegSpeakerRoot",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlexDeskTransparant",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSegSpeakerRoot.setDefaultUnit(kony.flex.DP);
        var lblHorizontalLine = new kony.ui.Label({
            "centerX": "50%",
            "height": "1px",
            "id": "lblHorizontalLine",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblBGWhieDesk",
            "textStyle": {},
            "top": "8dp",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxEventAddress = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxEventAddress",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 3,
            "width": "79%",
            "zIndex": 1
        }, {}, {});
        flxEventAddress.setDefaultUnit(kony.flex.DP);
        var lblEventAddress = new kony.ui.Label({
            "id": "lblEventAddress",
            "isVisible": true,
            "left": "3%",
            "skin": "sknLblEventAddressDesk",
            "text": "Convention Center, Hyderabad",
            "textStyle": {},
            "top": "6dp",
            "width": "97%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblEventDateTime = new kony.ui.Label({
            "id": "lblEventDateTime",
            "isVisible": true,
            "left": "3%",
            "skin": "sknLblEventDayTimeDesk",
            "text": "Monday, 10 AM-5 PM",
            "textStyle": {},
            "top": 4,
            "width": "97%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxEventAddress.add(lblEventAddress, lblEventDateTime);
        flxSegSpeakerRoot.add(lblHorizontalLine, flxEventAddress);
        return flxSegSpeakerRoot;
    }
})