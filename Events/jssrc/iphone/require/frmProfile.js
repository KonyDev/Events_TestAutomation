define("frmProfile", function() {
    return function(controller) {
        function addWidgetsfrmProfile() {
            this.setDefaultUnit(kony.flex.DP);
            var flexSclProfile = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "65%",
                "horizontalScrollIndicator": true,
                "id": "flexSclProfile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0.00%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScRootWhite",
                "top": "34.98%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexSclProfile.setDefaultUnit(kony.flex.DP);
            var flexEmail = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "13%",
                "id": "flexEmail",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknflexBR00a0dd1px",
                "top": "6%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexEmail.setDefaultUnit(kony.flex.DP);
            var lblEmail = new kony.ui.Label({
                "height": "100%",
                "id": "lblEmail",
                "isVisible": true,
                "left": "0.00%",
                "skin": "sknlbl3f51b5AL110",
                "text": "inboxofvignesh94@gmail.com",
                "textStyle": {},
                "top": "0%",
                "width": "78.97%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblEmailTitle = new kony.ui.Label({
                "height": "100%",
                "id": "lblEmailTitle",
                "isVisible": true,
                "right": "0.04%",
                "skin": "sknlbl3f51b5AL80",
                "text": "Email",
                "textStyle": {},
                "top": "-0.23%",
                "width": "16.78%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 4, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flexEmail.add(lblEmail, lblEmailTitle);
            var flexFName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "13%",
                "id": "flexFName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknflexBR00a0dd1px",
                "top": "6%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexFName.setDefaultUnit(kony.flex.DP);
            var lblFName = new kony.ui.Label({
                "height": "100%",
                "id": "lblFName",
                "isVisible": true,
                "left": "0.00%",
                "skin": "sknlbl3f51b5AL110",
                "text": "vigneshwaran",
                "textStyle": {},
                "top": "0%",
                "width": "78.97%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var LblFNVlaue = new kony.ui.Label({
                "height": "100%",
                "id": "LblFNVlaue",
                "isVisible": true,
                "right": "0.04%",
                "skin": "sknlbl3f51b5AL80",
                "text": "First Name",
                "textStyle": {},
                "top": "-0.23%",
                "width": "16.78%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 4, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flexFName.add(lblFName, LblFNVlaue);
            var flexLName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "13%",
                "id": "flexLName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknflexBR00a0dd1px",
                "top": "6%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexLName.setDefaultUnit(kony.flex.DP);
            var lblLName = new kony.ui.Label({
                "height": "100%",
                "id": "lblLName",
                "isVisible": true,
                "left": "0.00%",
                "skin": "sknlbl3f51b5AL110",
                "text": "Karunanithi",
                "textStyle": {},
                "top": "0%",
                "width": "78.97%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var lblLNameValue = new kony.ui.Label({
                "height": "100%",
                "id": "lblLNameValue",
                "isVisible": true,
                "right": "0.04%",
                "skin": "sknlbl3f51b5AL80",
                "text": "Last Name",
                "textStyle": {},
                "top": "-0.23%",
                "width": "16.78%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 4, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            flexLName.add(lblLName, lblLNameValue);
            flexSclProfile.add(flexEmail, flexFName, flexLName);
            var flexEventHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flexEventHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxHeaderGredient",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexEventHeader.setDefaultUnit(kony.flex.DP);
            var lblHeaderTitle = new kony.ui.Label({
                "centerX": "49.97%",
                "centerY": "50.00%",
                "height": "100%",
                "id": "lblHeaderTitle",
                "isVisible": true,
                "left": "154dp",
                "skin": "sknlbl00a0ddAL150",
                "text": "PROFILE",
                "textStyle": {},
                "top": "15dp",
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            var flexBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flexBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0.00%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_b8357bb55e274a478a4721776c8d142c,
                "skin": "slFbox",
                "top": "0.00%",
                "width": "17%",
                "zIndex": 1
            }, {}, {});
            flexBack.setDefaultUnit(kony.flex.DP);
            var btnBack = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknbtnBack",
                "height": "20dp",
                "id": "btnBack",
                "isVisible": true,
                "left": "14dp",
                "onClick": controller.AS_Button_b6755a6f7e2146dba820dea7c44133d5,
                "skin": "sknbtnBack",
                "top": "12dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "showProgressIndicator": true
            });
            flexBack.add(btnBack);
            flexEventHeader.add(lblHeaderTitle, flexBack);
            var flexProfileRound = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flexProfileRound",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknflexTounrBR2px",
                "top": "10%",
                "width": "100dp",
                "zIndex": 1
            }, {}, {});
            flexProfileRound.setDefaultUnit(kony.flex.DP);
            var imgProfile = new kony.ui.Image2({
                "height": "100%",
                "id": "imgProfile",
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
            flexProfileRound.add(imgProfile);
            var lblName = new kony.ui.Label({
                "centerX": "50%",
                "height": "7%",
                "id": "lblName",
                "isVisible": true,
                "left": "151dp",
                "skin": "sknLblEventTitle",
                "text": "Vigneshwaran karunanithi",
                "textStyle": {},
                "top": "28%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false,
                "wrapping": constants.WIDGET_TEXT_WORD_WRAP
            });
            this.add(flexSclProfile, flexEventHeader, flexProfileRound, lblName);
        };
        return [{
            "addWidgets": addWidgetsfrmProfile,
            "enabledForIdleTimeout": false,
            "id": "frmProfile",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmBGGradient"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "configureExtendBottom": false,
            "configureExtendTop": false,
            "configureStatusBarStyle": false,
            "footerOverlap": false,
            "formTransparencyDuringPostShow": "100",
            "headerOverlap": false,
            "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
            "needsIndicatorDuringPostShow": false,
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar"
        }]
    }
});