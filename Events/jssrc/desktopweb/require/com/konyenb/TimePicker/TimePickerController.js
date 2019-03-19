define('com/konyenb/TimePicker/userTimePickerController',[],function() {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._timeInterval = "30 Minutes";
            this.startTime = "";
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            //Reads the time interval and set to this._timeInterval
            defineSetter(this, "timeInterval", function(value) {
                this._timeInterval = value;
                kony.print("timeInterval is" + JSON.stringify(this._timeInterval));
            });
        },
        /**
         * @function setTimePicker
         * @description - this function will check the time interval and get time line list for the interval
         * this function will also set the time line list to the segment
         **/
        setTimePicker: function() {
            try {
                var timeList = [];
                switch (this._timeInterval) {
                    case "30 Minutes":
                        timeList = this.getTimeList(30);
                        break;
                    case "15 Minutes":
                        timeList = this.getTimeList(15);
                        break;
                    default:
                        kony.print("Invalid Case");
                }
                if (timeList.length > 0) {
                    this.view.segTimingList.widgetDataMap = {
                        "lblTime": "time"
                    };
                    this.view.segTimingList.setData(timeList);
                    this.view.segTimingList.selectedRowIndex = [0, 0];
                }
            } catch (error) {
                kony.print("Time Picker Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function getTimeList
         * @description - this function will create the timeline list  based on the given time inteval
         * @param {String -timeInterval} - time interval between two times
         * @return {array - timeList} - list of time
         **/
        getTimeList: function(timeInterval) {
            try {
                var timeList = [];
                var interval = 0;
                var hour = 0;
                var diff = 0;
                while (1) {
                    var timeJSON = {};
                    diff = interval - 60;
                    if (diff < 0) {
                        if (diff === -60) {
                            timeJSON.time = "00";
                        } else {
                            timeJSON.time = Math.abs(diff) < 10 ? "0" + Math.abs(diff) : Math.abs(diff);
                        }
                        timeJSON.time = hour < 10 ? "0" + hour + ":" + timeJSON.time : hour + ":" + timeJSON.time;
                    } else if (diff === 0) {
                        hour++;
                        if (hour < 24) {
                            interval = 0;
                            timeJSON.time = "00";
                            timeJSON.time = hour < 10 ? "0" + hour + ":" + timeJSON.time : hour + ":" + timeJSON.time;
                        } else {
                            return timeList;
                        }
                    }
                    if (this.startTime === "" || timeJSON.time >= this.startTime) timeList.push(timeJSON);
                    interval = interval + timeInterval;
                }
            } catch (error) {
                kony.print("Time Picker Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function onSelectionOfTimeSlot
         * @description - this function will set the selected time on the lblTime
         * this function calls the callback function on selection of time
         **/
        onSelectionOfTimeSlot: function() {
            try {
                this.view.lblTime.text = this.view.segTimingList.selectedRowItems[0].time;
                this.setTimeListUI();
                if (this.onSelection !== null && this.onSelection !== undefined) {
                    this.onSelection(this.getSelectedTime(), this.getNextSlot());
                }
            } catch (error) {
                kony.print("Time Picker Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function setStartTime
         * @description - this function will set the start time to the controller variable
         **/
        setStartTime: function(time) {
            try {
                this.startTime = time;
            } catch (error) {
                kony.print("Time Picker Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function setTimeListUI
         * @description - this function will set the time line UI based on selection of timeline
         **/
        setTimeListUI: function() {
            try {
                if (this.view.segTimingList.height == "80%") {
                    this.view.height = "5%";
                    this.view.flexTimePicker.height = "100%";
                    this.view.segTimingList.height = "0%";
                } else {
                    this.view.height = "30%";
                    this.view.flexTimePicker.height = "16.5%";
                    this.view.segTimingList.height = "80%";
                }
                this.view.forceLayout();
            } catch (error) {
                kony.print("Time Picker Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function getSelectedTime
         * @description - this function will return  the selected time
         **/
        getSelectedTime: function() {
            try {
                var selectedTime = this.view.lblTime.text;
                return selectedTime;
            } catch (error) {
                kony.print("Time Picker Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function getNextSlot
         * @description - this function will return  next time slot after selected time
         **/
        getNextSlot: function() {
            try {
                var nextSlot = this.view.segTimingList.data[this.view.segTimingList.selectedRowIndex[1] + 1].time;
                return nextSlot;
            } catch (error) {
                kony.print("Time Picker Controller" + JSON.stringify(error));
            }
        }
    };
});
define('com/konyenb/TimePicker/TimePickerControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for segTimingList **/
    AS_Segment_h12975ebb8e04648afd904a7ab1af93e: function AS_Segment_h12975ebb8e04648afd904a7ab1af93e(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSelectionOfTimeSlot();
    },
    /** onClick defined for flexTimePicker **/
    AS_FlexContainer_f77703059019443c9b2ba841b14ce64f: function AS_FlexContainer_f77703059019443c9b2ba841b14ce64f(eventobject) {
        var self = this;
        this.setTimeListUI();
    },
    /** postShow defined for TimePicker **/
    AS_FlexContainer_ebdfac7a238d4155960ebea12303ebf9: function AS_FlexContainer_ebdfac7a238d4155960ebea12303ebf9(eventobject) {
        var self = this;
        this.setTimePicker();
    }
});
define('com/konyenb/TimePicker/TimePickerController',["com/konyenb/TimePicker/userTimePickerController", "com/konyenb/TimePicker/TimePickerControllerActions"], function() {
    var controller = require("com/konyenb/TimePicker/userTimePickerController");
    var actions = require("com/konyenb/TimePicker/TimePickerControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "TimeValue", function(val) {
            this.view.lblTime.text = val;
        });
        defineGetter(this, "TimeValue", function() {
            return this.view.lblTime.text;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
