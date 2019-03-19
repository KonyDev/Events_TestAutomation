define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var flexLoginMain = new kony.ui.FlexContainer({
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "85%",
                "id": "flexLoginMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknflxffffBR1",
                "top": "195dp",
                "width": "45%",
                "zIndex": 1
            }, {}, {});
            flexLoginMain.setDefaultUnit(kony.flex.DP);
            var flexLoginEventLogo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "14%",
                "id": "flexLoginEventLogo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "FlexsknGradient",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexLoginEventLogo.setDefaultUnit(kony.flex.DP);
            var imgLogo = new kony.ui.Image2({
                "bottom": "15%",
                "centerY": "50%",
                "height": "44.12%",
                "id": "imgLogo",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "eventstitlw.png",
                "width": "21.00%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexLoginEventLogo.add(imgLogo);
            var flexLoginLinkedIn = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22%",
                "id": "flexLoginLinkedIn",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "14%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flexLoginLinkedIn.setDefaultUnit(kony.flex.DP);
            var lblConsumerLogin = new kony.ui.Label({
                "height": "20%",
                "id": "lblConsumerLogin",
                "isVisible": true,
                "left": "0%",
                "skin": "sknlbl333333AB130",
                "text": "Consumer Login",
                "top": "25dp",
                "width": "100%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnLinkedInLogin = new kony.ui.Button({
                "bottom": "6%",
                "centerX": "50.79%",
                "focusSkin": "sknlbl3f51b522desk",
                "height": "35%",
                "id": "btnLinkedInLogin",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_a80651fce1e64f739c85ba5d18a05842,
                "skin": "sknBtnfffBR1AL100",
                "text": "Login with LinkedIn",
                "width": "38%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexLoginLinkedIn.add(lblConsumerLogin, btnLinkedInLogin);
            var flexSeperator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10%",
                "id": "flexSeperator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "36%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flexSeperator.setDefaultUnit(kony.flex.DP);
            var lblSeperator = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "1px",
                "id": "lblSeperator",
                "isVisible": true,
                "left": "20%",
                "skin": "sknlblSeperator",
                "text": "Label",
                "top": "24%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOr = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOr",
                "isVisible": true,
                "skin": "sknlbl333AV100",
                "text": "OR",
                "width": "10%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexSeperator.add(lblSeperator, lblOr);
            var flexLoginCredAdmin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "54%",
                "id": "flexLoginCredAdmin",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0.00%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "46%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flexLoginCredAdmin.setDefaultUnit(kony.flex.DP);
            var lbklSignInTitle = new kony.ui.Label({
                "centerX": "50%",
                "height": "10%",
                "id": "lbklSignInTitle",
                "isVisible": true,
                "left": "77dp",
                "skin": "sknlbl333333AB130",
                "text": "Admin Login",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var txtUser = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "focusSkin": "txtFocusLogin",
                "height": "15%",
                "id": "txtUser",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "placeholder": "Enter your email ID",
                "secureTextEntry": false,
                "skin": "skntxtnormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "7%",
                "width": "90%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var flexPass = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "15%",
                "id": "flexPass",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "29dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "6%",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flexPass.setDefaultUnit(kony.flex.DP);
            var txtPassWord = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "txtFocusLogin",
                "height": "100%",
                "id": "txtPassWord",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "maxTextLength": null,
                "onDone": controller.AS_TextField_e9a76156f7f1447e9dc2972f0c5aee44,
                "placeholder": "Password",
                "secureTextEntry": true,
                "skin": "skntxtnormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var txtPasswordShow = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "txtFocusLogin",
                "height": "100%",
                "id": "txtPasswordShow",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "maxTextLength": null,
                "secureTextEntry": false,
                "skin": "skntxtnormal",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "defTextBoxPlaceholder"
            });
            var flexShowHidePass = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "20dp",
                "id": "flexShowHidePass",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_b1960b9eb1c24435ab192c6a8fc70925,
                "right": "2.50%",
                "skin": "slFbox",
                "top": "8dp",
                "width": "30dp",
                "zIndex": 10
            }, {}, {});
            flexShowHidePass.setDefaultUnit(kony.flex.DP);
            var imageShowPassword = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imageShowPassword",
                "isVisible": true,
                "right": "2.50%",
                "skin": "slImage",
                "src": "eyeicon.png",
                "top": "19dp",
                "width": "100%",
                "zIndex": 10
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexShowHidePass.add(imageShowPassword);
            flexPass.add(txtPassWord, txtPasswordShow, flexShowHidePass);
            var flexBtnActions = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "13%",
                "id": "flexBtnActions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8%",
                "width": "90%",
                "zIndex": 2
            }, {}, {});
            flexBtnActions.setDefaultUnit(kony.flex.DP);
            var btnSubmit = new kony.ui.Button({
                "focusSkin": "sknBtnfffBR1AL100",
                "height": "100%",
                "id": "btnSubmit",
                "isVisible": true,
                "left": "15%",
                "onClick": controller.AS_Button_gac375ae9f3f437da23efcb0f25b67c4,
                "skin": "sknBtnfffBR1AL100",
                "text": "SUBMIT",
                "top": "0%",
                "width": "30%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancel = new kony.ui.Button({
                "focusSkin": "sknBtnfffBR1AL100",
                "height": "100%",
                "id": "btnCancel",
                "isVisible": true,
                "left": "10%",
                "onClick": controller.AS_Button_c7383094e1434f0e9b8fe1d38e25d41f,
                "skin": "sknBtnfffBR1AL100",
                "text": "CANCEL",
                "top": "0%",
                "width": "30%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexBtnActions.add(btnSubmit, btnCancel);
            var lblError = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblError",
                "isVisible": true,
                "left": "172dp",
                "skin": "sknlblff0000AL80",
                "text": "The email and password combination you entered is not valid. Please tyr again.",
                "top": "5%",
                "width": "70%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexLoginCredAdmin.add(lbklSignInTitle, txtUser, flexPass, flexBtnActions, lblError);
            flexLoginMain.add(flexLoginEventLogo, flexLoginLinkedIn, flexSeperator, flexLoginCredAdmin);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1920,
                "480": {
                    "flexLoginMain": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "centerY": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "750dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "0%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "imgLogo": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        }
                    },
                    "btnLinkedInLogin": {
                        "width": {
                            "type": "string",
                            "value": "90%"
                        }
                    },
                    "txtUser": {
                        "height": {
                            "type": "string",
                            "value": "12%"
                        }
                    },
                    "flexPass": {
                        "height": {
                            "type": "string",
                            "value": "12%"
                        }
                    },
                    "flexBtnActions": {
                        "height": {
                            "type": "string",
                            "value": "11%"
                        }
                    }
                },
                "771": {
                    "flexLoginMain": {
                        "height": {
                            "type": "string",
                            "value": "600dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "70%"
                        }
                    },
                    "btnLinkedInLogin": {
                        "width": {
                            "type": "string",
                            "value": "70%"
                        }
                    },
                    "flexLoginCredAdmin": {
                        "left": {
                            "type": "string",
                            "value": "0.00%"
                        },
                        "top": {
                            "type": "string",
                            "value": "41.03%"
                        }
                    }
                },
                "1366": {
                    "flexLoginMain": {
                        "height": {
                            "type": "string",
                            "value": "600dp"
                        }
                    },
                    "txtUser": {
                        "height": {
                            "type": "string",
                            "value": "55dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "28dp"
                        }
                    },
                    "flexPass": {
                        "height": {
                            "type": "string",
                            "value": "55dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "25dp"
                        }
                    }
                }
            }
            this.add(flexLoginMain);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmf2f1f1",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [480, 771, 1366, 1920]
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});