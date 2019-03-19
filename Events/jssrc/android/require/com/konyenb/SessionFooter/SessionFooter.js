define(function() {
    return function(controller) {
        var SessionFooter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "10%",
            "id": "SessionFooter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "SessionFooter"), extendConfig({}, controller.args[1], "SessionFooter"), extendConfig({}, controller.args[2], "SessionFooter"));
        SessionFooter.setDefaultUnit(kony.flex.DP);
        var flexFooter = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "77.78%",
            "id": "flexFooter",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flexFooter"), extendConfig({}, controller.args[1], "flexFooter"), extendConfig({}, controller.args[2], "flexFooter"));
        flexFooter.setDefaultUnit(kony.flex.DP);
        var lblUnderLine = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "1px",
            "id": "lblUnderLine",
            "isVisible": true,
            "left": "78dp",
            "skin": "sknheaderlblLine",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "90%",
            "zIndex": 5
        }, controller.args[0], "lblUnderLine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUnderLine"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUnderLine"));
        var flexAddDelEdit = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flexAddDelEdit",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "20%",
            "width": "90%",
            "zIndex": 5
        }, controller.args[0], "flexAddDelEdit"), extendConfig({}, controller.args[1], "flexAddDelEdit"), extendConfig({}, controller.args[2], "flexAddDelEdit"));
        flexAddDelEdit.setDefaultUnit(kony.flex.DP);
        var btnAddSession = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnAB80",
            "height": "100%",
            "id": "btnAddSession",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_btnAddOnclick_j98c6a298dc7431394e0173fec192309,
            "skin": "sknBtnAB80",
            "text": "New Session",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, controller.args[0], "btnAddSession"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAddSession"), extendConfig({}, controller.args[2], "btnAddSession"));
        var btnEditSEssion = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnAB80",
            "height": "100%",
            "id": "btnEditSEssion",
            "isVisible": false,
            "left": "1%",
            "onClick": controller.AS_btnEditOnclick_ifa87cc38e9f47f994889f841a3fa585,
            "skin": "sknBtnAB80",
            "text": "Edit",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, controller.args[0], "btnEditSEssion"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEditSEssion"), extendConfig({}, controller.args[2], "btnEditSEssion"));
        var btnDelSession = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "focusSkin": "sknBtnAB80",
            "height": "100%",
            "id": "btnDelSession",
            "isVisible": false,
            "left": "1%",
            "onClick": controller.AS_btnDelOnclick_eb88280b121a4376ae1b36c24ab9afd1,
            "skin": "sknBtnAB80",
            "text": "Delete",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 5
        }, controller.args[0], "btnDelSession"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDelSession"), extendConfig({}, controller.args[2], "btnDelSession"));
        flexAddDelEdit.add(btnAddSession, btnEditSEssion, btnDelSession);
        flexFooter.add(lblUnderLine, flexAddDelEdit);
        SessionFooter.add(flexFooter);
        return SessionFooter;
    }
})