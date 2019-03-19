define('com/konyenb/ImageGallery/konyLogger',[],function() {
    /**
     * @module KonyLogger v1.1
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
        this.enableServerLogging = false;
        this.logMethod = function(functionName, logLevel, message, eventType) {
            var logObj = {
                "component": this.reuseableComponentName || "",
                "event": this.supportedEventTypes[eventType] || this.supportedEventTypes[this.DEFAULT],
                "function": functionName || "",
                "timestamp": KonyLogger.Utils.getDateTimeStamp() || "",
                "level": logLevel || "",
                "message": message || ""
            };
            if (this.enableServerLogging === true) {
                if ((KNYMetricsService !== undefined) && (KNYMetricsService !== null) && (KNYMetricsService !== "")) {
                    if (typeof KNYMetricsService.sendEvent === "function") {
                        /** sendEvent params - eventType, subEventType, formID, widgetID, flowTag, metaInfo{JSON} **/
                        KNYMetricsService.sendEvent("Custom", "KonyLogger", "MarketPlaceComponent", logObj.component, null, logObj);
                    }
                }
            }
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
define('com/konyenb/ImageGallery/userImageGalleryController',['com/konyenb/ImageGallery/konyLogger'],function() {
    var konyLoggerModule = require('com/konyenb/ImageGallery/konyLogger');
    var konysa = konysa || {};
    konysa.logger = new konyLoggerModule("ImageGallery") || function() {};
    return {
        /**
         * @function constructor
         * @private
         * @param {Object} baseConfig
         * @param {Object} layoutConfig
         * @param {Object} pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            // 
            /** Global variables for custom properties */
            this._appUserID = null;
            this._rootFolderID = "0";
        },
        /**
         * @function initGettersSetters
         * @description contains getters/setters for custom properties
         */
        initGettersSetters: function() {
            //  
            defineGetter(this, "appUserID", function() {
                return this._appUserID;
            });
            defineGetter(this, "rootFolderID", function() {
                return this._rootFolderID;
            });
            defineSetter(this, "appUserID", function(appUserID) {
                this._appUserID = appUserID;
            });
            defineSetter(this, "rootFolderID", function(rootFolderID) {
                this._rootFolderID = rootFolderID;
            });
        },
        /**
         * @function getImages
         * @description This function is used to invoke integration service for fetching image from Box.
         * @private
         * @param {string} folderID
         * @param {string} top
         */
        getImages: function(folderID) {
            var imageList = [];
            var self = this;
            if (folderID === null || folderID === undefined) {
                folderID = this._rootFolderID;
            }
            var appUserID = this._appUserID;
            if (appUserID === "" || appUserID === null || appUserID === undefined) {
                alert("please provide the app user ID");
                return;
            }
            try {
                var client = kony.sdk.getCurrentInstance();
                var intgService = client.getIntegrationService("BoxService");
                kony.model.ApplicationContext.showLoadingScreen("please wait..");
                intgService.invokeOperation("getFilesInFolder", {}, {
                    "appUserID": appUserID,
                    "folderID": folderID
                }, function(successResponse) {
                    kony.model.ApplicationContext.dismissLoadingScreen();
                    imageList = successResponse.results;
                    imageList = JSON.parse(imageList);
                    self.setImage(imageList.result);
                }, function(error) {
                    kony.model.ApplicationContext.dismissLoadingScreen();
                    alert(error);
                });
            } catch (e) {
                kony.model.ApplicationContext.dismissLoadingScreen();
                alert(e.message);
            }
        },
        /**
         * @function setImage
         * @description This function is used to display the image in the UI 
         * @private
         * @param {string} response
         */
        setImage: function(response) {
            try {
                var flxItem;
                var id = 0;
                var fileName;
                this.view.flxScThumbImage.removeAll();
                this.view.imgEvent.src = response[0].image_url;
                for (var i = 0; i < response.length; i++) {
                    if (response[i].image_url !== undefined) {
                        flxItem = this.getFlexItem.bind(this)(id, response[i].image_url);
                        this.view.flxScThumbImage.add(flxItem);
                        this.view.forceLayout();
                        id++;
                    }
                }
            } catch (error) {
                kony.print("Image Gallery Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function getFlexItem
         * @description This function is used to create flex container with image dynamically. 
         * @private
         * @param {string} id
         * @param {string} imageUrl
         */
        getFlexItem: function(id, imageUrl) {
            try {
                var self = this;

                function test(eventobject) {
                    var flexId = eventobject.id;
                    var id = flexId.split("flxItem");
                    var imageSrc = self.view["imgThumb" + id[1]].src;
                    self.view.imgEvent.src = imageSrc;
                }
                var left;
                left = (id === 0) ? 0 : 5;
                var flxItem = new kony.ui.FlexContainer({
                    "autogrowMode": kony.flex.AUTOGROW_NONE,
                    "clipBounds": true,
                    "height": "80dp",
                    "id": "flxItem" + id,
                    "isVisible": true,
                    "layoutType": kony.flex.FREE_FORM,
                    "left": left + "dp",
                    "onClick": test,
                    "skin": "sknFlxThumbBG",
                    "top": "dp",
                    "width": "80dp",
                    "zIndex": 1
                }, {}, {});
                var imgThumb = new kony.ui.Image2({
                    "centerX": "50%",
                    "centerY": "50%",
                    "height": "100%",
                    "id": "imgThumb" + id,
                    "isVisible": true,
                    "skin": "slImage",
                    "src": imageUrl,
                    "width": "100%",
                    "zIndex": 1
                }, {
                    "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                    "padding": [0, 0, 0, 0],
                    "paddingInPixel": false
                }, {});
                flxItem.add(imgThumb);
                return flxItem;
            } catch (error) {
                kony.print("Image Gallery Controller" + JSON.stringify(error));
            }
        }
    };
});
define('com/konyenb/ImageGallery/ImageGalleryControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** postShow defined for ImageGallery **/
    AS_FlexContainer_ibbcc442aaa54ccab12d0a2fbba26387: function AS_FlexContainer_ibbcc442aaa54ccab12d0a2fbba26387(eventobject) {
        var self = this;
    }
});
define('com/konyenb/ImageGallery/ImageGalleryController',["com/konyenb/ImageGallery/userImageGalleryController", "com/konyenb/ImageGallery/ImageGalleryControllerActions"], function() {
    var controller = require("com/konyenb/ImageGallery/userImageGalleryController");
    var actions = require("com/konyenb/ImageGallery/ImageGalleryControllerActions");
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
