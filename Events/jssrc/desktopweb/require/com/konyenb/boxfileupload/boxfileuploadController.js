define('com/konyenb/boxfileupload/konyLogger',[],function() {
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
define('com/konyenb/boxfileupload/userboxfileuploadController',['com/konyenb/boxfileupload/konyLogger'],function() {
    var konyLoggerModule = require('com/konyenb/boxfileupload/konyLogger');
    var konysa = {};
    konysa.logger = new konyLoggerModule("Box File upload Component");
    return {
        /**
         * @function constructor
         * @private
         * @param {Object} baseConfig
         * @param {Object} layoutConfig
         * @param {Object} pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._selectedFiles = [];
            this._appUserID = null;
            this._folderID = null;
        },
        /**
         * @function initGettersSetters
         * @description function to initialize the init getter setter of the component.
         * @private
         */
        initGettersSetters: function() {
            konysa.logger.trace("----------Entering initGettersSetters Function---------", konysa.logger.FUNCTION_ENTRY);
            defineGetter(this, "appUserID", function() {
                konysa.logger.trace("----------Entering appUserID getter---------", konysa.logger.FUNCTION_ENTRY);
                konysa.logger.trace("----------Exiting appUserID getter---------", konysa.logger.FUNCTION_EXIT);
                return this._appUserID;
            });
            defineSetter(this, "appUserID", function(val) {
                konysa.logger.trace("----------Entering appUserID Setter---------", konysa.logger.FUNCTION_ENTRY);
                konysa.logger.trace("----------Exiting appUserID Setter---------", konysa.logger.FUNCTION_EXIT);
                this._appUserID = val;
            });
            defineGetter(this, "folderID", function() {
                konysa.logger.trace("----------Entering folderID getter---------", konysa.logger.FUNCTION_ENTRY);
                konysa.logger.trace("----------Exiting folderID getter---------", konysa.logger.FUNCTION_EXIT);
                return this._folderID;
            });
            defineSetter(this, "folderID", function(val) {
                konysa.logger.trace("----------Entering folderID Setter---------", konysa.logger.FUNCTION_ENTRY);
                konysa.logger.trace("----------Exiting folderID Setter---------", konysa.logger.FUNCTION_EXIT);
                this._folderID = val;
            });
        },
        /**
         * @function selectFile
         * @description function to select the file from the system.
         * @private
         */
        selectFile: function() {
            konysa.logger.trace("----------Entering isStatusVisible Setter---------", konysa.logger.FUNCTION_ENTRY);
            if (this._appUserID === null) {
                alert("please provide app user id");
                return;
            }
            if (this._folderID === null) {
                alert("please provide folder id");
                return;
            }
            var self = this;
            var fileArray = [];
            var controllerScope = this;
            var config = {
                selectMultipleFiles: true,
                filter: ["image/png", "image/jpeg", "image/jpg", "image/svg"]
            };
            this._selectedFiles = [];
            var browseResponse = kony.io.FileSystem.browse(config, browseCallback.bind(this));

            function browseCallback(event, resultObject) {
                konysa.logger.trace("----------Entering browseCallback---------", konysa.logger.FUNCTION_ENTRY);
                for (var i = 0; i < resultObject.length; i++) {
                    fileArray.push(resultObject[i].file);
                }
                this._selectedFiles = fileArray;
                try {
                    if (self.onImageSelection !== null && self.onImageSelection !== undefined) {
                        self.onImageSelection(fileArray);
                    }
                } catch (excp) {
                    konysa.logger.error(JSON.stringify(excp), konysa.logger.EXCEPTION);
                }
            }
        },
        /**
         * @function uploadFile
         * @description function to uploadFile in the box storage.
         * @private
         */
        uploadFile: function() {
            if (this._appUserID === null) {
                alert("please provide app user id");
                return;
            }
            if (this._folderID === null) {
                alert("please provide folder id");
                return;
            }
            if (this._selectedFiles.length === 0) {
                alert("please select an image first!");
                return;
            }
            var fileList = this._selectedFiles;
            try {
                var self = this;
                var xhr = new XMLHttpRequest();
                var params = new FormData();
                params.append("appUserID", self._appUserID);
                params.append("folderID", self._folderID);
                for (var i = 0; i < fileList.length; i++) {
                    params.append("fileObject" + i, fileList[i]);
                }
                xhr.onreadystatechange = function() {
                    konysa.logger.trace("----------Entering onreadystatechange---------", konysa.logger.FUNCTION_ENTRY);
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            konysa.logger.trace("----------onreadystatechange status 200 ---------", konysa.logger.FUNCTION_ENTRY);
                            try {
                                if (self.onUploadSuccess !== null && self.onUploadSuccess !== undefined) {
                                    self.onUploadSuccess(this.response);
                                }
                            } catch (excp) {
                                konysa.logger.error(JSON.stringify(excp), konysa.logger.EXCEPTION);
                            }
                        } else {
                            try {
                                if (self.onUploadFailure !== null && self.onUploadFailure !== undefined) {
                                    self.onUploadFailure(this.response);
                                }
                            } catch (excp) {
                                konysa.logger.error(JSON.stringify(excp), konysa.logger.EXCEPTION);
                            }
                            konysa.logger.trace("----------onreadystatechange failure callback ---------", konysa.logger.FUNCTION_ENTRY);
                            alert("upload failed!");
                        }
                    }
                };
                var mfURL = KNYMobileFabric.integsvc.BoxService.url;
                var uploadURL = mfURL + "/UploadFilesInFolder";
                xhr.open("POST", uploadURL, true);
                xhr.send(params);
            } catch (e) {
                konysa.logger.error(JSON.stringify(e), konysa.logger.EXCEPTION);
                alert(e.message);
            }
        }
    };
});
define('com/konyenb/boxfileupload/boxfileuploadControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSelectFile **/
    AS_Button_gd70cf67cf5746c08aab3a9cfe2564e6: function AS_Button_gd70cf67cf5746c08aab3a9cfe2564e6(eventobject) {
        var self = this;
        this.selectFile();
    },
    /** onClick defined for btnUpload **/
    AS_Button_db489fe3076e48b18181594034fd9a5e: function AS_Button_db489fe3076e48b18181594034fd9a5e(eventobject) {
        var self = this;
        this.uploadFile();
    }
});
define('com/konyenb/boxfileupload/boxfileuploadController',["com/konyenb/boxfileupload/userboxfileuploadController", "com/konyenb/boxfileupload/boxfileuploadControllerActions"], function() {
    var controller = require("com/konyenb/boxfileupload/userboxfileuploadController");
    var actions = require("com/konyenb/boxfileupload/boxfileuploadControllerActions");
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
