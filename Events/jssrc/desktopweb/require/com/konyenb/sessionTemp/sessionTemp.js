define(function() {
    return function(controller) {
        var sessionTemp = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "sessionTemp",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        sessionTemp.setDefaultUnit(kony.flex.DP);
        var flexMainSession = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexMainSession",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0.00%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0.00%",
            "width": "49%",
            "zIndex": 1
        }, {}, {});
        flexMainSession.setDefaultUnit(kony.flex.DP);
        var flexBasicInfoTitl2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10%",
            "id": "flexBasicInfoTitl2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": "90%",
            "zIndex": 2
        }, {}, {});
        flexBasicInfoTitl2.setDefaultUnit(kony.flex.DP);
        var lblBasicInfo2 = new kony.ui.Label({
            "height": "90%",
            "id": "lblBasicInfo2",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl333333AM130",
            "text": "Event Sessions",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblUnderLinw2 = new kony.ui.Label({
            "centerX": "50%",
            "height": "3%",
            "id": "lblUnderLinw2",
            "isVisible": true,
            "skin": "sknheaderlblLine",
            "top": "0%",
            "width": "100%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexBasicInfoTitl2.add(lblBasicInfo2, lblUnderLinw2);
        var txtSessionName = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "skntxtnormal",
            "height": "8%",
            "id": "txtSessionName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "placeholder": "Session Name",
            "secureTextEntry": false,
            "skin": "skntxtnormal",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "14%",
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
        var txtSessionSDesc = new kony.ui.TextArea2({
            "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
            "centerX": "50.00%",
            "focusSkin": "skntxt343e48AB100",
            "height": "11.67%",
            "id": "txtSessionSDesc",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
            "left": "8dp",
            "numberOfVisibleLines": 3,
            "placeholder": "Short Description",
            "skin": "skntxt343e48AB100",
            "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
            "top": "45.56%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [2, 2, 2, 2],
            "paddingInPixel": false
        }, {
            "autoCorrect": false,
            "placeholderSkin": "defTextAreaPlaceholder"
        });
        var txtSesionLDesc = new kony.ui.TextArea2({
            "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "skntxt343e48AB100",
            "height": "25.00%",
            "id": "txtSesionLDesc",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
            "left": "8dp",
            "numberOfVisibleLines": 3,
            "placeholder": "Long Description",
            "skin": "skntxt343e48AB100",
            "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
            "top": "62%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [2, 2, 2, 2],
            "paddingInPixel": false
        }, {
            "autoCorrect": false,
            "placeholderSkin": "defTextAreaPlaceholder"
        });
        var flexSessionDate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50.14%",
            "clipBounds": true,
            "height": "18%",
            "id": "flexSessionDate",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "1%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "24%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flexSessionDate.setDefaultUnit(kony.flex.DP);
        var flexSessionStartDate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexSessionStartDate",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "40%",
            "zIndex": 1
        }, {}, {});
        flexSessionStartDate.setDefaultUnit(kony.flex.DP);
        var lblSessionStartDate = new kony.ui.Label({
            "height": "35%",
            "id": "lblSessionStartDate",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl333AM120",
            "text": "Start Date",
            "top": "10%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexSessionSelecStarttDate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45%",
            "id": "flexSessionSelecStarttDate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flexSessionSelecStarttDate.setDefaultUnit(kony.flex.DP);
        var calSessionStartDate = new kony.ui.Calendar({
            "calendarIcon": "calender.png",
            "centerX": "50%",
            "centerY": "50%",
            "dateFormat": "yyyy/MM/dd",
            "height": "100%",
            "id": "calSessionStartDate",
            "isVisible": true,
            "left": "0%",
            "onSelection": controller.AS_Calendar_fb57ad91230144619dda879dd81dd82b,
            "placeholder": "Select Date",
            "skin": "skncalNormal",
            "top": "0%",
            "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "noOfMonths": 1
        });
        flexSessionSelecStarttDate.add(calSessionStartDate);
        flexSessionStartDate.add(lblSessionStartDate, flexSessionSelecStarttDate);
        var flexSessionStartTime = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexSessionStartTime",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        flexSessionStartTime.setDefaultUnit(kony.flex.DP);
        var lblSessionStartTime = new kony.ui.Label({
            "height": "35%",
            "id": "lblSessionStartTime",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl333AM120",
            "text": "Start Time",
            "top": "10%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexSessionSelectStartTime = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45%",
            "id": "flexSessionSelectStartTime",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        flexSessionSelectStartTime.setDefaultUnit(kony.flex.DP);
        var txtSessionStartTime = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "height": "98%",
            "id": "txtSessionStartTime",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "onTextChange": controller.AS_TextField_c7dde1660bab4412aa2e3da97b8cf4e5,
            "placeholder": "Start Time",
            "secureTextEntry": false,
            "skin": "skntxtnormal",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "98%",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoCorrect": false,
            "placeholderSkin": "defTextBoxPlaceholder"
        });
        flexSessionSelectStartTime.add(txtSessionStartTime);
        flexSessionStartTime.add(lblSessionStartTime, flexSessionSelectStartTime);
        var flexSessionEndTime = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexSessionEndTime",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "2%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        flexSessionEndTime.setDefaultUnit(kony.flex.DP);
        var lblSessionEndTime = new kony.ui.Label({
            "height": "35%",
            "id": "lblSessionEndTime",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl333AM120",
            "text": "End Time",
            "top": "10%",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlexSelectSessionEndTime = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45%",
            "id": "FlexSelectSessionEndTime",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        FlexSelectSessionEndTime.setDefaultUnit(kony.flex.DP);
        var txtSessionEndTime = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "height": "98%",
            "id": "txtSessionEndTime",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0%",
            "onTextChange": controller.AS_TextField_f37f83e3ec68420086885d7aaf301dc9,
            "placeholder": " End Time",
            "secureTextEntry": false,
            "skin": "skntxtnormal",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0%",
            "width": "98%",
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
        FlexSelectSessionEndTime.add(txtSessionEndTime);
        flexSessionEndTime.add(lblSessionEndTime, FlexSelectSessionEndTime);
        flexSessionDate.add(flexSessionStartDate, flexSessionStartTime, flexSessionEndTime);
        flexMainSession.add(flexBasicInfoTitl2, txtSessionName, txtSessionSDesc, txtSesionLDesc, flexSessionDate);
        var lblStripVerticalSessionSep = new kony.ui.Label({
            "centerY": "50%",
            "height": "80%",
            "id": "lblStripVerticalSessionSep",
            "isVisible": true,
            "left": "0%",
            "skin": "sknheaderlblLine",
            "top": "0%",
            "width": "1px",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flexSessionSpeakerDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flexSessionSpeakerDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0%",
            "width": "49.50%",
            "zIndex": 5
        }, {}, {});
        flexSessionSpeakerDetails.setDefaultUnit(kony.flex.DP);
        var flexAddSpeakerDetailsTitle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "10%",
            "id": "flexAddSpeakerDetailsTitle",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "1%",
            "width": "90%",
            "zIndex": 2
        }, {}, {});
        flexAddSpeakerDetailsTitle.setDefaultUnit(kony.flex.DP);
        var lblAddSpeakerDetailsTitle = new kony.ui.Label({
            "height": "90%",
            "id": "lblAddSpeakerDetailsTitle",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl333333AM130",
            "text": "Speaker Details",
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblUnderAddSpeakerDetailsTitle = new kony.ui.Label({
            "centerX": "50%",
            "height": "3%",
            "id": "lblUnderAddSpeakerDetailsTitle",
            "isVisible": true,
            "skin": "sknheaderlblLine",
            "top": "0%",
            "width": "100%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexAddSpeakerDetailsTitle.add(lblAddSpeakerDetailsTitle, lblUnderAddSpeakerDetailsTitle);
        var btnCreateNewSpeaker = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "4%",
            "id": "btnCreateNewSpeaker",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "5%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_eb09808c6760487f8a96f25b1a582ec5,
            "skin": "slFbox",
            "top": "1%",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        btnCreateNewSpeaker.setDefaultUnit(kony.flex.DP);
        var imgAddNewSpeaker = new kony.ui.Image2({
            "centerY": "50%",
            "height": "100%",
            "id": "imgAddNewSpeaker",
            "isVisible": true,
            "left": "0%",
            "skin": "slImage",
            "src": "addspeaker.png",
            "top": "0%",
            "width": "10%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnAddNewSpeakerIni = new kony.ui.Button({
            "centerY": "50%",
            "height": "80%",
            "id": "btnAddNewSpeakerIni",
            "isVisible": true,
            "left": "3%",
            "skin": "sknbtn00a0ddAL80",
            "text": "Add New Speaker",
            "top": "0%",
            "width": "90%",
            "zIndex": 5
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        btnCreateNewSpeaker.add(imgAddNewSpeaker, btnAddNewSpeakerIni);
        var segSessionSpeakerDetails = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "ImgDel": "removespeaker.png",
                "imgAdd": "addspeaker.png",
                "lblStripSessionSpeaker": "test",
                "txtSpeakerDesg": {
                    "placeholder": "Designation",
                    "text": ""
                },
                "txtSpeakerLkProfile": {
                    "placeholder": "Linked Public Profile Link",
                    "text": ""
                },
                "txtSpeakerName": {
                    "placeholder": "Name",
                    "text": ""
                }
            }],
            "groupCells": false,
            "height": "78%",
            "id": "segSessionSpeakerDetails",
            "isVisible": true,
            "left": "5.00%",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot_2.png",
            "pageOnDotImage": "pageondot_2.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "sknsegfff0",
            "rowTemplate": "flexTempSessionSpeakerMain",
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "f2f1f164",
            "separatorRequired": true,
            "separatorThickness": 20,
            "showScrollbars": false,
            "top": "3%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "ImgDel": "ImgDel",
                "flexAdd": "flexAdd",
                "flexAddAndDel": "flexAddAndDel",
                "flexDel": "flexDel",
                "flexTempSessionSpeakerMain": "flexTempSessionSpeakerMain",
                "flexTempSpeakerDetails": "flexTempSpeakerDetails",
                "imgAdd": "imgAdd",
                "lblStripSessionSpeaker": "lblStripSessionSpeaker",
                "txtSpeakerDesg": "txtSpeakerDesg",
                "txtSpeakerLkProfile": "txtSpeakerLkProfile",
                "txtSpeakerName": "txtSpeakerName"
            },
            "width": "95%",
            "zIndex": 2
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flexSessionSpeakerDetails.add(flexAddSpeakerDetailsTitle, btnCreateNewSpeaker, segSessionSpeakerDetails);
        sessionTemp.add(flexMainSession, lblStripVerticalSessionSep, flexSessionSpeakerDetails);
        return sessionTemp;
    }
})