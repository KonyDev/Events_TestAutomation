define(function() {
    return function(controller) {
        var createnewevent = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "340px",
            "id": "createnewevent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "50dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_fa7c1077ef1149eca8587345b94c706d,
            "onTouchEnd": controller.AS_FlexContainer_g33b3b940cff4a7cafccfcbc8fce5868,
            "skin": "sknflexCustCreateEvent",
            "top": "0dp",
            "width": "320px"
        }, controller.args[0], "createnewevent"), extendConfig({}, controller.args[1], "createnewevent"), extendConfig({}, controller.args[2], "createnewevent"));
        createnewevent.setDefaultUnit(kony.flex.DP);
        var imgCreateNewEvent = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "40%",
            "height": "80%",
            "id": "imgCreateNewEvent",
            "isVisible": true,
            "skin": "slImage",
            "src": "create_new_event_icon_1.png",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "imgCreateNewEvent"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCreateNewEvent"), extendConfig({}, controller.args[2], "imgCreateNewEvent"));
        var lblCreateNewEvent = new kony.ui.Label(extendConfig({
            "bottom": "100px",
            "centerX": "50%",
            "id": "lblCreateNewEvent",
            "isVisible": true,
            "skin": "sknlbl00a0ddAM150",
            "text": "CREATE NEW EVENT",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCreateNewEvent"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCreateNewEvent"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCreateNewEvent"));
        createnewevent.add(imgCreateNewEvent, lblCreateNewEvent);
        return createnewevent;
    }
})