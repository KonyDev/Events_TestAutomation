define(function() {
    return function(controller) {
        var sessionTemp = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "sessionTemp"), extendConfig({}, controller.args[1], "sessionTemp"), extendConfig({}, controller.args[2], "sessionTemp"));
        sessionTemp.setDefaultUnit(kony.flex.DP);
        var flexMainSession = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexMainSession"), extendConfig({}, controller.args[1], "flexMainSession"), extendConfig({}, controller.args[2], "flexMainSession"));
        flexMainSession.setDefaultUnit(kony.flex.DP);
        var flexBasicInfoTitl2 = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexBasicInfoTitl2"), extendConfig({}, controller.args[1], "flexBasicInfoTitl2"), extendConfig({}, controller.args[2], "flexBasicInfoTitl2"));
        flexBasicInfoTitl2.setDefaultUnit(kony.flex.DP);
        var lblBasicInfo2 = new kony.ui.Label(extendConfig({
            "height": "90%",
            "id": "lblBasicInfo2",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl333333AM130",
            "text": "Event Sessions",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblBasicInfo2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBasicInfo2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblBasicInfo2"));
        var lblUnderLinw2 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "3%",
            "id": "lblUnderLinw2",
            "isVisible": true,
            "skin": "sknheaderlblLine",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "lblUnderLinw2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUnderLinw2"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUnderLinw2"));
        flexBasicInfoTitl2.add(lblBasicInfo2, lblUnderLinw2);
        var txtSessionName = new kony.ui.TextBox2(extendConfig({
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
        }, controller.args[0], "txtSessionName"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtSessionName"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "defTextBoxPlaceholder",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSessionName"));
        var txtSessionSDesc = new kony.ui.TextArea2(extendConfig({
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
        }, controller.args[0], "txtSessionSDesc"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [2, 2, 2, 2],
            "paddingInPixel": false
        }, controller.args[1], "txtSessionSDesc"), extendConfig({
            "placeholderSkin": "defTextAreaPlaceholder"
        }, controller.args[2], "txtSessionSDesc"));
        var txtSesionLDesc = new kony.ui.TextArea2(extendConfig({
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
        }, controller.args[0], "txtSesionLDesc"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [2, 2, 2, 2],
            "paddingInPixel": false
        }, controller.args[1], "txtSesionLDesc"), extendConfig({
            "placeholderSkin": "defTextAreaPlaceholder"
        }, controller.args[2], "txtSesionLDesc"));
        var flexSessionDate = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexSessionDate"), extendConfig({}, controller.args[1], "flexSessionDate"), extendConfig({}, controller.args[2], "flexSessionDate"));
        flexSessionDate.setDefaultUnit(kony.flex.DP);
        var flexSessionStartDate = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexSessionStartDate"), extendConfig({}, controller.args[1], "flexSessionStartDate"), extendConfig({}, controller.args[2], "flexSessionStartDate"));
        flexSessionStartDate.setDefaultUnit(kony.flex.DP);
        var lblSessionStartDate = new kony.ui.Label(extendConfig({
            "height": "35%",
            "id": "lblSessionStartDate",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl333AM120",
            "text": "Start Date",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblSessionStartDate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSessionStartDate"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSessionStartDate"));
        var flexSessionSelecStarttDate = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexSessionSelecStarttDate"), extendConfig({}, controller.args[1], "flexSessionSelecStarttDate"), extendConfig({}, controller.args[2], "flexSessionSelecStarttDate"));
        flexSessionSelecStarttDate.setDefaultUnit(kony.flex.DP);
        var calSessionStartDate = new kony.ui.Calendar(extendConfig({
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
        }, controller.args[0], "calSessionStartDate"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "calSessionStartDate"), extendConfig({}, controller.args[2], "calSessionStartDate"));
        flexSessionSelecStarttDate.add(calSessionStartDate);
        flexSessionStartDate.add(lblSessionStartDate, flexSessionSelecStarttDate);
        var flexSessionStartTime = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexSessionStartTime"), extendConfig({}, controller.args[1], "flexSessionStartTime"), extendConfig({}, controller.args[2], "flexSessionStartTime"));
        flexSessionStartTime.setDefaultUnit(kony.flex.DP);
        var lblSessionStartTime = new kony.ui.Label(extendConfig({
            "height": "35%",
            "id": "lblSessionStartTime",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl333AM120",
            "text": "Start Time",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblSessionStartTime"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSessionStartTime"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSessionStartTime"));
        var flexSessionSelectStartTime = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexSessionSelectStartTime"), extendConfig({}, controller.args[1], "flexSessionSelectStartTime"), extendConfig({}, controller.args[2], "flexSessionSelectStartTime"));
        flexSessionSelectStartTime.setDefaultUnit(kony.flex.DP);
        var txtSessionStartTime = new kony.ui.TextBox2(extendConfig({
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
        }, controller.args[0], "txtSessionStartTime"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [5, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtSessionStartTime"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "defTextBoxPlaceholder",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSessionStartTime"));
        flexSessionSelectStartTime.add(txtSessionStartTime);
        flexSessionStartTime.add(lblSessionStartTime, flexSessionSelectStartTime);
        var flexSessionEndTime = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexSessionEndTime"), extendConfig({}, controller.args[1], "flexSessionEndTime"), extendConfig({}, controller.args[2], "flexSessionEndTime"));
        flexSessionEndTime.setDefaultUnit(kony.flex.DP);
        var lblSessionEndTime = new kony.ui.Label(extendConfig({
            "height": "35%",
            "id": "lblSessionEndTime",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl333AM120",
            "text": "End Time",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblSessionEndTime"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblSessionEndTime"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblSessionEndTime"));
        var FlexSelectSessionEndTime = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "FlexSelectSessionEndTime"), extendConfig({}, controller.args[1], "FlexSelectSessionEndTime"), extendConfig({}, controller.args[2], "FlexSelectSessionEndTime"));
        FlexSelectSessionEndTime.setDefaultUnit(kony.flex.DP);
        var txtSessionEndTime = new kony.ui.TextBox2(extendConfig({
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
        }, controller.args[0], "txtSessionEndTime"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtSessionEndTime"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "defTextBoxPlaceholder",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "txtSessionEndTime"));
        FlexSelectSessionEndTime.add(txtSessionEndTime);
        flexSessionEndTime.add(lblSessionEndTime, FlexSelectSessionEndTime);
        flexSessionDate.add(flexSessionStartDate, flexSessionStartTime, flexSessionEndTime);
        flexMainSession.add(flexBasicInfoTitl2, txtSessionName, txtSessionSDesc, txtSesionLDesc, flexSessionDate);
        var lblStripVerticalSessionSep = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "80%",
            "id": "lblStripVerticalSessionSep",
            "isVisible": true,
            "left": "0%",
            "skin": "sknheaderlblLine",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "1px",
            "zIndex": 5
        }, controller.args[0], "lblStripVerticalSessionSep"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblStripVerticalSessionSep"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblStripVerticalSessionSep"));
        var flexSessionSpeakerDetails = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexSessionSpeakerDetails"), extendConfig({}, controller.args[1], "flexSessionSpeakerDetails"), extendConfig({}, controller.args[2], "flexSessionSpeakerDetails"));
        flexSessionSpeakerDetails.setDefaultUnit(kony.flex.DP);
        var flexAddSpeakerDetailsTitle = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "flexAddSpeakerDetailsTitle"), extendConfig({}, controller.args[1], "flexAddSpeakerDetailsTitle"), extendConfig({}, controller.args[2], "flexAddSpeakerDetailsTitle"));
        flexAddSpeakerDetailsTitle.setDefaultUnit(kony.flex.DP);
        var lblAddSpeakerDetailsTitle = new kony.ui.Label(extendConfig({
            "height": "90%",
            "id": "lblAddSpeakerDetailsTitle",
            "isVisible": true,
            "left": "0%",
            "skin": "sknlbl333333AM130",
            "text": "Speaker Details",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblAddSpeakerDetailsTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblAddSpeakerDetailsTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblAddSpeakerDetailsTitle"));
        var lblUnderAddSpeakerDetailsTitle = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "height": "3%",
            "id": "lblUnderAddSpeakerDetailsTitle",
            "isVisible": true,
            "skin": "sknheaderlblLine",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0%",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "lblUnderAddSpeakerDetailsTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUnderAddSpeakerDetailsTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblUnderAddSpeakerDetailsTitle"));
        flexAddSpeakerDetailsTitle.add(lblAddSpeakerDetailsTitle, lblUnderAddSpeakerDetailsTitle);
        var btnCreateNewSpeaker = new kony.ui.FlexContainer(extendConfig({
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
        }, controller.args[0], "btnCreateNewSpeaker"), extendConfig({}, controller.args[1], "btnCreateNewSpeaker"), extendConfig({}, controller.args[2], "btnCreateNewSpeaker"));
        btnCreateNewSpeaker.setDefaultUnit(kony.flex.DP);
        var imgAddNewSpeaker = new kony.ui.Image2(extendConfig({
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
        }, controller.args[0], "imgAddNewSpeaker"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgAddNewSpeaker"), extendConfig({}, controller.args[2], "imgAddNewSpeaker"));
        var btnAddNewSpeakerIni = new kony.ui.Button(extendConfig({
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
        }, controller.args[0], "btnAddNewSpeakerIni"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnAddNewSpeakerIni"), extendConfig({}, controller.args[2], "btnAddNewSpeakerIni"));
        btnCreateNewSpeaker.add(imgAddNewSpeaker, btnAddNewSpeakerIni);
        var segSessionSpeakerDetails = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
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
            "scrollingEvents": {},
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
        }, controller.args[0], "segSessionSpeakerDetails"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segSessionSpeakerDetails"), extendConfig({}, controller.args[2], "segSessionSpeakerDetails"));
        flexSessionSpeakerDetails.add(flexAddSpeakerDetailsTitle, btnCreateNewSpeaker, segSessionSpeakerDetails);
        sessionTemp.add(flexMainSession, lblStripVerticalSessionSep, flexSessionSpeakerDetails);
        return sessionTemp;
    }
})