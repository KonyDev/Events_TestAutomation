define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var flxRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxRoot",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxLogin",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var imgLogo = new kony.ui.Image2({
                "centerX": "50%",
                "id": "imgLogo",
                "isVisible": true,
                "skin": "slImage",
                "src": "splashscreeneventlogo.png",
                "top": "35dp",
                "width": "40%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblTitle",
                "isVisible": true,
                "skin": "sknLblAppTitle",
                "text": "Create an incredible event experience",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeader.add(imgLogo, lblTitle);
            var btnLinkedIn = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnLinkedIn",
                "height": "45dp",
                "id": "btnLinkedIn",
                "isVisible": true,
                "onClick": controller.AS_Button_b0d6e32e7bcf41e4b96196c030d114dc,
                "skin": "sknBtnLinkedIn",
                "text": "Sign In with LinkedIn",
                "top": "120dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnPleaseWait = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnLinkedIn",
                "height": "115dp",
                "id": "btnPleaseWait",
                "isVisible": false,
                "skin": "sknbtnBG0173b2100FFFAL140",
                "text": "Please wait.. we are processing..",
                "top": "50dp",
                "width": "270dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnOffice365 = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "45dp",
                "id": "btnOffice365",
                "isVisible": false,
                "skin": "sknbtnBGf36c21100",
                "text": "Sign In with Office365",
                "top": "20dp",
                "width": "260dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRoot.add(flxHeader, btnLinkedIn, btnPleaseWait, btnOffice365);
            var flxBrowserContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxBrowserContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "100%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxBrowserContainer.setDefaultUnit(kony.flex.DP);
            var flxBrowserHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "9%",
                "id": "flxBrowserHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxHeaderGredient",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBrowserHeader.setDefaultUnit(kony.flex.DP);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxBack",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_i63f2df2498847a4af7778c31ab453a8,
                "right": "0dp",
                "skin": "slFbox",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var imgBack = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgBack",
                "isVisible": true,
                "skin": "slImage",
                "src": "arrowpreviousscreen.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBack.add(imgBack);
            var flxClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxClose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_f39f3886172f45abbc2c94b1f5b58cb7,
                "right": "0dp",
                "skin": "slFbox",
                "width": "60dp",
                "zIndex": 1
            }, {}, {});
            flxClose.setDefaultUnit(kony.flex.DP);
            var imgClose = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "20dp",
                "id": "imgClose",
                "isVisible": true,
                "skin": "slImage",
                "src": "closeicon.png",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClose.add(imgClose);
            var lblHeader = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHeader",
                "isVisible": true,
                "skin": "sknLblHeader",
                "text": "LOGIN",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBrowserHeader.add(flxBack, flxClose, lblHeader);
            var browser = new kony.ui.Browser({
                "centerX": "50%",
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "91%",
                "htmlString": "Browser",
                "id": "browser",
                "isVisible": true,
                "top": "9%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBrowserContainer.add(flxBrowserHeader, browser);
            var headerContainer25 = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "56dp",
                "id": "headerContainer25",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "headerContainerSknMaster",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            headerContainer25.setDefaultUnit(kony.flex.DP);
            var headerIconLeft = new kony.ui.Label({
                "height": "100%",
                "id": "headerIconLeft",
                "isVisible": true,
                "left": "4dp",
                "skin": "headerBackIconSkin",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var headerButtonLeft = new kony.ui.Button({
                "focusSkin": "headerIconCartSkin",
                "height": "100%",
                "id": "headerButtonLeft",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_f764d4b6dd1a417e8fcee60144247940,
                "skin": "headerButtonBackSkin",
                "text": "Back",
                "top": "0dp",
                "width": "76dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "displayText": false,
                "padding": [27, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            headerContainer25.add(headerIconLeft, headerButtonLeft);
            this.add(flxRoot, flxBrowserContainer, headerContainer25);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmLogin"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "inTransitionConfig": {
                "formAnimation": 9
            },
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});