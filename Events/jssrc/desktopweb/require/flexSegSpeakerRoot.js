define("flexSegSpeakerRoot", function() {
    return function(controller) {
        var flexSegSpeakerRoot = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "focusSkin": "sknFlexDeskTransparant",
            "id": "flexSegSpeakerRoot",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlexDeskTransparant",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flexSegSpeakerRoot.setDefaultUnit(kony.flex.DP);
        var flxImageContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxImageContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "sknflexContainerCircularDesk",
            "top": "15dp",
            "width": "50dp",
            "zIndex": 1
        }, {}, {});
        flxImageContainer.setDefaultUnit(kony.flex.DP);
        var imgSpeaker = new kony.ui.Image2({
            "height": "100%",
            "id": "imgSpeaker",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "profile.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImageContainer.add(imgSpeaker);
        var flxSpeakerDetail = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSpeakerDetail",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "reverseLayoutDirection": false,
            "left": "3%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "85.32%",
            "zIndex": 1
        }, {}, {});
        flxSpeakerDetail.setDefaultUnit(kony.flex.DP);
        var lblSpeakerName = new kony.ui.Label({
            "id": "lblSpeakerName",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblSpeakerNameDsk",
            "text": "Speaker Name",
            "textStyle": {},
            "top": "10dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDesignation = new kony.ui.Label({
            "id": "lblDesignation",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblDesignationDesk",
            "text": "Cheif Creative Officer, Google",
            "textStyle": {},
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblLinkedIn = new kony.ui.Label({
            "id": "lblLinkedIn",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblLinkedInDesk",
            "text": "Label",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlexContainer0bdbd5db7ecce4f = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "FlexContainer0bdbd5db7ecce4f",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0bdbd5db7ecce4f.setDefaultUnit(kony.flex.DP);
        var Label0gb84b6f0bdf643 = new kony.ui.Label({
            "id": "Label0gb84b6f0bdf643",
            "isVisible": false,
            "left": "3dp",
            "skin": "defLabel",
            "text": "Label",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0bdbd5db7ecce4f.add(Label0gb84b6f0bdf643);
        flxSpeakerDetail.add(lblSpeakerName, lblDesignation, lblLinkedIn, FlexContainer0bdbd5db7ecce4f);
        flexSegSpeakerRoot.add(flxImageContainer, flxSpeakerDetail);
        return flexSegSpeakerRoot;
    }
})