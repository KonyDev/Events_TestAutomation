define(function() {
    return function(controller) {
        var sessionpreview = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "sessionpreview",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlexBorderDesk00a0dd",
            "top": "0dp",
            "width": "50%"
        }, controller.args[0], "sessionpreview"), extendConfig({}, controller.args[1], "sessionpreview"), extendConfig({}, controller.args[2], "sessionpreview"));
        sessionpreview.setDefaultUnit(kony.flex.DP);
        var flexDateandStrip = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "200dp",
            "id": "flexDateandStrip",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flexDateandStrip"), extendConfig({}, controller.args[1], "flexDateandStrip"), extendConfig({}, controller.args[2], "flexDateandStrip"));
        flexDateandStrip.setDefaultUnit(kony.flex.DP);
        var lblVertStrip = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "95%",
            "id": "lblVertStrip",
            "isVisible": true,
            "left": "95%",
            "skin": "sknlblBG00a0dd100",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "1px",
            "zIndex": 1
        }, controller.args[0], "lblVertStrip"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVertStrip"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblVertStrip"));
        var lblDateMonth = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblDateMonth",
            "isVisible": true,
            "left": "32dp",
            "skin": "sknlbl00a0ddAM110",
            "text": "13 MAY",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "68dp",
            "width": "35%",
            "zIndex": 1
        }, controller.args[0], "lblDateMonth"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDateMonth"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDateMonth"));
        flexDateandStrip.add(lblVertStrip, lblDateMonth);
        var segSessionandSpeaker = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "groupCells": false,
            "id": "segSessionandSpeaker",
            "isVisible": true,
            "left": "20%",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flexSegSpeakerRoot": "flexSegSpeakerRoot",
                "flxEventAddress": "flxEventAddress",
                "flxImageContainer": "flxImageContainer",
                "flxSegSpeakerRoot": "flxSegSpeakerRoot",
                "flxSegSpeakerRootContainer": "flxSegSpeakerRootContainer",
                "flxSpeakerDetail": "flxSpeakerDetail",
                "imgSpeaker": "imgSpeaker",
                "lblDesignation": "lblDesignation",
                "lblEventAddress": "lblEventAddress",
                "lblEventDateTime": "lblEventDateTime",
                "lblHorizontalLine": "lblHorizontalLine",
                "lblLinkedIn": "lblLinkedIn",
                "lblSpeakerName": "lblSpeakerName"
            },
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "segSessionandSpeaker"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segSessionandSpeaker"), extendConfig({}, controller.args[2], "segSessionandSpeaker"));
        sessionpreview.add(flexDateandStrip, segSessionandSpeaker);
        return sessionpreview;
    }
})