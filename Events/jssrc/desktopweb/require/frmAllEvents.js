define("frmAllEvents", function() {
    return function(controller) {
        function addWidgetsfrmAllEvents() {
            this.setDefaultUnit(kony.flex.DP);
            var flxRoot = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRoot",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoot.setDefaultUnit(kony.flex.DP);
            var flexHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "68px",
                "id": "flexHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "19%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10%",
                "width": "81%",
                "zIndex": 1
            }, {}, {});
            flexHeader.setDefaultUnit(kony.flex.DP);
            var LblTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "LblTitle",
                "isVisible": true,
                "left": "2%",
                "skin": "CopysknLblHeader0e7f21b07446f40",
                "text": "All Events",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUnderLineEventMain = new kony.ui.Label({
                "bottom": "2px",
                "centerX": "50%",
                "height": "1px",
                "id": "lblUnderLineEventMain",
                "isVisible": true,
                "left": "2%",
                "skin": "sknLblLineUltraLightGrey",
                "width": "95%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flexHeader.add(LblTitle, lblUnderLineEventMain);
            var flxEventLIstContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80%",
                "id": "flxEventLIstContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "20%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventLIstContainer.setDefaultUnit(kony.flex.DP);
            var flxScEventList = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxScEventList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScEventList",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxScEventList.setDefaultUnit(kony.flex.DP);
            flxScEventList.add();
            flxEventLIstContainer.add(flxScEventList);
            var profileheader = new com.konyenb.profileheader({
                "clipBounds": true,
                "height": "10%",
                "id": "profileheader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "19.00%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0f8e0708310cd4d",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            profileheader.btnUser.isVisible = true;
            profileheader.btnUser.left = null;
            profileheader.btnUser.right = "2.50%";
            profileheader.btnUser.top = null;
            profileheader.btnUser.width = "50%";
            profileheader.btnUser.onClick = controller.AS_Button_a55900dc4596483f88dfdfae647e2e4c;
            profileheader.flexProfilePhotoANdTitle.left = null;
            profileheader.flexProfilePhotoANdTitle.right = "2.50%";
            profileheader.flexProfilePhotoANdTitle.width = "50%";
            profileheader.flxProfile.autogrowMode = kony.flex.AUTOGROW_NONE;
            profileheader.flxProfile.height = "35dp";
            profileheader.flxProfile.isVisible = true;
            profileheader.flxProfile.left = "5%";
            profileheader.flxProfile.top = null;
            profileheader.flxProfile.width = "35dp";
            profileheader.flxProfile.onClick = controller.AS_FlexContainer_e3528929001243eab8a07b6082e56662;
            profileheader.lblDashboard.width = "50%";
            profileheader.lblUserName.isVisible = true;
            profileheader.left = "19.00%";
            profileheader.top = "0dp";
            profileheader.zIndex = 1;
            var menuItem = new com.konyenb.menu({
                "clipBounds": true,
                "height": "100%",
                "id": "menuItem",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "FlexsknGradient",
                "top": "0dp",
                "width": "19.20%"
            }, {}, {});
            menuItem.flexAllNewEvent.onClick = controller.AS_FlexContainer_a67aefd6aba347adbec0cb25a3a1b695;
            menuItem.flexEventLogo.onClick = controller.AS_FlexContainer_ed0ab3dd91e04110b55bd4c0dbf62e48;
            menuItem.flxCreateNewEvent.onClick = controller.AS_FlexContainer_c984428e8ee443c9b8c1ca75a1a1d086;
            menuItem.flxManageUser.onClick = controller.AS_FlexContainer_fda83b9dad124ee9be1f655ef0217d73;
            menuItem.isVisible = false;
            menuItem.width = "19.20%";
            var eventpreview = new com.konyenb.eventdetail({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "90%",
                "id": "eventpreview",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "100%",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "sknflxscrollf0f1f3100",
                "top": "10%",
                "width": "81%"
            }, {}, {});
            eventpreview.FlexEventPreviewBack.onClick = controller.AS_FlexContainer_i201eedcb3da4b04abb6f6aaed6d1829;
            eventpreview.autogrowMode = kony.flex.AUTOGROW_NONE;
            eventpreview.height = "90%";
            eventpreview.isVisible = true;
            eventpreview.left = "100%";
            eventpreview.top = "10%";
            eventpreview.width = "81%";
            eventpreview.flexDateRange.autogrowMode = kony.flex.AUTOGROW_NONE;
            eventpreview.flexEventBannerRounded.autogrowMode = kony.flex.AUTOGROW_NONE;
            eventpreview.flexGoogleMapTM.autogrowMode = kony.flex.AUTOGROW_NONE;
            eventpreview.flexItem0.autogrowMode = kony.flex.AUTOGROW_NONE;
            eventpreview.flexItem1.autogrowMode = kony.flex.AUTOGROW_NONE;
            eventpreview.flexItem2.autogrowMode = kony.flex.AUTOGROW_NONE;
            eventpreview.flexItem3.autogrowMode = kony.flex.AUTOGROW_NONE;
            eventpreview.flexItem4.autogrowMode = kony.flex.AUTOGROW_NONE;
            eventpreview.flexItem5.autogrowMode = kony.flex.AUTOGROW_NONE;
            eventpreview.sessiondetails.segSessionandSpeaker.data = [
                [{
                        "lblEventAddress": "Convention Center, Hyderabad",
                        "lblEventDateTime": "Monday, 10 AM-5 PM",
                        "lblHorizontalLine": ""
                    },
                    [{
                        "Label0gb84b6f0bdf643": "Label",
                        "imgSpeaker": "",
                        "lblDesignation": "Cheif Creative Officer, Google",
                        "lblLinkedIn": "Label",
                        "lblSpeakerName": "Speaker Name"
                    }, {
                        "Label0gb84b6f0bdf643": "Label",
                        "imgSpeaker": "",
                        "lblDesignation": "Cheif Creative Officer, Google",
                        "lblLinkedIn": "Label",
                        "lblSpeakerName": "Speaker Name"
                    }, {
                        "Label0gb84b6f0bdf643": "Label",
                        "imgSpeaker": "",
                        "lblDesignation": "Cheif Creative Officer, Google",
                        "lblLinkedIn": "Label",
                        "lblSpeakerName": "Speaker Name"
                    }]
                ],
                [{
                        "lblEventAddress": "Convention Center, Hyderabad",
                        "lblEventDateTime": "Monday, 10 AM-5 PM",
                        "lblHorizontalLine": ""
                    },
                    [{
                        "Label0gb84b6f0bdf643": "Label",
                        "imgSpeaker": "",
                        "lblDesignation": "Cheif Creative Officer, Google",
                        "lblLinkedIn": "Label",
                        "lblSpeakerName": "Speaker Name"
                    }, {
                        "Label0gb84b6f0bdf643": "Label",
                        "imgSpeaker": "",
                        "lblDesignation": "Cheif Creative Officer, Google",
                        "lblLinkedIn": "Label",
                        "lblSpeakerName": "Speaker Name"
                    }, {
                        "Label0gb84b6f0bdf643": "Label",
                        "imgSpeaker": "",
                        "lblDesignation": "Cheif Creative Officer, Google",
                        "lblLinkedIn": "Label",
                        "lblSpeakerName": "Speaker Name"
                    }]
                ]
            ];
            var flxMenuClose = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMenuClose",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "65%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_a4d31c6292514e3e8ca53491392a8737,
                "skin": "CopyslFbox0fb1aa32e474842",
                "top": "0%",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxMenuClose.setDefaultUnit(kony.flex.DP);
            flxMenuClose.add();
            var flexProfileOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "flexProfileOptions",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "right": "2%",
                "skin": "CopyCopyslFbox1",
                "top": "6.50%",
                "width": "120dp",
                "zIndex": 50
            }, {}, {});
            flexProfileOptions.setDefaultUnit(kony.flex.DP);
            var imgProfileDropDown = new kony.ui.Image2({
                "centerX": "50%",
                "height": "15px",
                "id": "imgProfileDropDown",
                "isVisible": true,
                "left": "6dp",
                "skin": "CopyslImage",
                "src": "drop_down_menu_1_1.png",
                "top": "0dp",
                "width": "15dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxProfile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "95%",
                "id": "flxProfile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "-5px",
                "width": "100%",
                "zIndex": 500
            }, {}, {});
            flxProfile.setDefaultUnit(kony.flex.DP);
            var flxEditProfile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxEditProfile",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopyslFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 50
            }, {}, {});
            flxEditProfile.setDefaultUnit(kony.flex.DP);
            var lblEditProfile = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEditProfile",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblProfileNormal",
                "text": "Edit Profile",
                "top": "6dp",
                "width": "100%",
                "zIndex": 50
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEditProfile.add(lblEditProfile);
            var lblLineEditProfile = new kony.ui.Label({
                "centerX": "50%",
                "height": "1px",
                "id": "lblLineEditProfile",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyCopydefLabel",
                "top": "0%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLogout = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "flxLogout",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_aa163ba9939340b0930dc8b5096e510e,
                "skin": "CopyslFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLogout.setDefaultUnit(kony.flex.DP);
            var lblLogout = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblLogout",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopysknLblProfileNormal",
                "text": "Logout",
                "top": "6dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLogout.add(lblLogout);
            flxProfile.add(flxEditProfile, lblLineEditProfile, flxLogout);
            flexProfileOptions.add(imgProfileDropDown, flxProfile);
            flxRoot.add(flexHeader, flxEventLIstContainer, profileheader, menuItem, eventpreview, flxMenuClose, flexProfileOptions);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1920,
                "480": {
                    "flexHeader": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "LblTitle": {
                        "skin": "CopysknLblHeader0e7f21b07446f40"
                    },
                    "flxScEventList": {
                        "zIndex": 3
                    },
                    "btnUser": {
                        "instanceId": "profileheader"
                    },
                    "flexProfilePhotoANdTitle": {
                        "instanceId": "profileheader"
                    },
                    "flxMenuIcon": {
                        "left": {
                            "type": "string",
                            "value": "1%"
                        },
                        "width": {
                            "type": "string",
                            "value": "60dp"
                        },
                        "instanceId": "profileheader"
                    },
                    "imgDashBoard": {
                        "height": {
                            "type": "string",
                            "value": "30%"
                        },
                        "src": "menudesk.png",
                        "width": {
                            "type": "string",
                            "value": "45%"
                        },
                        "instanceId": "profileheader"
                    },
                    "lblDashboard": {
                        "instanceId": "profileheader"
                    },
                    "lblUserName": {
                        "instanceId": "profileheader"
                    },
                    "profileheader": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "instanceId": "profileheader"
                    },
                    "menuItem": {
                        "isVisible": false,
                        "width": {
                            "type": "string",
                            "value": "65%"
                        },
                        "instanceId": "menuItem"
                    },
                    "btnRegisterBottom": {
                        "width": {
                            "type": "string",
                            "value": "50%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "eventpreview": {
                        "isVisible": true,
                        "left": {
                            "type": "string",
                            "value": "100%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexDateRange": {
                        "height": {
                            "type": "string",
                            "value": "100dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100dp"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexDateTM": {
                        "isVisible": true,
                        "instanceId": "eventpreview"
                    },
                    "flexEventBannerRounded": {
                        "height": {
                            "type": "string",
                            "value": "25%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexEventDateTimeMapPrev": {
                        "isVisible": false,
                        "zIndex": 2,
                        "instanceId": "eventpreview"
                    },
                    "flexEventDetailsPreview": {
                        "left": {
                            "type": "string",
                            "value": "5%"
                        },
                        "top": {
                            "type": "string",
                            "value": "43%"
                        },
                        "width": {
                            "type": "string",
                            "value": "90%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexGoogleMapTM": {
                        "isVisible": true,
                        "instanceId": "eventpreview"
                    },
                    "flexItem0": {
                        "height": {
                            "type": "string",
                            "value": "45dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "45dp"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexItem1": {
                        "height": {
                            "type": "string",
                            "value": "45dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "45dp"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexItem2": {
                        "height": {
                            "type": "string",
                            "value": "45dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "45dp"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexItem3": {
                        "height": {
                            "type": "string",
                            "value": "45dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "45dp"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexItem4": {
                        "height": {
                            "type": "string",
                            "value": "45dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "45dp"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexItem5": {
                        "height": {
                            "type": "string",
                            "value": "45dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "45dp"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexLocationPrevTM": {
                        "isVisible": true,
                        "top": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexSessionsandSpeakers": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flxGalleryCompConatiner": {
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "lblDateTM": {
                        "width": {
                            "type": "string",
                            "value": "40%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "lblDateValueTM": {
                        "left": {
                            "type": "string",
                            "value": "15%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "lblDesc": {
                        "text": "Join Kony experts on July 18, 2018, as we walk you through developing a rich interactive solution using Kony App Platform. We recently released an Events application as a sample which has Mobile and Desktop web capabilities. It can be used by any organization to announce events to its customers, members, and/or employees.The Events application leverages a range of features offered by Kony App Platform. We will cover the different aspects of design and give you a detail of the features utilized to develop the application. Some of the key features we’ll cover include:  Components Different types of backend services Reporting Integration with external systems like Linkedin.com Push notifications",
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "lblEventCategoryPrev": {
                        "left": {
                            "type": "string",
                            "value": "17.009999999999998%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "lblEventTitlePrev": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "left": {
                            "type": "string",
                            "value": "16.00%"
                        },
                        "top": {
                            "type": "string",
                            "value": "28.50%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "lblSessionTitleDet": {
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        },
                        "top": {
                            "type": "string",
                            "value": "5dp"
                        },
                        "instanceId": "eventpreview"
                    },
                    "sessiondetails.lblDateMonth": {
                        "width": {
                            "type": "string",
                            "value": "80%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flxMenuClose": {
                        "isVisible": false,
                        "width": {
                            "type": "string",
                            "value": "35%"
                        }
                    },
                    "flexProfileOptions": {},
                    "flxProfile": {}
                },
                "771": {
                    "flexHeader": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        }
                    },
                    "LblTitle": {
                        "text": "All Events"
                    },
                    "flxEventLIstContainer": {},
                    "flxScEventList": {},
                    "flexProfilePhotoANdTitle": {
                        "instanceId": "profileheader"
                    },
                    "profileheader": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "instanceId": "profileheader"
                    },
                    "menuItem": {
                        "width": {
                            "type": "string",
                            "value": "40%"
                        },
                        "instanceId": "menuItem"
                    },
                    "eventpreview": {
                        "left": {
                            "type": "string",
                            "value": "100%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexDateRange": {
                        "height": {
                            "type": "string",
                            "value": "100dp"
                        },
                        "width": {
                            "type": "string",
                            "value": "100dp"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexDateTM": {
                        "isVisible": true,
                        "instanceId": "eventpreview"
                    },
                    "flexEventBannerRounded": {
                        "height": {
                            "type": "string",
                            "value": "30%"
                        },
                        "top": {
                            "type": "string",
                            "value": "16%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexEventDateTimeMapPrev": {
                        "isVisible": false,
                        "instanceId": "eventpreview"
                    },
                    "flexEventDetailsPreview": {
                        "centerX": {
                            "type": "string",
                            "value": "50%"
                        },
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "top": {
                            "type": "string",
                            "value": "46.02%"
                        },
                        "width": {
                            "type": "string",
                            "value": "90%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexGoogleMapTM": {
                        "centerX": {
                            "type": "string",
                            "value": ""
                        },
                        "height": {
                            "type": "string",
                            "value": "300dp"
                        },
                        "isVisible": true,
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexLocationPrevTM": {
                        "isVisible": true,
                        "instanceId": "eventpreview"
                    },
                    "flexSessionsandSpeakers": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flxGalleryCompConatiner": {
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "lblDesc": {
                        "width": {
                            "type": "string",
                            "value": "95%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "lblEventCategoryPrev": {
                        "left": {
                            "type": "string",
                            "value": "12.01%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "lblEventTitlePrev": {
                        "left": {
                            "type": "string",
                            "value": "12%"
                        },
                        "top": {
                            "type": "string",
                            "value": "30.57%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flxMenuClose": {
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "40%"
                        },
                        "width": {
                            "type": "string",
                            "value": "60%"
                        }
                    },
                    "flexProfileOptions": {},
                    "flxProfile": {
                        "left": {
                            "type": "string",
                            "value": "0dp"
                        }
                    }
                },
                "1366": {
                    "LblTitle": {
                        "minWidth": {
                            "type": "string",
                            "value": ""
                        }
                    },
                    "flxEventLIstContainer": {
                        "left": {
                            "type": "string",
                            "value": "19%"
                        },
                        "width": {
                            "type": "string",
                            "value": "81%"
                        }
                    },
                    "profileheader": {
                        "width": {
                            "type": "string",
                            "value": "81%"
                        },
                        "instanceId": "profileheader"
                    },
                    "eventpreview": {
                        "instanceId": "eventpreview"
                    },
                    "flexSessionsandSpeakers": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flxMenuClose": {
                        "isVisible": false
                    },
                    "flexProfileOptions": {}
                },
                "1920": {
                    "flxEventLIstContainer": {
                        "left": {
                            "type": "string",
                            "value": "19%"
                        },
                        "width": {
                            "type": "string",
                            "value": "81%"
                        }
                    },
                    "btnUser": {
                        "instanceId": "profileheader"
                    },
                    "profileheader": {
                        "width": {
                            "type": "string",
                            "value": "81%"
                        },
                        "instanceId": "profileheader"
                    },
                    "menuItem": {
                        "isVisible": false,
                        "instanceId": "menuItem"
                    },
                    "eventpreview": {
                        "left": {
                            "type": "string",
                            "value": "100%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flexSessionsandSpeakers": {
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "instanceId": "eventpreview"
                    },
                    "flxMenuClose": {
                        "isVisible": false,
                        "width": {
                            "type": "string",
                            "value": "60%"
                        }
                    },
                    "flexProfileOptions": {}
                }
            }
            this.add(flxRoot);
        };
        return [{
            "addWidgets": addWidgetsfrmAllEvents,
            "enabledForIdleTimeout": true,
            "id": "frmAllEvents",
            "init": controller.AS_Form_f76d5d0ba82e4796a6aac9e8f327e43d,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_hbe07b3ca4164101b2660362c4fc8c23,
            "skin": "sknFrmLightGrey",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [480, 771, 1366, 1920],
            "onBreakpointChange": controller.AS_Form_fd3de6c9354149ab96133808aa3dc33d
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "onDeviceBack": controller.AS_Form_f4846a2d4d6342d5b65a424619ff391d,
            "retainScrollPosition": false
        }]
    }
});