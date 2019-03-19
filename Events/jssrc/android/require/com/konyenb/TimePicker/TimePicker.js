define(function() {
    return function(controller) {
        var TimePicker = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "30%",
            "id": "TimePicker",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "postShow": controller.AS_FlexContainer_ebdfac7a238d4155960ebea12303ebf9,
            "skin": "sknCmpSt",
            "top": "0dp",
            "width": "10%"
        }, controller.args[0], "TimePicker"), extendConfig({}, controller.args[1], "TimePicker"), extendConfig({}, controller.args[2], "TimePicker"));
        TimePicker.setDefaultUnit(kony.flex.DP);
        var segTimingList = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "groupCells": false,
            "height": "80%",
            "id": "segTimingList",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_h12975ebb8e04648afd904a7ab1af93e,
            "pageOffDotImage": "pageoffdot_2.png",
            "pageOnDotImage": "pageondot_2.png",
            "retainSelection": false,
            "rowSkin": "seg2Normal",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "16.50%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "Flex0f0f365ad7e374e": "Flex0f0f365ad7e374e",
                "lblTime": "lblTime"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segTimingList"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segTimingList"), extendConfig({}, controller.args[2], "segTimingList"));
        var flexTimePicker = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "16.50%",
            "id": "flexTimePicker",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_f77703059019443c9b2ba841b14ce64f,
            "skin": "sknflexfffBR1",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flexTimePicker"), extendConfig({}, controller.args[1], "flexTimePicker"), extendConfig({}, controller.args[2], "flexTimePicker"));
        flexTimePicker.setDefaultUnit(kony.flex.DP);
        var lblTime = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblTime",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl343e48AL100",
            "text": "00:00",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblTime"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [11, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTime"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTime"));
        var lblDownArrow = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "15dp",
            "id": "lblDownArrow",
            "isVisible": true,
            "right": "5%",
            "skin": "slImage",
            "src": "chevrondown.png",
            "top": "14dp",
            "width": "15dp",
            "zIndex": 1
        }, controller.args[0], "lblDownArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDownArrow"), extendConfig({}, controller.args[2], "lblDownArrow"));
        flexTimePicker.add(lblTime, lblDownArrow);
        TimePicker.add(segTimingList, flexTimePicker);
        return TimePicker;
    }
})