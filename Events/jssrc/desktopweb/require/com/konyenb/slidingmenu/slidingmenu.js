define(function() {
    return function(controller) {
        var slidingmenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "slidingmenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-1dp",
            "isModalContainer": false,
            "postShow": controller.AS_FlexContainer_7d4d911ce6f64e1f934158f6da3fc2df,
            "top": "0dp",
            "width": "100%",
            "zIndex": 99
        }, {}, {});
        slidingmenu.setDefaultUnit(kony.flex.DP);
        var flxMainSlidingMenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMainSlidingMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-20%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_c051a9d2c48e4ca28722835199deec66,
            "top": "0dp",
            "width": "100%",
            "zIndex": 3
        }, {}, {});
        flxMainSlidingMenu.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "23%",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "19.96%",
            "isModalContainer": false,
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        flxHeader.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "15%",
            "isModalContainer": false,
            "onClick": controller.AS_onProfileClick_h0a282ca17324c44bb1e95890cf93b09,
            "top": "5%",
            "width": "80dp",
            "zIndex": 1
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.PERCENTAGE);
        var imgHeader = new kony.ui.Image2({
            "height": "100%",
            "id": "imgHeader",
            "isVisible": true,
            "left": "0dp",
            "src": "profile.png",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgHeader);
        var lblHeaderText1 = new kony.ui.Label({
            "id": "lblHeaderText1",
            "isVisible": true,
            "left": "48%",
            "text": "Kony",
            "textStyle": {},
            "top": "30%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 7
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblHeaderText2 = new kony.ui.Label({
            "id": "lblHeaderText2",
            "isVisible": true,
            "left": "47.96%",
            "text": "admin@kony.com",
            "textStyle": {},
            "top": "42.00%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 7
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnClick = new kony.ui.Button({
            "centerY": "33%",
            "height": "40%",
            "id": "btnClick",
            "isVisible": true,
            "left": "30%",
            "onClick": controller.AS_onApplyButtonClick_h49639a287584900aac84b73b254d6f4,
            "skin": "sknBtnTransperant",
            "text": "Login",
            "top": "15.03%",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxHeader.add(flxImage, lblHeaderText1, lblHeaderText2, btnClick);
        var flxMenuControl = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": true,
            "allowVerticalBounce": true,
            "bounces": false,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "68%",
            "horizontalScrollIndicator": true,
            "id": "flxMenuControl",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "20%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "top": "23%",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxMenuControl.setDefaultUnit(kony.flex.PERCENTAGE);
        flxMenuControl.add();
        var flxBotom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "2%",
            "clipBounds": true,
            "height": "7%",
            "id": "flxBotom",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20%",
            "isModalContainer": false,
            "onClick": controller.AS_onClickFooter_e62614a9a84e462fad4cc8bbe1335bdf,
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBotom.setDefaultUnit(kony.flex.DP);
        var imgFooter = new kony.ui.Image2({
            "centerY": "50%",
            "height": "30dp",
            "id": "imgFooter",
            "isVisible": true,
            "left": "7%",
            "src": "pageondot.png",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var textFooter = new kony.ui.Label({
            "centerY": "50%",
            "id": "textFooter",
            "isVisible": true,
            "left": "2%",
            "text": "Logout",
            "textStyle": {},
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxBotom.add(imgFooter, textFooter);
        var flexBottomActions = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "5%",
            "clipBounds": true,
            "height": "10%",
            "id": "flexBottomActions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "20%",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexBottomActions.setDefaultUnit(kony.flex.DP);
        var btnLogout = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "sknbtnLogoutIcon",
            "height": "50dp",
            "id": "btnLogout",
            "isVisible": true,
            "left": "4%",
            "onClick": controller.AS_onLogoutClick_fb2f60358abd45e3a1cc378228fb9229,
            "skin": "sknbtnLogoutIcon",
            "top": "6dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnInfo = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "defBtnFocus",
            "height": "50dp",
            "id": "btnInfo",
            "isVisible": false,
            "left": "4%",
            "onClick": controller.AS_onInfoClick_de995cc3017446559d83e439b45885ec,
            "top": "6dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnShare = new kony.ui.Button({
            "centerY": "50%",
            "focusSkin": "defBtnFocus",
            "height": "50dp",
            "id": "btnShare",
            "isVisible": false,
            "left": "4%",
            "onClick": controller.AS_onShareClick_g47e1661f90642bba0b680a15c2353d5,
            "top": "6dp",
            "width": "50dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexBottomActions.add(btnLogout, btnInfo, btnShare);
        flxMainSlidingMenu.add(flxHeader, flxMenuControl, flxBotom, flexBottomActions);
        var flxHamParent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxHamParent",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_9a3fece2bafd4a439c3fd58edc1c7a13,
            "top": "0%",
            "width": "50dp",
            "zIndex": 4
        }, {}, {});
        flxHamParent.setDefaultUnit(kony.flex.DP);
        var imgHamIcon = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "25dp",
            "id": "imgHamIcon",
            "isVisible": true,
            "src": "menu_icon.png",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgHamIconClose = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "25dp",
            "id": "imgHamIconClose",
            "isVisible": false,
            "src": "close_icon.png",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxHamParent.add(imgHamIcon, imgHamIconClose);
        var flxCover = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxCover",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_6e618c481f6b4ebfa0baef71fae7c499,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxCover.setDefaultUnit(kony.flex.DP);
        var flxsknroundedCorner = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxsknroundedCorner",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "top": "0dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxsknroundedCorner.setDefaultUnit(kony.flex.DP);
        flxsknroundedCorner.add();
        var flxskncircle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxskncircle",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "10dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxskncircle.setDefaultUnit(kony.flex.DP);
        flxskncircle.add();
        var flxfocus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxfocus",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "top": "10dp",
            "width": "1dp",
            "zIndex": 1
        }, {}, {});
        flxfocus.setDefaultUnit(kony.flex.DP);
        flxfocus.add();
        var lbl34px = new kony.ui.Label({
            "id": "lbl34px",
            "isVisible": false,
            "left": "66dp",
            "textStyle": {},
            "top": "217dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblnunito = new kony.ui.Label({
            "id": "lblnunito",
            "isVisible": false,
            "left": "76dp",
            "textStyle": {},
            "top": "227dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgChevron = new kony.ui.Image2({
            "height": "1dp",
            "id": "imgChevron",
            "isVisible": false,
            "left": "73dp",
            "src": "chevron_right.png",
            "top": "244dp",
            "width": "1dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxCover.add(flxsknroundedCorner, flxskncircle, flxfocus, lbl34px, lblnunito, imgChevron);
        var flexSecret = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0%",
            "id": "flexSecret",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "42dp",
            "isModalContainer": false,
            "top": "114dp",
            "width": "0%",
            "zIndex": 4
        }, {}, {});
        flexSecret.setDefaultUnit(kony.flex.DP);
        flexSecret.add();
        var lblSecret1 = new kony.ui.Label({
            "id": "lblSecret1",
            "isVisible": false,
            "left": "81dp",
            "text": "Label",
            "textStyle": {},
            "top": "55dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblSecret2 = new kony.ui.Label({
            "id": "lblSecret2",
            "isVisible": false,
            "left": "76dp",
            "text": "Label",
            "textStyle": {},
            "top": "106dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnSecret = new kony.ui.Button({
            "height": "50dp",
            "id": "btnSecret",
            "isVisible": false,
            "left": "57dp",
            "text": "Button",
            "top": "113dp",
            "width": "260dp",
            "zIndex": 4
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        slidingmenu.add(flxMainSlidingMenu, flxHamParent, flxCover, flexSecret, lblSecret1, lblSecret2, btnSecret);
        return slidingmenu;
    }
})