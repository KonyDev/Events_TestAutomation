define(function() {
    return function(controller) {
        var eventpreview = new kony.ui.FlexScrollContainer({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "isMaster": true,
            "height": "100%",
            "horizontalScrollIndicator": true,
            "id": "eventpreview",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "CopysknFlxScroll",
            "top": "0%",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, {}, {});
        eventpreview.setDefaultUnit(kony.flex.DP);
        var flexEventPreviewHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "15%",
            "id": "flexEventPreviewHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexEventPreviewHeader.setDefaultUnit(kony.flex.DP);
        var FlexEventPreviewBack = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "30dp",
            "id": "FlexEventPreviewBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "onClick": controller.AS_onPrevBack_c30194728dc24fd0b83c3685661b3346,
            "skin": "CopyslFbox0gbeaa8667c7e49",
            "top": "26dp",
            "width": "30dp",
            "zIndex": 1
        }, {}, {});
        FlexEventPreviewBack.setDefaultUnit(kony.flex.DP);
        var imgPrevBack = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "50%",
            "id": "imgPrevBack",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "backiconblue.png",
            "top": "0%",
            "width": "75%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexEventPreviewBack.add(imgPrevBack);
        var flexPrevShare = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flexPrevShare",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5%",
            "skin": "CopyslFbox0gbeaa8667c7e49",
            "top": "26dp",
            "width": "30dp",
            "zIndex": 1
        }, {}, {});
        flexPrevShare.setDefaultUnit(kony.flex.DP);
        var imgPrevShare = new kony.ui.Image2({
            "height": "100%",
            "id": "imgPrevShare",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "sharenormal.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexPrevShare.add(imgPrevShare);
        var lnlUnderLinePre = new kony.ui.Label({
            "centerX": "50%",
            "height": "1%",
            "id": "lnlUnderLinePre",
            "isVisible": true,
            "left": "78dp",
            "skin": "sknheaderlblLine",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "90%",
            "width": "90%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblEventTitlePrev = new kony.ui.Label({
            "id": "lblEventTitlePrev",
            "isVisible": true,
            "left": "9.00%",
            "skin": "CopydefLabel0i8c4d1a19c1841",
            "text": "Unpacking V8 SP2",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "28.57%",
            "width": "50%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblEventCategoryPrev = new kony.ui.Label({
            "bottom": "18.3%",
            "id": "lblEventCategoryPrev",
            "isVisible": true,
            "left": "9.01%",
            "skin": "CopydefLabel0b298171997e943",
            "text": "Speaker Series",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexEventPreviewHeader.add(FlexEventPreviewBack, flexPrevShare, lnlUnderLinePre, lblEventTitlePrev, lblEventCategoryPrev);
        var flexEventBannerRounded = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70%",
            "id": "flexEventBannerRounded",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5%",
            "isModalContainer": false,
            "skin": "sknflexEventBannerRounded",
            "top": "16%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flexEventBannerRounded.setDefaultUnit(kony.flex.DP);
        var imageBanner = new kony.ui.Image2({
            "height": "100%",
            "id": "imageBanner",
            "imageWhenFailed": "eventsdef.png",
            "imageWhileDownloading": "eventsdef.png",
            "isVisible": true,
            "left": "0.00%",
            "src": "bootcamp.jpg",
            "top": "0.00%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexDateRange = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "150dp",
            "id": "flexDateRange",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "15%",
            "skin": "CopyslFbox0a7c4caba0e734c",
            "top": "249dp",
            "width": "150dp",
            "zIndex": 1
        }, {}, {});
        flexDateRange.setDefaultUnit(kony.flex.DP);
        var lblDateRange = new kony.ui.Label({
            "centerX": "47%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblDateRange",
            "isVisible": true,
            "left": "34dp",
            "skin": "CopydefLabel0g1c75e5a27044e",
            "text": " 03 - 05   JUL 2018",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "50dp",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexDateRange.add(lblDateRange);
        flexEventBannerRounded.add(imageBanner, flexDateRange);
        var flexEventDetailsPreview = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexEventDetailsPreview",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "5%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "88%",
            "width": "65%",
            "zIndex": 1
        }, {}, {});
        flexEventDetailsPreview.setDefaultUnit(kony.flex.DP);
        var lblDesc = new kony.ui.Label({
            "id": "lblDesc",
            "isVisible": true,
            "left": "0%",
            "skin": "CopydefLabel0hf758c59295641",
            "text": "Join Kony experts on July 18, 2018, as we walk you through developing a rich interactive solution using Kony App Platform. We recently released an Events application as a sample which has Mobile and Desktop web capabilities. It can be used by any organization to announce events to its customers, members, and/or employees.The Events application leverages a range of features offered by Kony App Platform. We will cover the different aspects of design and give you a detail of the features utilized to develop the application. Some of the key features we’ll cover include:  Components Different types of backend services Reporting Integration with external systems like Linkedin.com Push notifications",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var btnShowMore = new kony.ui.Button({
            "height": "30dp",
            "id": "btnShowMore",
            "isVisible": false,
            "left": "0%",
            "skin": "CopydefBtnNormal0if54e203b4dc47",
            "text": "Show more",
            "top": "5dp",
            "width": "15%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblGalleryTitle = new kony.ui.Label({
            "height": "30dp",
            "id": "lblGalleryTitle",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0b3bed0bd70c444",
            "text": "Image Gallery",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxGalleryCompConatiner = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "95dp",
            "id": "flxGalleryCompConatiner",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_fa64e6d4b30c4b9fb9903d24dbf6c7b9,
            "skin": "slFbox",
            "top": "8dp",
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        flxGalleryCompConatiner.setDefaultUnit(kony.flex.DP);
        var flexItem0 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "87dp",
            "id": "flexItem0",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxEventRoundedCorner",
            "top": "0dp",
            "width": "87dp",
            "zIndex": 1
        }, {}, {});
        flexItem0.setDefaultUnit(kony.flex.DP);
        var imgItem0 = new kony.ui.Image2({
            "centerX": "50.00%",
            "centerY": "50.19%",
            "height": "100%",
            "id": "imgItem0",
            "imageWhenFailed": "eventske.png",
            "imageWhileDownloading": "eventske.png",
            "isVisible": true,
            "skin": "slImage",
            "src": "ff1.jpg",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexItem0.add(imgItem0);
        var flexItem1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "87dp",
            "id": "flexItem1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "sknFlxEventRoundedCorner",
            "top": "0dp",
            "width": "87dp",
            "zIndex": 1
        }, {}, {});
        flexItem1.setDefaultUnit(kony.flex.DP);
        var imgItem1 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50.00%",
            "height": "100%",
            "id": "imgItem1",
            "imageWhenFailed": "eventske.png",
            "imageWhileDownloading": "eventske.png",
            "isVisible": true,
            "skin": "slImage",
            "src": "event01.jpg",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexItem1.add(imgItem1);
        var flexItem2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "87dp",
            "id": "flexItem2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "sknFlxEventRoundedCorner",
            "top": "0dp",
            "width": "87dp",
            "zIndex": 1
        }, {}, {});
        flexItem2.setDefaultUnit(kony.flex.DP);
        var imgItem2 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgItem2",
            "imageWhenFailed": "eventske.png",
            "imageWhileDownloading": "eventske.png",
            "isVisible": true,
            "skin": "slImage",
            "src": "event02.jpg",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexItem2.add(imgItem2);
        var flexItem3 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "87dp",
            "id": "flexItem3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "sknFlxEventRoundedCorner",
            "top": "0dp",
            "width": "87dp",
            "zIndex": 1
        }, {}, {});
        flexItem3.setDefaultUnit(kony.flex.DP);
        var imgItem3 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgItem3",
            "imageWhenFailed": "eventske.png",
            "imageWhileDownloading": "eventske.png",
            "isVisible": true,
            "skin": "slImage",
            "src": "event03.jpg",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexItem3.add(imgItem3);
        var flexItem4 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "87dp",
            "id": "flexItem4",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "sknFlxEventRoundedCorner",
            "top": "0dp",
            "width": "87dp",
            "zIndex": 1
        }, {}, {});
        flexItem4.setDefaultUnit(kony.flex.DP);
        var imgItem4 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgItem4",
            "imageWhenFailed": "eventske.png",
            "imageWhileDownloading": "eventske.png",
            "isVisible": true,
            "skin": "slImage",
            "src": "event04.jpeg",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexItem4.add(imgItem4);
        var flexItem5 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "87dp",
            "id": "flexItem5",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10dp",
            "isModalContainer": false,
            "skin": "sknFlxEventRoundedCorner",
            "top": "0dp",
            "width": "87dp",
            "zIndex": 1
        }, {}, {});
        flexItem5.setDefaultUnit(kony.flex.DP);
        var imgItem5 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgItem5",
            "imageWhenFailed": "eventske.png",
            "imageWhileDownloading": "eventske.png",
            "isVisible": true,
            "skin": "slImage",
            "src": "event05.jpg",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexRemainingImageCount = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexRemainingImageCount",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "CopyslFbox0fc77a92784cb45",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flexRemainingImageCount.setDefaultUnit(kony.flex.DP);
        var lblRemaingImageCount = new kony.ui.Label({
            "height": "100%",
            "id": "lblRemaingImageCount",
            "isVisible": true,
            "left": "0%",
            "skin": "CopydefLabel0bafe983d9b5c4f",
            "text": "1",
            "textStyle": {},
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexRemainingImageCount.add(lblRemaingImageCount);
        flexItem5.add(imgItem5, flexRemainingImageCount);
        flxGalleryCompConatiner.add(flexItem0, flexItem1, flexItem2, flexItem3, flexItem4, flexItem5);
        var CopylblGalleryTitle0b1a4c0d9e57341 = new kony.ui.Label({
            "height": "30dp",
            "id": "CopylblGalleryTitle0b1a4c0d9e57341",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0b3bed0bd70c444",
            "text": "Event Sessions",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flexSessionsandSpeakers = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexSessionsandSpeakers",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "85%",
            "zIndex": 2
        }, {}, {});
        flexSessionsandSpeakers.setDefaultUnit(kony.flex.DP);
        var sessionpreview = new com.konyenb.sessionpreview({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "sessionpreview",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "masterType": constants.MASTER_TYPE_USERWIDGET,
            "isModalContainer": false,
            "skin": "sknFlexBorderDesk00a0dd",
            "top": "5dp",
            "width": "100%"
        }, {}, {});
        sessionpreview.onClick = controller.AS_onPrevBack_c30194728dc24fd0b83c3685661b3346;
        flexSessionsandSpeakers.add(sessionpreview);
        var CopybtnRegister0j46a868969fb48 = new kony.ui.Button({
            "focusSkin": "CopydefBtnNormal0ed0a68b2c3ae44",
            "height": "40dp",
            "id": "CopybtnRegister0j46a868969fb48",
            "isVisible": true,
            "left": "0%",
            "skin": "CopydefBtnNormal0ed0a68b2c3ae44",
            "text": "REGISTER",
            "top": "20dp",
            "width": "25%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlexContainer0h9e3b693ead144 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "FlexContainer0h9e3b693ead144",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        FlexContainer0h9e3b693ead144.setDefaultUnit(kony.flex.DP);
        FlexContainer0h9e3b693ead144.add();
        flexEventDetailsPreview.add(lblDesc, btnShowMore, lblGalleryTitle, flxGalleryCompConatiner, CopylblGalleryTitle0b1a4c0d9e57341, flexSessionsandSpeakers, CopybtnRegister0j46a868969fb48, FlexContainer0h9e3b693ead144);
        var flexEventDateTimeMapPrev = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexEventDateTimeMapPrev",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "60%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "88%",
            "width": "35%",
            "zIndex": 1
        }, {}, {});
        flexEventDateTimeMapPrev.setDefaultUnit(kony.flex.DP);
        var btnRegister = new kony.ui.Button({
            "focusSkin": "CopydefBtnNormal0ed0a68b2c3ae44",
            "height": "40dp",
            "id": "btnRegister",
            "isVisible": true,
            "left": "0%",
            "skin": "CopydefBtnNormal0ed0a68b2c3ae44",
            "text": "REGISTER",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexDatePrev = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexDatePrev",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "35dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flexDatePrev.setDefaultUnit(kony.flex.DP);
        var lblDatePrev = new kony.ui.Label({
            "id": "lblDatePrev",
            "isVisible": true,
            "left": "0%",
            "skin": "CopydefLabel0j1a869fdd62a41",
            "text": "Date",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDateValuePrev = new kony.ui.Label({
            "id": "lblDateValuePrev",
            "isVisible": true,
            "left": "0%",
            "skin": "CopydefLabel0e422706dca9048",
            "text": "03 Jul - 05 Jul, 2018",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexDatePrev.add(lblDatePrev, lblDateValuePrev);
        var flexLocationPrev = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexLocationPrev",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "15dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flexLocationPrev.setDefaultUnit(kony.flex.DP);
        var lblLocationPrev = new kony.ui.Label({
            "id": "lblLocationPrev",
            "isVisible": true,
            "left": "0%",
            "skin": "CopydefLabel0j1a869fdd62a41",
            "text": "Online Event",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblLocationValuePrev = new kony.ui.Label({
            "id": "lblLocationValuePrev",
            "isVisible": true,
            "left": "0%",
            "skin": "CopydefLabel0ge2f18c6310f4f",
            "text": "https://kony.webex.com/mw3300/mywebex",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexLocationPrev.add(lblLocationPrev, lblLocationValuePrev);
        var flexGoogleMap = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "400dp",
            "id": "flexGoogleMap",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0af461fdac55b40",
            "top": "10dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flexGoogleMap.setDefaultUnit(kony.flex.DP);
        var mapGoogleMap = new kony.ui.Map({
            "calloutWidth": 80,
            "defaultPinImage": "pinb_1.png",
            "height": "100%",
            "id": "mapGoogleMap",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_Map_ea93e93aa4374dfeb0934c8ca7ba2264,
            "provider": constants.MAP_PROVIDER_GOOGLE,
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {
            "mode": constants.MAP_VIEW_MODE_NORMAL,
            "showZoomControl": true,
            "zoomLevel": 4
        });
        flexGoogleMap.add(mapGoogleMap);
        flexEventDateTimeMapPrev.add(btnRegister, flexDatePrev, flexLocationPrev, flexGoogleMap);
        var flexCopyRight = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "10%",
            "id": "flexCopyRight",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "172%",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flexCopyRight.setDefaultUnit(kony.flex.DP);
        var Label0i622b0ec21994c = new kony.ui.Label({
            "centerX": "50%",
            "height": "100%",
            "id": "Label0i622b0ec21994c",
            "isVisible": true,
            "left": "315dp",
            "skin": "CopydefLabel0b65169b227aa40",
            "text": "© Copyright 2018 Kony, Inc. All Rights Reserved.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "24%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flexCopyRight.add(Label0i622b0ec21994c);
        eventpreview.add(flexEventPreviewHeader, flexEventBannerRounded, flexEventDetailsPreview, flexEventDateTimeMapPrev, flexCopyRight);
        return eventpreview;
    }
})