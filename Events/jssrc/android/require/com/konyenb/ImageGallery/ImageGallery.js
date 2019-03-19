define(function() {
    return function(controller) {
        var ImageGallery = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "ImageGallery",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "postShow": controller.AS_FlexContainer_ibbcc442aaa54ccab12d0a2fbba26387,
            "skin": "sknCompBG00080",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "ImageGallery"), extendConfig({}, controller.args[1], "ImageGallery"), extendConfig({}, controller.args[2], "ImageGallery"));
        ImageGallery.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": false,
            "centerX": "50%",
            "centerY": "45%",
            "clipBounds": true,
            "enableScrolling": true,
            "height": "85%",
            "horizontalScrollIndicator": false,
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_BOTH,
            "skin": "slFSbox",
            "verticalScrollIndicator": false,
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxImage"), extendConfig({}, controller.args[1], "flxImage"), extendConfig({}, controller.args[2], "flxImage"));
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgEvent = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "id": "imgEvent",
            "imageWhenFailed": "eventske_1.png",
            "imageWhileDownloading": "eventske_1.png",
            "isVisible": true,
            "left": "0dp",
            "skin": "slImage",
            "src": "eventske_1.png",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "imgEvent"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgEvent"), extendConfig({}, controller.args[2], "imgEvent"));
        flxImage.add(imgEvent);
        var flxScThumbImage = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "8dp",
            "bounces": true,
            "centerX": "50%",
            "clipBounds": true,
            "enableScrolling": true,
            "height": "80dp",
            "horizontalScrollIndicator": true,
            "id": "flxScThumbImage",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "maxWidth": "100%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_HORIZONTAL,
            "skin": "slFSbox",
            "verticalScrollIndicator": false,
            "width": "98%",
            "zIndex": 10
        }, controller.args[0], "flxScThumbImage"), extendConfig({}, controller.args[1], "flxScThumbImage"), extendConfig({}, controller.args[2], "flxScThumbImage"));
        flxScThumbImage.setDefaultUnit(kony.flex.DP);
        var flxItemTest = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80dp",
            "id": "flxItemTest",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "5dp",
            "isModalContainer": false,
            "skin": "sknFlxThumbBG",
            "width": "80dp",
            "zIndex": 1
        }, controller.args[0], "flxItemTest"), extendConfig({}, controller.args[1], "flxItemTest"), extendConfig({}, controller.args[2], "flxItemTest"));
        flxItemTest.setDefaultUnit(kony.flex.DP);
        var imgThumbTest = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgThumbTest",
            "imageWhenFailed": "eventske_1.png",
            "imageWhileDownloading": "eventske_1.png",
            "isVisible": true,
            "skin": "slImage",
            "src": "philantrophy_1.png",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgThumbTest"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgThumbTest"), extendConfig({}, controller.args[2], "imgThumbTest"));
        flxItemTest.add(imgThumbTest);
        flxScThumbImage.add(flxItemTest);
        ImageGallery.add(flxImage, flxScThumbImage);
        return ImageGallery;
    }
})