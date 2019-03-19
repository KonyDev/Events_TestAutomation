define(function() {
    return function(controller) {
        var dashboard = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "10%",
            "id": "dashboard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknCompffffff100",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "dashboard"), extendConfig({}, controller.args[1], "dashboard"), extendConfig({}, controller.args[2], "dashboard"));
        dashboard.setDefaultUnit(kony.flex.DP);
        var flxMenuIcon = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMenuIcon",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "60dp",
            "zIndex": 1
        }, controller.args[0], "flxMenuIcon"), extendConfig({}, controller.args[1], "flxMenuIcon"), extendConfig({}, controller.args[2], "flxMenuIcon"));
        flxMenuIcon.setDefaultUnit(kony.flex.DP);
        var imgDashBoard = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgDashBoard",
            "isVisible": true,
            "skin": "slImage",
            "src": "menucollapse.png",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgDashBoard"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDashBoard"), extendConfig({}, controller.args[2], "imgDashBoard"));
        flxMenuIcon.add(imgDashBoard);
        var lblDashboard = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblDashboard",
            "isVisible": true,
            "left": "75dp",
            "skin": "sknlbl3f51b5AL30px",
            "text": "Dashboard",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "lblDashboard"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDashboard"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDashboard"));
        var flexProfilePhotoANdTitle = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50.00%",
            "clipBounds": true,
            "height": "100%",
            "id": "flexProfilePhotoANdTitle",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "2%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 5
        }, controller.args[0], "flexProfilePhotoANdTitle"), extendConfig({}, controller.args[1], "flexProfilePhotoANdTitle"), extendConfig({}, controller.args[2], "flexProfilePhotoANdTitle"));
        flexProfilePhotoANdTitle.setDefaultUnit(kony.flex.DP);
        var btnUser = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtn333110AL",
            "height": "100%",
            "id": "btnUser",
            "isVisible": true,
            "left": "50%",
            "onClick": controller.AS_btnLoginClick_e7025cff34c0420b9769292fe0f3792d,
            "skin": "sknBtn333110AL",
            "text": "Login",
            "top": "29dp",
            "width": "30%",
            "zIndex": 1
        }, controller.args[0], "btnUser"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnUser"), extendConfig({}, controller.args[2], "btnUser"));
        var lblUserName = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblUserName",
            "isVisible": false,
            "left": "0%",
            "skin": "lblUserName",
            "text": "Vigneshewaran",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblUserName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserName"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUserName"));
        var imgProfile = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "imgProfile",
            "isVisible": false,
            "left": "5%",
            "skin": "slImage",
            "src": "profile_1.png",
            "top": "0%",
            "width": "35dp",
            "zIndex": 1
        }, controller.args[0], "imgProfile"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgProfile"), extendConfig({}, controller.args[2], "imgProfile"));
        flexProfilePhotoANdTitle.add(btnUser, lblUserName, imgProfile);
        dashboard.add(flxMenuIcon, lblDashboard, flexProfilePhotoANdTitle);
        return dashboard;
    }
})