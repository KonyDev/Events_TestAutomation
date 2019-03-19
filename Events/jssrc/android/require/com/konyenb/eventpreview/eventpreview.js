define(function() {
    return function(controller) {
        var eventpreview = new kony.ui.FlexScrollContainer(extendConfig({
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
            "skin": "sknflxscrollf0f1f3100",
            "top": "0%",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "eventpreview"), extendConfig({}, controller.args[1], "eventpreview"), extendConfig({}, controller.args[2], "eventpreview"));
        eventpreview.setDefaultUnit(kony.flex.DP);
        var flexEventPreviewHeader = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexEventPreviewHeader"), extendConfig({}, controller.args[1], "flexEventPreviewHeader"), extendConfig({}, controller.args[2], "flexEventPreviewHeader"));
        flexEventPreviewHeader.setDefaultUnit(kony.flex.DP);
        var FlexEventPreviewBack = new kony.ui.FlexContainer(extendConfig({
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
            "skin": "sknflexBR1CSc9c9c9100",
            "top": "26dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "FlexEventPreviewBack"), extendConfig({}, controller.args[1], "FlexEventPreviewBack"), extendConfig({}, controller.args[2], "FlexEventPreviewBack"));
        FlexEventPreviewBack.setDefaultUnit(kony.flex.DP);
        var imgPrevBack = new kony.ui.Image2(extendConfig({
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
        }, controller.args[0], "imgPrevBack"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPrevBack"), extendConfig({}, controller.args[2], "imgPrevBack"));
        FlexEventPreviewBack.add(imgPrevBack);
        var flexPrevShare = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "60%",
            "clipBounds": true,
            "height": "30dp",
            "id": "flexPrevShare",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "5%",
            "skin": "sknflexBR1CSc9c9c9100",
            "top": "26dp",
            "width": "30dp",
            "zIndex": 1
        }, controller.args[0], "flexPrevShare"), extendConfig({}, controller.args[1], "flexPrevShare"), extendConfig({}, controller.args[2], "flexPrevShare"));
        flexPrevShare.setDefaultUnit(kony.flex.DP);
        var imgPrevShare = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imgPrevShare",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "sharenormal.png",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgPrevShare"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgPrevShare"), extendConfig({}, controller.args[2], "imgPrevShare"));
        flexPrevShare.add(imgPrevShare);
        var lnlUnderLinePre = new kony.ui.Label(extendConfig({
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
        }, controller.args[0], "lnlUnderLinePre"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lnlUnderLinePre"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lnlUnderLinePre"));
        var lblEventTitlePrev = new kony.ui.Label(extendConfig({
            "id": "lblEventTitlePrev",
            "isVisible": true,
            "left": "9.00%",
            "skin": "sknlblAH3f51b5120",
            "text": "Unpacking V8 SP2",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "28.57%",
            "width": "50%",
            "zIndex": 5
        }, controller.args[0], "lblEventTitlePrev"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEventTitlePrev"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEventTitlePrev"));
        var lblEventCategoryPrev = new kony.ui.Label(extendConfig({
            "bottom": "18.3%",
            "id": "lblEventCategoryPrev",
            "isVisible": true,
            "left": "9.01%",
            "skin": "sknlblAM000100",
            "text": "Speaker Series",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 5
        }, controller.args[0], "lblEventCategoryPrev"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEventCategoryPrev"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEventCategoryPrev"));
        flexEventPreviewHeader.add(FlexEventPreviewBack, flexPrevShare, lnlUnderLinePre, lblEventTitlePrev, lblEventCategoryPrev);
        var flexEventBannerRounded = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexEventBannerRounded"), extendConfig({}, controller.args[1], "flexEventBannerRounded"), extendConfig({}, controller.args[2], "flexEventBannerRounded"));
        flexEventBannerRounded.setDefaultUnit(kony.flex.DP);
        var imageBanner = new kony.ui.Image2(extendConfig({
            "height": "100%",
            "id": "imageBanner",
            "imageWhenFailed": "eventsdef.png",
            "imageWhileDownloading": "eventsdef.png",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "bootcamp.jpg",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imageBanner"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imageBanner"), extendConfig({}, controller.args[2], "imageBanner"));
        var flexDateRange = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "150dp",
            "id": "flexDateRange",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "15%",
            "skin": "sknflexcustomDateRange",
            "top": "249dp",
            "width": "150dp",
            "zIndex": 1
        }, controller.args[0], "flexDateRange"), extendConfig({}, controller.args[1], "flexDateRange"), extendConfig({}, controller.args[2], "flexDateRange"));
        flexDateRange.setDefaultUnit(kony.flex.DP);
        var lblDateRange = new kony.ui.Label(extendConfig({
            "height": "20%",
            "id": "lblDateRange",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl00a0ddAM120",
            "text": " 03 - 05 ",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "30%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDateRange"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDateRange"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDateRange"));
        var lblMonthYear = new kony.ui.Label(extendConfig({
            "bottom": "30%",
            "centerY": "60%",
            "height": "20%",
            "id": "lblMonthYear",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl00a0ddAM120",
            "text": "JUL 2018",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblMonthYear"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblMonthYear"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblMonthYear"));
        flexDateRange.add(lblDateRange, lblMonthYear);
        flexEventBannerRounded.add(imageBanner, flexDateRange);
        var flexEventDetailsPreview = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexEventDetailsPreview"), extendConfig({}, controller.args[1], "flexEventDetailsPreview"), extendConfig({}, controller.args[2], "flexEventDetailsPreview"));
        flexEventDetailsPreview.setDefaultUnit(kony.flex.DP);
        var lblDesc = new kony.ui.Label(extendConfig({
            "id": "lblDesc",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl797979AL120",
            "text": "Join Kony experts on July 18, 2018, as we walk you through developing a rich interactive solution using Kony App Platform. We recently released an Events application as a sample which has Mobile and Desktop web capabilities. It can be used by any organization to announce events to its customers, members, and/or employees.The Events application leverages a range of features offered by Kony App Platform. We will cover the different aspects of design and give you a detail of the features utilized to develop the application. Some of the key features we’ll cover include:  Components Different types of backend services Reporting Integration with external systems like Linkedin.com Push notifications",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblDesc"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDesc"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDesc"));
        var btnShowMore = new kony.ui.Button(extendConfig({
            "height": "30dp",
            "id": "btnShowMore",
            "isVisible": false,
            "left": "0%",
            "onClick": controller.AS_Button_cdb25ed7935b4398948c269e15e17292,
            "skin": "sknbtn797979AL100",
            "text": "Show more",
            "top": "5dp",
            "width": "15%",
            "zIndex": 1
        }, controller.args[0], "btnShowMore"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnShowMore"), extendConfig({}, controller.args[2], "btnShowMore"));
        var lblGalleryTitle = new kony.ui.Label(extendConfig({
            "height": "30dp",
            "id": "lblGalleryTitle",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlbl000000AM130",
            "text": "Image Gallery",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblGalleryTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblGalleryTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblGalleryTitle"));
        var flxGalleryCompConatiner = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flxGalleryCompConatiner"), extendConfig({}, controller.args[1], "flxGalleryCompConatiner"), extendConfig({}, controller.args[2], "flxGalleryCompConatiner"));
        flxGalleryCompConatiner.setDefaultUnit(kony.flex.DP);
        var flexItem0 = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexItem0"), extendConfig({}, controller.args[1], "flexItem0"), extendConfig({}, controller.args[2], "flexItem0"));
        flexItem0.setDefaultUnit(kony.flex.DP);
        var imgItem0 = new kony.ui.Image2(extendConfig({
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
        }, controller.args[0], "imgItem0"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgItem0"), extendConfig({}, controller.args[2], "imgItem0"));
        flexItem0.add(imgItem0);
        var flexItem1 = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexItem1"), extendConfig({}, controller.args[1], "flexItem1"), extendConfig({}, controller.args[2], "flexItem1"));
        flexItem1.setDefaultUnit(kony.flex.DP);
        var imgItem1 = new kony.ui.Image2(extendConfig({
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
        }, controller.args[0], "imgItem1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgItem1"), extendConfig({}, controller.args[2], "imgItem1"));
        flexItem1.add(imgItem1);
        var flexItem2 = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexItem2"), extendConfig({}, controller.args[1], "flexItem2"), extendConfig({}, controller.args[2], "flexItem2"));
        flexItem2.setDefaultUnit(kony.flex.DP);
        var imgItem2 = new kony.ui.Image2(extendConfig({
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
        }, controller.args[0], "imgItem2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgItem2"), extendConfig({}, controller.args[2], "imgItem2"));
        flexItem2.add(imgItem2);
        var flexItem3 = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexItem3"), extendConfig({}, controller.args[1], "flexItem3"), extendConfig({}, controller.args[2], "flexItem3"));
        flexItem3.setDefaultUnit(kony.flex.DP);
        var imgItem3 = new kony.ui.Image2(extendConfig({
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
        }, controller.args[0], "imgItem3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgItem3"), extendConfig({}, controller.args[2], "imgItem3"));
        flexItem3.add(imgItem3);
        var flexItem4 = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexItem4"), extendConfig({}, controller.args[1], "flexItem4"), extendConfig({}, controller.args[2], "flexItem4"));
        flexItem4.setDefaultUnit(kony.flex.DP);
        var imgItem4 = new kony.ui.Image2(extendConfig({
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
        }, controller.args[0], "imgItem4"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgItem4"), extendConfig({}, controller.args[2], "imgItem4"));
        flexItem4.add(imgItem4);
        var flexItem5 = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexItem5"), extendConfig({}, controller.args[1], "flexItem5"), extendConfig({}, controller.args[2], "flexItem5"));
        flexItem5.setDefaultUnit(kony.flex.DP);
        var imgItem5 = new kony.ui.Image2(extendConfig({
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
        }, controller.args[0], "imgItem5"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgItem5"), extendConfig({}, controller.args[2], "imgItem5"));
        var flexRemainingImageCount = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexRemainingImageCount",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flexRemainingImageCount"), extendConfig({}, controller.args[1], "flexRemainingImageCount"), extendConfig({}, controller.args[2], "flexRemainingImageCount"));
        flexRemainingImageCount.setDefaultUnit(kony.flex.DP);
        var lblRemaingImageCount = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblRemaingImageCount",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlblfffAB120",
            "text": "1",
            "textStyle": {},
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblRemaingImageCount"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRemaingImageCount"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblRemaingImageCount"));
        flexRemainingImageCount.add(lblRemaingImageCount);
        flexItem5.add(imgItem5, flexRemainingImageCount);
        flxGalleryCompConatiner.add(flexItem0, flexItem1, flexItem2, flexItem3, flexItem4, flexItem5);
        var lblSessionTitleDet = new kony.ui.Label(extendConfig({
            "height": "30dp",
            "id": "lblSessionTitleDet",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlbl000000AM130",
            "text": "Event Sessions",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": "50%",
            "zIndex": 1
        }, controller.args[0], "lblSessionTitleDet"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSessionTitleDet"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSessionTitleDet"));
        var flexSessionsandSpeakers = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flexSessionsandSpeakers",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "80%",
            "zIndex": 2
        }, controller.args[0], "flexSessionsandSpeakers"), extendConfig({}, controller.args[1], "flexSessionsandSpeakers"), extendConfig({}, controller.args[2], "flexSessionsandSpeakers"));
        flexSessionsandSpeakers.setDefaultUnit(kony.flex.DP);
        var sessionpreview = new com.konyenb.sessionpreview(extendConfig({
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
            "width": "100%",
            "overrides": {
                "sessionpreview": {
                    "right": "viz.val_cleared",
                    "bottom": "viz.val_cleared",
                    "height": "viz.val_cleared",
                    "minWidth": "viz.val_cleared",
                    "minHeight": "viz.val_cleared",
                    "maxWidth": "viz.val_cleared",
                    "maxHeight": "viz.val_cleared",
                    "centerX": "viz.val_cleared",
                    "centerY": "viz.val_cleared"
                }
            }
        }, controller.args[0], "sessionpreview"), extendConfig({
            "overrides": {}
        }, controller.args[1], "sessionpreview"), extendConfig({
            "overrides": {}
        }, controller.args[2], "sessionpreview"));
        sessionpreview.onClick = controller.AS_onPrevBack_c30194728dc24fd0b83c3685661b3346;
        flexSessionsandSpeakers.add(sessionpreview);
        var btnRegisterBottom = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnfffBR1AL100",
            "height": "40dp",
            "id": "btnRegisterBottom",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_onBottomRegisterClick_e2c365202c834bb4ab655dd92829e638,
            "skin": "sknBtnfffBR1AL100",
            "text": "REGISTER",
            "top": "20dp",
            "width": "25%",
            "zIndex": 2
        }, controller.args[0], "btnRegisterBottom"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRegisterBottom"), extendConfig({}, controller.args[2], "btnRegisterBottom"));
        var flexDummyForSpace = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flexDummyForSpace",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flexDummyForSpace"), extendConfig({}, controller.args[1], "flexDummyForSpace"), extendConfig({}, controller.args[2], "flexDummyForSpace"));
        flexDummyForSpace.setDefaultUnit(kony.flex.DP);
        flexDummyForSpace.add();
        flexEventDetailsPreview.add(lblDesc, btnShowMore, lblGalleryTitle, flxGalleryCompConatiner, lblSessionTitleDet, flexSessionsandSpeakers, btnRegisterBottom, flexDummyForSpace);
        var flexEventDateTimeMapPrev = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexEventDateTimeMapPrev"), extendConfig({}, controller.args[1], "flexEventDateTimeMapPrev"), extendConfig({}, controller.args[2], "flexEventDateTimeMapPrev"));
        flexEventDateTimeMapPrev.setDefaultUnit(kony.flex.DP);
        var btnRegister = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnfffBR1AL100",
            "height": "40dp",
            "id": "btnRegister",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_onTopRegisterClick_db3e186ec15241deb6b920cea620ed02,
            "skin": "sknBtnfffBR1AL100",
            "text": "REGISTER",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "btnRegister"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRegister"), extendConfig({}, controller.args[2], "btnRegister"));
        var flexDatePrev = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexDatePrev"), extendConfig({}, controller.args[1], "flexDatePrev"), extendConfig({}, controller.args[2], "flexDatePrev"));
        flexDatePrev.setDefaultUnit(kony.flex.DP);
        var lblDatePrev = new kony.ui.Label(extendConfig({
            "id": "lblDatePrev",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl00a0ddAM110",
            "text": "Date",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDatePrev"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDatePrev"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDatePrev"));
        var lblDateValuePrev = new kony.ui.Label(extendConfig({
            "id": "lblDateValuePrev",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl797979AL100",
            "text": "03 Jul - 05 Jul, 2018",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblDateValuePrev"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblDateValuePrev"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblDateValuePrev"));
        flexDatePrev.add(lblDatePrev, lblDateValuePrev);
        var flexLocationPrev = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexLocationPrev"), extendConfig({}, controller.args[1], "flexLocationPrev"), extendConfig({}, controller.args[2], "flexLocationPrev"));
        flexLocationPrev.setDefaultUnit(kony.flex.DP);
        var lblLocationPrev = new kony.ui.Label(extendConfig({
            "id": "lblLocationPrev",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl00a0ddAM110",
            "text": "Online Event",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblLocationPrev"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLocationPrev"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLocationPrev"));
        var lblLocationValuePrev = new kony.ui.Label(extendConfig({
            "id": "lblLocationValuePrev",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl797979AL100",
            "text": "https://kony.webex.com/mw3300/mywebex",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblLocationValuePrev"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLocationValuePrev"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblLocationValuePrev"));
        flexLocationPrev.add(lblLocationPrev, lblLocationValuePrev);
        var flexGoogleMap = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "400dp",
            "id": "flexGoogleMap",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflexBR1px",
            "top": "10dp",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "flexGoogleMap"), extendConfig({}, controller.args[1], "flexGoogleMap"), extendConfig({}, controller.args[2], "flexGoogleMap"));
        flexGoogleMap.setDefaultUnit(kony.flex.DP);
        var mapGoogleMap = new kony.ui.Map(extendConfig({
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
        }, controller.args[0], "mapGoogleMap"), extendConfig({}, controller.args[1], "mapGoogleMap"), extendConfig({
            "mode": constants.MAP_VIEW_MODE_NORMAL,
            "showZoomControl": true,
            "zoomLevel": 4
        }, controller.args[2], "mapGoogleMap"));
        flexGoogleMap.add(mapGoogleMap);
        flexEventDateTimeMapPrev.add(btnRegister, flexDatePrev, flexLocationPrev, flexGoogleMap);
        eventpreview.add(flexEventPreviewHeader, flexEventBannerRounded, flexEventDetailsPreview, flexEventDateTimeMapPrev);
        return eventpreview;
    }
})