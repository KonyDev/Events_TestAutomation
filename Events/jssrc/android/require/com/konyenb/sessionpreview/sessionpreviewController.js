define("com/konyenb/sessionpreview/usersessionpreviewController", function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {},
        initGettersSetters: function() {},
        checkLayoutAndChange: function() {
            var segHeight = this.view.segSessionandSpeaker.frame["height"];
            this.view.flexDateandStrip.height = segHeight + "dp";
        },
        setData: function(data) {
            this.view.segSessionandSpeaker.doLayout = this.checkLayoutAndChange;
            var processedDataForComponent = this.getProcessedDataForComponent(data);
            this.setDataToSegment(processedDataForComponent.segmentData);
            this.setCurrentDay(processedDataForComponent.currentDay);
        },
        getProcessedDataForComponent: function(data) {
            var sessionandSpeakerDataForSeg = [];
            for (var i = 0; i < data.length; i++) {
                var sessionDataForHeader = {};
                var speakerDataForSection = [];
                if (i !== 0) {
                    sessionDataForHeader.horizontalLine = "dummy";
                }
                sessionDataForHeader.session_name = data[i].session_name;
                sessionDataForHeader.dateRange = data[i].Day + "," + data[i].start_time + "-" + data[i].end_time;
                if (data[i].speakerDet !== undefined && data[i].speakerDet.length) {
                    for (var j = 0; j < data[i].speakerDet.length; j++) {
                        data[i].speakerDet[j].profile = "profile.png";
                        if (data[i].speakerDet[j].linkedin_link !== "") {
                            data[i].speakerDet[j].linkedin_link = {
                                "isVisible": true,
                                "text": data[i].speakerDet[j].linkedin_link
                            };
                        } else {
                            data[i].speakerDet[j].linkedin_link = {
                                "isVisible": false,
                                "text": data[i].speakerDet[j].linkedin_link
                            };
                        }
                        speakerDataForSection.push(data[i].speakerDet[j]);
                    }
                } else {
                    speakerDataForSection = [];
                }
                sessionandSpeakerDataForSeg.push([sessionDataForHeader, speakerDataForSection]);
            }
            var processedDataForComp = {};
            var date = data[0].date > 10 ? data[0].date : "0" + data[0].date;
            processedDataForComp.currentDay = date + " " + data[0].month;
            processedDataForComp.segmentData = sessionandSpeakerDataForSeg;
            return processedDataForComp;
        },
        setDataToSegment: function(data) {
            this.view.segSessionandSpeaker.removeAll();
            this.view.segSessionandSpeaker.widgetDataMap = {
                "lblEventAddress": "session_name",
                "lblEventDateTime": "dateRange",
                "lblHorizontalLine": "horizontalLine",
                "lblDesignation": "designation",
                "lblLinkedIn": "linkedin_link",
                "imgSpeaker": "profile",
                "lblSpeakerName": "name"
            };
            this.view.segSessionandSpeaker.setData(data);
        },
        setCurrentDay: function(date) {
            this.view.lblDateMonth.text = date;
        }
    };
});
define("com/konyenb/sessionpreview/sessionpreviewControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** preShow defined for sessionpreview **/
    AS_FlexContainer_daaf8378dc624fb5ba8f274ecdc698dd: function AS_FlexContainer_daaf8378dc624fb5ba8f274ecdc698dd(eventobject) {
        var self = this;
        this.setData();
    }
});
define("com/konyenb/sessionpreview/sessionpreviewController", ["com/konyenb/sessionpreview/usersessionpreviewController", "com/konyenb/sessionpreview/sessionpreviewControllerActions"], function() {
    var controller = require("com/konyenb/sessionpreview/usersessionpreviewController");
    var actions = require("com/konyenb/sessionpreview/sessionpreviewControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
