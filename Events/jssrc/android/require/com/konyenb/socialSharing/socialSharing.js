define(function() {
    return function(controller) {
        var socialSharing = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "isMaster": true,
            "height": "50dp",
            "id": "socialSharing",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "width": "50dp"
        }, controller.args[0], "socialSharing"), extendConfig({}, controller.args[1], "socialSharing"), extendConfig({}, controller.args[2], "socialSharing"));
        socialSharing.setDefaultUnit(kony.flex.DP);
        var imgShare = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgShare",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_f234df138ac14cf8832b2b4b4358ec0e,
            "src": "shareicon.png",
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "imgShare"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgShare"), extendConfig({}, controller.args[2], "imgShare"));
        socialSharing.add(imgShare);
        return socialSharing;
    }
})