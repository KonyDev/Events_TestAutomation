define(function() {
    return function(controller) {
        var dashboard = new kony.ui.FlexContainer({
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
        }, {}, {});
        dashboard.setDefaultUnit(kony.flex.DP);
        var flxMenuIcon = new kony.ui.FlexContainer({
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
        }, {}, {});
        flxMenuIcon.setDefaultUnit(kony.flex.DP);
        var imgDashBoard = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgDashBoard",
            "isVisible": true,
            "skin": "slImage",
            "src": "menucollapse.png",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMenuIcon.add(imgDashBoard);
        var lblDashboard = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblDashboard",
            "isVisible": true,
            "left": "75dp",
            "skin": "sknlbl3f51b5AL30px",
            "text": "Dashboard",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexProfilePhotoANdTitle = new kony.ui.FlexContainer({
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
        }, {}, {});
        flexProfilePhotoANdTitle.setDefaultUnit(kony.flex.DP);
        var btnUser = new kony.ui.Button({
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
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblUserName = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblUserName",
            "isVisible": false,
            "left": "0%",
            "skin": "lblUserName",
            "text": "Vigneshewaran",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgProfile = new kony.ui.Image2({
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
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexProfilePhotoANdTitle.add(btnUser, lblUserName, imgProfile);
        dashboard.add(flxMenuIcon, lblDashboard, flexProfilePhotoANdTitle);
        return dashboard;
    }
})