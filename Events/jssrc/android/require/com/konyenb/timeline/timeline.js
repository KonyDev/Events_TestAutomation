define(function() {
    return function(controller) {
        var timeline = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "timeline",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "postShow": controller.AS_FlexContainer_jf56ff5781bf453cb8be381e324df6db,
            "skin": "sknflxf2f1f1100",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "timeline"), extendConfig({}, controller.args[1], "timeline"), extendConfig({}, controller.args[2], "timeline"));
        timeline.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label(extendConfig({
            "height": "6%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "5.00%",
            "skin": "sknlbl3f51b5AH145",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5%",
            "width": "95%",
            "zIndex": 1
        }, controller.args[0], "lblTitle"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitle"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblTitle"));
        var btnClose = new kony.ui.Button(extendConfig({
            "height": "18dp",
            "id": "btnClose",
            "isVisible": false,
            "left": "5.33%",
            "onClick": controller.AS_Button_e8511783358d433ea6e7134d952de286,
            "skin": "sknbtnImgcloseicon",
            "top": "3%",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "btnClose"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnClose"), extendConfig({}, controller.args[2], "btnClose"));
        var flexUpDown = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "5%",
            "id": "flexUpDown",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "isModalContainer": false,
            "right": "0%",
            "skin": "slFbox",
            "top": "2%",
            "width": "20%",
            "zIndex": 1
        }, controller.args[0], "flexUpDown"), extendConfig({}, controller.args[1], "flexUpDown"), extendConfig({}, controller.args[2], "flexUpDown"));
        flexUpDown.setDefaultUnit(kony.flex.DP);
        var flxUp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxUp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onTouchStart": controller.AS_FlexContainer_fada2523119d4d58afc350b2b6806b09,
            "skin": "slFbox",
            "top": "0%",
            "width": "50%",
            "zIndex": 6
        }, controller.args[0], "flxUp"), extendConfig({}, controller.args[1], "flxUp"), extendConfig({}, controller.args[2], "flxUp"));
        flxUp.setDefaultUnit(kony.flex.DP);
        var btnUp = new kony.ui.Button(extendConfig({
            "centerX": "70%",
            "centerY": "50.32%",
            "height": "13dp",
            "id": "btnUp",
            "isVisible": true,
            "left": "0.00%",
            "right": "0%",
            "skin": "btnupactive",
            "top": "0%",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "btnUp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnUp"), extendConfig({}, controller.args[2], "btnUp"));
        flxUp.add(btnUp);
        var flxDown = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDown",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "onTouchStart": controller.AS_FlexContainer_h200f6358f0b4a24b3527f2591da77fb,
            "skin": "slFbox",
            "top": "0%",
            "width": "50%",
            "zIndex": 6
        }, controller.args[0], "flxDown"), extendConfig({}, controller.args[1], "flxDown"), extendConfig({}, controller.args[2], "flxDown"));
        flxDown.setDefaultUnit(kony.flex.DP);
        var btnDown = new kony.ui.Button(extendConfig({
            "centerX": "30%",
            "centerY": "50%",
            "height": "13dp",
            "id": "btnDown",
            "isVisible": true,
            "left": "0.00%",
            "right": "0%",
            "skin": "btndowninactive",
            "top": "0%",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "btnDown"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDown"), extendConfig({}, controller.args[2], "btnDown"));
        flxDown.add(btnDown);
        flexUpDown.add(flxUp, flxDown);
        var flexSegTimeLineMain = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "87%",
            "id": "flexSegTimeLineMain",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknflexfff100BR1",
            "top": "13%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "flexSegTimeLineMain"), extendConfig({}, controller.args[1], "flexSegTimeLineMain"), extendConfig({}, controller.args[2], "flexSegTimeLineMain"));
        flexSegTimeLineMain.setDefaultUnit(kony.flex.DP);
        var lblVertcalLine = new kony.ui.Label(extendConfig({
            "height": "98%",
            "id": "lblVertcalLine",
            "isVisible": true,
            "left": "31%",
            "skin": "sknlbl333333Rto42",
            "text": "||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "7%",
            "width": "5px",
            "zIndex": 6
        }, controller.args[0], "lblVertcalLine"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblVertcalLine"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblVertcalLine"));
        var segTimeLine = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [{
                "btnDummy": "",
                "imgSub1": "",
                "imgSub2": "",
                "imgthumb1": "",
                "imgthumb2": "",
                "lblDate": "",
                "lblDesc": "",
                "lblDummy": "",
                "lblName": "",
                "lblNum": "",
                "lblRem": "",
                "lblSub1": "",
                "lblSub2": "",
                "lblhorStr": ""
            }],
            "groupCells": false,
            "height": "95%",
            "id": "segTimeLine",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_bfd0b9cccb994624beae1bf610275e73,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg",
            "rowSkin": "sknsegfff0",
            "rowTemplate": "flxMainSchedular",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "5%",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "btnDummy": "btnDummy",
                "flexContents": "flexContents",
                "flexImage1": "flexImage1",
                "flexImage2": "flexImage2",
                "flexMainThumbs": "flexMainThumbs",
                "flexRoundCorner": "flexRoundCorner",
                "flexTime": "flexTime",
                "flxMainSchedular": "flxMainSchedular",
                "flxSub1": "flxSub1",
                "flxSub2": "flxSub2",
                "imgSub1": "imgSub1",
                "imgSub2": "imgSub2",
                "imgthumb1": "imgthumb1",
                "imgthumb2": "imgthumb2",
                "lblDate": "lblDate",
                "lblDesc": "lblDesc",
                "lblDummy": "lblDummy",
                "lblName": "lblName",
                "lblNum": "lblNum",
                "lblRem": "lblRem",
                "lblSub1": "lblSub1",
                "lblSub2": "lblSub2",
                "lblhorStr": "lblhorStr"
            },
            "width": "100%",
            "zIndex": 6
        }, controller.args[0], "segTimeLine"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segTimeLine"), extendConfig({}, controller.args[2], "segTimeLine"));
        flexSegTimeLineMain.add(lblVertcalLine, segTimeLine);
        var FlexMainImageSet = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexMainImageSet",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0.00%",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_caed9c9f6e1d43409b7073edd5fa9c90,
            "skin": "sknflex000OP91",
            "top": "0.00%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "FlexMainImageSet"), extendConfig({}, controller.args[1], "FlexMainImageSet"), extendConfig({}, controller.args[2], "FlexMainImageSet"));
        FlexMainImageSet.setDefaultUnit(kony.flex.DP);
        var segImageSet = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "data": [{
                "imageStatus": "imagedrag.png"
            }, {
                "imageStatus": "imagedrag.png"
            }, {
                "imageStatus": "imagedrag.png"
            }],
            "groupCells": false,
            "height": "50%",
            "id": "segImageSet",
            "isVisible": true,
            "left": "0%",
            "needPageIndicator": false,
            "onSwipe": controller.AS_Segment_f68ae74da9f04189acaaff18e285b19f,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flexImageSet",
            "scrollingEvents": {},
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0%",
            "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
            "widgetDataMap": {
                "flexImageGesture": "flexImageGesture",
                "flexImageSet": "flexImageSet",
                "imageStatus": "imageStatus"
            },
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "segImageSet"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segImageSet"), extendConfig({}, controller.args[2], "segImageSet"));
        var lblNameDetail = new kony.ui.Label(extendConfig({
            "height": "4.54%",
            "id": "lblNameDetail",
            "isVisible": true,
            "left": "4.03%",
            "skin": "sknlblffffffRo100",
            "text": "- Vigneshwaran Karunanithi",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "76.02%",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "lblNameDetail"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNameDetail"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNameDetail"));
        var txtComments = new kony.ui.RichText(extendConfig({
            "height": "18%",
            "id": "txtComments",
            "isVisible": true,
            "left": "2.46%",
            "linkSkin": "defRichTextLink",
            "skin": "skntchtxtfffRO90",
            "text": "GoodExperiance",
            "top": "81.01%",
            "width": "95.29%",
            "zIndex": 1
        }, controller.args[0], "txtComments"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtComments"), extendConfig({}, controller.args[2], "txtComments"));
        var btnClose2 = new kony.ui.Button(extendConfig({
            "height": "18dp",
            "id": "btnClose2",
            "isVisible": true,
            "left": "90.97%",
            "onClick": controller.AS_Button_jd849cc0c27f429486a5152ba4bb2d0e,
            "skin": "sknbtnImgcloseicon",
            "top": "2.44%",
            "width": "17dp",
            "zIndex": 1
        }, controller.args[0], "btnClose2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnClose2"), extendConfig({}, controller.args[2], "btnClose2"));
        FlexMainImageSet.add(segImageSet, lblNameDetail, txtComments, btnClose2);
        var lblNoSessions = new kony.ui.Label(extendConfig({
            "centerX": "51%",
            "centerY": "50%",
            "id": "lblNoSessions",
            "isVisible": false,
            "left": "65dp",
            "skin": "sknlblNoevents",
            "text": "No Sessions Scheduled..",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "40dp",
            "width": "80%",
            "zIndex": 6
        }, controller.args[0], "lblNoSessions"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblNoSessions"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblNoSessions"));
        timeline.add(lblTitle, btnClose, flexUpDown, flexSegTimeLineMain, FlexMainImageSet, lblNoSessions);
        return timeline;
    }
})