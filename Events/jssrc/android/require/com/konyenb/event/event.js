define(function() {
    return function(controller) {
        var event = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "340dp",
            "id": "event",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_dfc085c89ad2463a95577ed737bff289,
            "skin": "sknFlxEventRoot",
            "top": "0dp",
            "width": "310dp"
        }, controller.args[0], "event"), extendConfig({}, controller.args[1], "event"), extendConfig({}, controller.args[2], "event"));
        event.setDefaultUnit(kony.flex.DP);
        var flxBannerContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "120dp",
            "id": "flxBannerContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxBannerContainer"), extendConfig({}, controller.args[1], "flxBannerContainer"), extendConfig({}, controller.args[2], "flxBannerContainer"));
        flxBannerContainer.setDefaultUnit(kony.flex.DP);
        var imgEventLogo = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgEventLogo",
            "imageWhenFailed": "eventsdef.png",
            "imageWhileDownloading": "eventsdef.png",
            "isVisible": true,
            "skin": "slImage",
            "src": "eventsdef.png",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgEventLogo"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_CROP,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgEventLogo"), extendConfig({}, controller.args[2], "imgEventLogo"));
        var imageRegister = new kony.ui.Image2(extendConfig({
            "height": "20%",
            "id": "imageRegister",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "register.png",
            "top": "70%",
            "width": "30%",
            "zIndex": 4
        }, controller.args[0], "imageRegister"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imageRegister"), extendConfig({}, controller.args[2], "imageRegister"));
        flxBannerContainer.add(imgEventLogo, imageRegister);
        var flxEventDesc = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "220dp",
            "id": "flxEventDesc",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "94%",
            "zIndex": 1
        }, controller.args[0], "flxEventDesc"), extendConfig({}, controller.args[1], "flxEventDesc"), extendConfig({}, controller.args[2], "flxEventDesc"));
        flxEventDesc.setDefaultUnit(kony.flex.DP);
        var lblEventTitle = new kony.ui.Label(extendConfig({
            "height": "30dp",
            "id": "lblEventTitle",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlbl3f51b5AH18px",
            "text": "Webinar Event Upgrade",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "9dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblEventTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEventTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEventTitle"));
        var lblSeparator1 = new kony.ui.Label(extendConfig({
            "height": "1px",
            "id": "lblSeparator1",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblsep1",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSeparator1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator1"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator1"));
        var flxCategory = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "28dp",
            "id": "flxCategory",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxCategory"), extendConfig({}, controller.args[1], "flxCategory"), extendConfig({}, controller.args[2], "flxCategory"));
        flxCategory.setDefaultUnit(kony.flex.DP);
        var lblCategoryTitle = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCategoryTitle",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblEventDescItem",
            "text": "Category",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "21%",
            "zIndex": 1
        }, controller.args[0], "lblCategoryTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblCategoryTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCategoryTitle"));
        var lblHyphen = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblHyphen",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCharcolGrey",
            "text": " - ",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHyphen"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHyphen"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHyphen"));
        var lblEventDescCategoryText = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblEventDescCategoryText",
            "isVisible": true,
            "left": "4dp",
            "skin": "sknlbl333333AM14px",
            "text": "Conference",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "73%",
            "zIndex": 1
        }, controller.args[0], "lblEventDescCategoryText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEventDescCategoryText"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEventDescCategoryText"));
        flxCategory.add(lblCategoryTitle, lblHyphen, lblEventDescCategoryText);
        var flxEventDescDate = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "28dp",
            "id": "flxEventDescDate",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEventDescDate"), extendConfig({}, controller.args[1], "flxEventDescDate"), extendConfig({}, controller.args[2], "flxEventDescDate"));
        flxEventDescDate.setDefaultUnit(kony.flex.DP);
        var lblEventDescDateTitle = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblEventDescDateTitle",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblEventDescItem",
            "text": "Date",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "21%",
            "zIndex": 1
        }, controller.args[0], "lblEventDescDateTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEventDescDateTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEventDescDateTitle"));
        var lblHyphen2 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblHyphen2",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCharcolGrey",
            "text": " - ",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHyphen2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHyphen2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHyphen2"));
        var lblEventDescDateText = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblEventDescDateText",
            "isVisible": true,
            "left": "4dp",
            "skin": "sknlbl333333AM14px",
            "text": "14 Mar - 15 Mar, 2018",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "73%",
            "zIndex": 1
        }, controller.args[0], "lblEventDescDateText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEventDescDateText"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEventDescDateText"));
        flxEventDescDate.add(lblEventDescDateTitle, lblHyphen2, lblEventDescDateText);
        var flxEventDescLocation = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "28dp",
            "id": "flxEventDescLocation",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEventDescLocation"), extendConfig({}, controller.args[1], "flxEventDescLocation"), extendConfig({}, controller.args[2], "flxEventDescLocation"));
        flxEventDescLocation.setDefaultUnit(kony.flex.DP);
        var lblEventDescLocation = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblEventDescLocation",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblEventDescItem",
            "text": "Location",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "21%",
            "zIndex": 1
        }, controller.args[0], "lblEventDescLocation"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEventDescLocation"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEventDescLocation"));
        var lblHyphen3 = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblHyphen3",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknLblCharcolGrey",
            "text": " - ",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblHyphen3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHyphen3"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblHyphen3"));
        var lblEventDescLocationText = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "100%",
            "id": "lblEventDescLocationText",
            "isVisible": true,
            "left": "4dp",
            "skin": "sknlbl333333AM14px",
            "text": "Convocation Center, Hyderabad",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": "73%",
            "zIndex": 1
        }, controller.args[0], "lblEventDescLocationText"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblEventDescLocationText"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblEventDescLocationText"));
        flxEventDescLocation.add(lblEventDescLocation, lblHyphen3, lblEventDescLocationText);
        var flxScImageGallery = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "50dp",
            "horizontalScrollIndicator": true,
            "id": "flxScImageGallery",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
            "skin": "slFSbox",
            "top": "2dp",
            "verticalScrollIndicator": true,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxScImageGallery"), extendConfig({}, controller.args[1], "flxScImageGallery"), extendConfig({}, controller.args[2], "flxScImageGallery"));
        flxScImageGallery.setDefaultUnit(kony.flex.DP);
        var flxItem0 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxItem0",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknflxFFFBR1RC",
            "top": "0dp",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "flxItem0"), extendConfig({}, controller.args[1], "flxItem0"), extendConfig({}, controller.args[2], "flxItem0"));
        flxItem0.setDefaultUnit(kony.flex.DP);
        var img0 = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img0",
            "imageWhileDownloading": "eventske.png",
            "isVisible": true,
            "skin": "slImage",
            "src": "eventske.png",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "img0"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "img0"), extendConfig({}, controller.args[2], "img0"));
        flxItem0.add(img0);
        var flxItem1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxItem1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "sknflxFFFBR1RC",
            "top": "0dp",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "flxItem1"), extendConfig({}, controller.args[1], "flxItem1"), extendConfig({}, controller.args[2], "flxItem1"));
        flxItem1.setDefaultUnit(kony.flex.DP);
        var img1 = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "img1",
            "isVisible": true,
            "skin": "slImage",
            "src": "eventske.png",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "img1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "img1"), extendConfig({}, controller.args[2], "img1"));
        flxItem1.add(img1);
        flxScImageGallery.add(flxItem0, flxItem1);
        var lblSeparator2 = new kony.ui.Label(extendConfig({
            "height": "1px",
            "id": "lblSeparator2",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknlblsep1",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "2dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblSeparator2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSeparator2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSeparator2"));
        var flxEventEdit = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "32dp",
            "id": "flxEventEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEventEdit"), extendConfig({}, controller.args[1], "flxEventEdit"), extendConfig({}, controller.args[2], "flxEventEdit"));
        flxEventEdit.setDefaultUnit(kony.flex.DP);
        var btnRemove = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknbtnc3c3c3AM15px",
            "height": "100%",
            "id": "btnRemove",
            "isVisible": true,
            "left": "0dp",
            "onClick": controller.AS_Button_e873b0b9e6ee4f2e95d34b1fd1d69980,
            "skin": "sknbtnc3c3c3AM15px",
            "text": "Remove",
            "width": "70dp",
            "zIndex": 1
        }, controller.args[0], "btnRemove"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnRemove"), extendConfig({}, controller.args[2], "btnRemove"));
        var btnEdit = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknbtn4b88f1AM15px",
            "height": "100%",
            "id": "btnEdit",
            "isVisible": true,
            "onClick": controller.AS_Button_ae1ced44a04e45db98e67a006c9c9c2e,
            "right": "3dp",
            "skin": "sknbtn4b88f1AM15px",
            "text": "Edit",
            "top": "4dp",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "btnEdit"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEdit"), extendConfig({}, controller.args[2], "btnEdit"));
        flxEventEdit.add(btnRemove, btnEdit);
        flxEventDesc.add(lblEventTitle, lblSeparator1, flxCategory, flxEventDescDate, flxEventDescLocation, flxScImageGallery, lblSeparator2, flxEventEdit);
        event.add(flxBannerContainer, flxEventDesc);
        return event;
    }
})