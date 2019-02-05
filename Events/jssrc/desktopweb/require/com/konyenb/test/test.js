define(function() {
    return function(controller) {
        var test = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "isMaster": true,
            "id": "test",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        test.setDefaultUnit(kony.flex.DP);
        var Button0aa7120ddd0094b = new kony.ui.Button({
            "focusSkin": "defBtnFocus",
            "id": "Button0aa7120ddd0094b",
            "isVisible": true,
            "left": "50dp",
            "skin": "defBtnNormal",
            "text": "Button",
            "top": "80dp",
            "width": "260dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlexContainer0f796f569dc5f4d = new kony.ui.FlexContainer({
            "clipBounds": true,
            "height": "220dp",
            "id": "FlexContainer0f796f569dc5f4d",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "311dp",
            "skin": "slFbox",
            "top": "48dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0f796f569dc5f4d.setDefaultUnit(kony.flex.DP);
        FlexContainer0f796f569dc5f4d.add();
        test.add(Button0aa7120ddd0094b, FlexContainer0f796f569dc5f4d);
        return test;
    }
})