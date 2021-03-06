define(function() {
    return function(controller) {
        var boxfileupload = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "isMaster": true,
            "height": "300dp",
            "id": "boxfileupload",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxFileUpload",
            "top": "0dp",
            "width": "300dp"
        }, controller.args[0], "boxfileupload"), extendConfig({}, controller.args[1], "boxfileupload"), extendConfig({}, controller.args[2], "boxfileupload"));
        boxfileupload.setDefaultUnit(kony.flex.DP);
        var btnSelectFile = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "defBtnFocus",
            "height": "50dp",
            "id": "btnSelectFile",
            "isVisible": true,
            "left": "62dp",
            "onClick": controller.AS_Button_gd70cf67cf5746c08aab3a9cfe2564e6,
            "skin": "defBtnNormal",
            "text": "Select file",
            "top": "88dp",
            "width": "260dp",
            "zIndex": 1
        }, controller.args[0], "btnSelectFile"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSelectFile"), extendConfig({}, controller.args[2], "btnSelectFile"));
        var btnUpload = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "defBtnFocus",
            "height": "50dp",
            "id": "btnUpload",
            "isVisible": true,
            "onClick": controller.AS_Button_db489fe3076e48b18181594034fd9a5e,
            "skin": "defBtnNormal",
            "text": "Upload file",
            "top": "217dp",
            "width": "260dp",
            "zIndex": 1
        }, controller.args[0], "btnUpload"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnUpload"), extendConfig({}, controller.args[2], "btnUpload"));
        boxfileupload.add(btnSelectFile, btnUpload);
        return boxfileupload;
    }
})