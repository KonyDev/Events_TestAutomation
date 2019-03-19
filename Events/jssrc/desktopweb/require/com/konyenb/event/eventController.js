define('com/konyenb/event/konyLogger',[],function() {
    /**
     * @module KonyLogger v0.2
     * @author AyyappaSwamy.Thatavarthy / Praharshita.Krishna
     * @category functionality
     * @description This module implements the KonyLogger class
     * KonyLogger provides the functionality of 6 logging levels viz.,
     * 1.TRACE	2.DEBUG	 3.INFO  4.WARN  5.ERROR 6.SILENT
     * It also supports capturing events viz.,
     * DEFAULT, FUNCTION_ENTRY, FUNCTION_EXIT, EXCEPTION, SUCCESS_CALLBACK, ERROR_CALLBACK, SERVICE_CALL, DATA_STORE
     * 2017 Kony Inc. 
     */
    /**
     * @member of  KonyLogger.js
     * @function KonyLogger
     * @param method - The function to be called to log the given message. 
     * When no parameter is passed, kony.print is called by default.
     * @returns an instance of KonyLogger class.
     * @description - This is the constructor for KonyLogger. 
     * This method initializes the instance created.
     **/
    var KonyLogger = function() {
        this.printMethod = kony.print;
        this.reuseableComponentName = arguments[0] || "appContext";
        var loggerGenerator = function() {
            this.trace = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "TRACE", message, event);
            };
            this.debug = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "DEBUG", message, event);
            };
            this.info = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "INFO", message, event);
            };
            this.warn = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "WARN", message, event);
            };
            this.error = function(message, event) {
                var caller;
                try {
                    caller = arguments.callee.caller.name;
                } catch (err) {
                    caller = "Global";
                }
                this.logMethod(caller, "ERROR", message, event);
            };
        };
        this.setLogLevel = function(logLevel) {
            if (this.isValidLogLevel(logLevel)) {
                if (typeof logLevel === "string") {
                    this.currentLogLevel = this.logLevels[logLevel];
                } else if (typeof logLevel === "number") {
                    this.currentLogLevel = logLevel;
                }
                var logMethods = Object.keys(this.logLevels);
                for (var i = 0; i < logMethods.length; i++) {
                    var methodName = logMethods[i].toLowerCase();
                    this[methodName] = (i < this.currentLogLevel) ? function() {} : (new loggerGenerator())[methodName];
                }
                return true;
            } else {
                return false;
            }
        };
        this.logMethod = function(functionName, logLevel, message, eventType) {
            var logObj = {
                "component": this.reuseableComponentName || "",
                "event": this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": KonyLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
            this.printMethod(JSON.stringify(logObj, null, '\t'));
        };
        this.setLogLevel("TRACE");
    };
    /**
     * @member of  KonyLogger
     * @property logLevels - This enum holds the 6 levels of logging and their order.
     **/
    KonyLogger.prototype.logLevels = {
        "TRACE": 0,
        "DEBUG": 1,
        "INFO": 2,
        "WARN": 3,
        "ERROR": 4,
        "SILENT": 5
    };
    /**
     * @member of  KonyLogger
     * @property eventTypes - This array holds 8 types of events.
     **/
    KonyLogger.prototype.supportedEventTypes = ["DEFAULT", "FUNCTION_ENTRY", "FUNCTION_EXIT", "SUCCESS_CALLBACK", "ERROR_CALLBACK", "EXCEPTION", "SERVICE_CALL", "DATA_STORE"];
    /** KonyLogger EventTypes**/
    KonyLogger.prototype.DEFAULT = 0;
    KonyLogger.prototype.FUNCTION_ENTRY = 1;
    KonyLogger.prototype.FUNCTION_EXIT = 2;
    KonyLogger.prototype.SUCCESS_CALLBACK = 3;
    KonyLogger.prototype.ERROR_CALLBACK = 4;
    KonyLogger.prototype.EXCEPTION = 5;
    KonyLogger.prototype.SERVICE_CALL = 6;
    KonyLogger.prototype.DATA_STORE = 7;
    /**
     * @member of  KonyLogger
     * @property defaultLogLevel - This property holds the default logLevel
     * It is intialised to "TRACE".
     **/
    KonyLogger.prototype.defaultLogLevel = KonyLogger.prototype.logLevels["TRACE"];
    /**
     * @member of  KonyLogger
     * @function isValidLogLevel
     * @param logLevel - (string or number)
     * @description - This method validates the logLevel parameter with the enum logLevels
     * @return boolean
     **/
    KonyLogger.prototype.isValidLogLevel = function(logLevel) {
        if ((logLevel !== undefined) && (logLevel !== null) && (logLevel !== "")) {
            if (typeof logLevel === "string") {
                if (logLevel.toUpperCase() in this.logLevels) {
                    return true;
                } else {
                    return false;
                }
            } else if (typeof logLevel === "number") {
                for (var logLevelKey in this.logLevels) {
                    if (logLevel === this.logLevels.logLevelKey) {
                        return true;
                    }
                }
                return false;
            } else {
                return false;
            }
        }
    };
    /**
     * @member of  KonyLogger
     * @function getLogLevel
     * @param none
     * @description - This method returns the current log level of the instance
     * @return type number
     **/
    KonyLogger.prototype.getLogLevel = function() {
        return this.currentLogLevel;
    };
    /**
     * @member of  KonyLogger
     * @function setPrintMethod
     * @param method: type function - The method to print the log/message.
     * The default value is kony.print
     * @description - This method sets the current log method to 'method'
     * @return none
     **/
    KonyLogger.prototype.setPrintMethod = function(method) {
        if ((method !== undefined) && (method !== null) && (method !== "")) {
            if (typeof method === "function") {
                this.printMethod = method;
            }
        }
    };
    KonyLogger.Utils = {};
    /**
     * @member of  KonyLogger
     * @function getDateTimeStamp
     * @param none
     * @description - It returns the current date and time stamp in "DD/MM/YY HH:MM AM/PM" format
     * @return type string
     **/
    KonyLogger.Utils.getDateTimeStamp = function() {
        var dateTimeStamp = "";
        var currentDateObj = new Date();
        dateTimeStamp += currentDateObj.getDate() + "/" + (currentDateObj.getMonth() + 1) + "/" + currentDateObj.getFullYear();
        dateTimeStamp += " ";
        var hours = currentDateObj.getHours();
        if (hours > 12) {
            dateTimeStamp += (hours - 12) + ":" + currentDateObj.getMinutes() + " PM";
        } else {
            dateTimeStamp += hours + ":" + currentDateObj.getMinutes() + " AM";
        }
        return dateTimeStamp;
    };
    return KonyLogger;
});
define('com/konyenb/event/usereventController',['com/konyenb/event/konyLogger'],function() {
    var konyLoggerModule = require('com/konyenb/event/konyLogger');
    var konysa = {};
    konysa.logger = new konyLoggerModule("Event detail Component");
    return {
        /**
         * @function constructor
         * @private
         * @param {Object} baseConfig
         * @param {Object} layoutConfig
         * @param {Object} pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._event = null;
        },
        //Logic for getters/setters of custom properties
        /**
         * @function initGettersSetters
         * @description function to initialize the init getter setter of the component.
         * @private
         */
        initGettersSetters: function() {
            konysa.logger.trace("----------Entering initGettersSetters Function---------", konysa.logger.FUNCTION_ENTRY);
        },
        /**
         * @function setEvent
         * @description function to initialize the init component with the provided event data.
         * @private
         * @param{JSON} event
         */
        setEvent: function(event) {
            try {
                konysa.logger.trace("----------Entering setEvent function---------", konysa.logger.FUNCTION_ENTRY);
                if (event === null || event === undefined) {
                    alert("please provide event detail!");
                    return;
                }
                this._event = event;
                this.view.imgEventLogo.src = event["event_banners"][0]["banner_url"];
                this.view.lblEventTitle.text = event["name"];
                this.view.lblEventDescCategoryText.text = event["event_category"];
                this.view.lblEventDescDateText.text = event["event_date"];
                var location = "Online";
                if (event["location"][0]["addressLine1"] !== undefined && (event["location"][0]["addressLine1"]).trim() !== "") {
                    location = event["location"][0]["addressLine1"];
                    if (event["location"][0]["cityname"] !== undefined && ((event["location"][0]["cityname"]).trim() !== "")) {
                        location = location + ", " + event["location"][0]["cityname"];
                    }
                } else {
                    if (event["location"][0]["cityname"] !== undefined && ((event["location"][0]["cityname"]).trim() !== "")) {
                        location = event["location"][0]["cityname"];
                    }
                }
                if (location == "Online") {
                    event["location_processed"] = event["location"][0]["location"];
                } else {
                    event["location_processed"] = location;
                }
                this.view.lblEventDescLocationText.text = location;
                this.setImages(event["event_images"]);
                konysa.logger.trace("----------Exiting setEvent function---------", konysa.logger.FUNCTION_ENTRY);
            } catch (error) {
                kony.print("Event Template Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function setImages
         * @description function to add images to the event.
         * @private
         * @param{JSONArray} imageList
         */
        setImages: function(imageList) {
            try {
                this.view.flxScImageGallery.removeAll();
                if (imageList === null || imageList === undefined) {
                    return;
                }
                var imageListLength = imageList.length;
                var flxItem, img;
                for (var i = 0; i < imageListLength; i++) {
                    if (i > 5) {
                        return;
                    }
                    flxItem = new kony.ui.FlexContainer({
                        "autogrowMode": kony.flex.AUTOGROW_NONE,
                        "centerY": "50%",
                        "clipBounds": true,
                        "height": "40dp",
                        "id": "flxItem" + i,
                        "isVisible": true,
                        "layoutType": kony.flex.FREE_FORM,
                        "left": i === 0 ? "0dp" : "5dp",
                        "skin": "sknFlxEventRoot",
                        "top": "0dp",
                        "width": "40dp",
                        "zIndex": 1
                    }, {}, {});
                    flxItem.setDefaultUnit(kony.flex.DP);
                    var img = new kony.ui.Image2({
                        "centerX": "50%",
                        "centerY": "50%",
                        "height": "40dp",
                        "id": "img" + i,
                        "isVisible": true,
                        "skin": "slImage",
                        "src": imageList[i]["image_url"],
                        "width": "40dp",
                        "zIndex": 1
                    }, {
                        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                        "padding": [0, 0, 0, 0],
                        "paddingInPixel": false
                    }, {});
                    flxItem.add(img);
                    this.view.flxScImageGallery.add(flxItem);
                }
            } catch (error) {
                kony.print("Event Template Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function onRemoveHandler
         * @description function to trigger the onRemove event.
         * @private
         */
        onRemoveHandler: function() {
            try {
                if (this.onRemove !== null && this.onRemove !== undefined) {
                    this.onRemove(this._event);
                }
            } catch (error) {
                kony.print("Event Template Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function onEditHandler
         * @description function to trigger the onEdit event.
         * @private
         */
        onEditHandler: function() {
            try {
                if (this.onEdit !== null && this.onEdit !== undefined) {
                    this.onEdit(this._event);
                }
            } catch (error) {
                kony.print("Event Template Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function onViewHandler
         * @description function to trigger the onView event.
         * @private
         */
        onViewHandler: function() {
            try {
                if (this.onView !== null && this.onView !== undefined) {
                    this.onView(this._event);
                }
            } catch (error) {
                kony.print("Event Template Controller" + JSON.stringify(error));
            }
        },
    };
});
define('com/konyenb/event/eventControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnRemove **/
    AS_Button_e873b0b9e6ee4f2e95d34b1fd1d69980: function AS_Button_e873b0b9e6ee4f2e95d34b1fd1d69980(eventobject) {
        var self = this;
        this.onRemoveHandler();
    },
    /** onClick defined for btnEdit **/
    AS_Button_ae1ced44a04e45db98e67a006c9c9c2e: function AS_Button_ae1ced44a04e45db98e67a006c9c9c2e(eventobject) {
        var self = this;
        this.onEditHandler();
    },
    /** onClick defined for event **/
    AS_FlexContainer_dfc085c89ad2463a95577ed737bff289: function AS_FlexContainer_dfc085c89ad2463a95577ed737bff289(eventobject) {
        var self = this;
        this.onViewHandler();
    }
});
define('com/konyenb/event/eventController',["com/konyenb/event/usereventController", "com/konyenb/event/eventControllerActions"], function() {
    var controller = require("com/konyenb/event/usereventController");
    var actions = require("com/konyenb/event/eventControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "isRemoveVisible", function(val) {
            this.view.btnRemove.isVisible = val;
        });
        defineGetter(this, "isRemoveVisible", function() {
            return this.view.btnRemove.isVisible;
        });
        defineSetter(this, "isEditVisible", function(val) {
            this.view.btnEdit.isVisible = val;
        });
        defineGetter(this, "isEditVisible", function() {
            return this.view.btnEdit.isVisible;
        });
        defineSetter(this, "isRegisteredVisible", function(val) {
            this.view.imageRegister.isVisible = val;
        });
        defineGetter(this, "isRegisteredVisible", function() {
            return this.view.imageRegister.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
