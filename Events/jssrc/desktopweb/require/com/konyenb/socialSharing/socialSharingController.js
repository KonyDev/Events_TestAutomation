define('com/konyenb/socialSharing/konyLogger',[],function() {
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
define('com/konyenb/socialSharing/usersocialSharingController',['com/konyenb/socialSharing/konyLogger'],function() {
    var konyLoggerModule = require('com/konyenb/socialSharing/konyLogger');
    var konysa = konysa || {};
    konysa.logger = new konyLoggerModule("Social Sharing") || function() {};
    return {
        /**
         * @function constructor
         * @private
         * @param {Object} baseConfig
         * @param {Object} layoutConfig
         * @param {Object} pspConfig
         */
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            konysa.logger.trace("***************Entering into constructor****************");
            this._sharingIcon = "";
            this._mimetype = "";
            this._contentType = "";
            this._intentContentType = "";
            this._base64Type = "";
            this._base64String = "";
            this._subject = "";
            this._count = 0;
            this._flag = 0;
            this._fileName = "";
            this._deviceInfo = "";
            konysa.logger.trace("********************Exiting Constructor*****************");
        },
        /**
         * @function initGettersSetters
         * @description contains getters/setters for custom properties
         */
        initGettersSetters: function() {
            defineSetter(this, "sharingIcon", function(value) {
                try {
                    konysa.logger.trace("************Entering into sharingIcon Setter***********");
                    if (value.search("png") != -1) {
                        this._sharingIcon = value;
                    } else {
                        this._sharingIcon = value + "png";
                    }
                    konysa.logger.trace("********************Exiting sharingIcon setter**********");
                } catch (error) {
                    kony.print("Social Sharing Controller" + JSON.stringify(error));
                }
            });
            defineGetter(this, "sharingIcon", function() {
                konysa.logger.trace("************Entering into sharingIcon getter************");
                return this._sharingIcon;
                //konysa.logger.trace("************Exiting from sharingIcon getter**************");
            });
            defineSetter(this, "MimeType", function(value) {
                konysa.logger.trace("************************Entering setter of mime type ****************");
                try {
                    if (value === null) {
                        alert("Mime Type can't be null");
                    } else {
                        this._mimetype = value;
                        if (this._mimetype == "Image/PNG") {
                            this._contentType = "png";
                        } else if (this._mimetype == "Image/JPG") {
                            this._contentType = "jpg";
                        } else if (this._mimetype == "PDF") {
                            this._contentType = "pdf";
                        } else if (this._mimetype == "Plain-Text") {
                            this._contentType = "text/plain";
                        }
                    }
                } catch (exception) {
                    kony.print("Exception occured" + exception);
                }
                konysa.logger.trace("****************Exiting setter of MimeType *******************");
            });
            defineGetter(this, "MimeType", function() {
                konysa.logger.trace("************Entering into sharingIcon getter************");
                return this._contentType;
                //konysa.logger.trace("************Exiting from sharingIcon getter**************");
            });
            defineSetter(this, "Subject", function(value) {
                konysa.logger.trace("*******************Entering into Subject setter****************");
                this._subject = value;
                konysa.logger.trace("*******************Exiting from subject setter*****************");
            });
            defineGetter(this, "Subject", function() {
                konysa.logger.trace("*******************Entering into Subject getter****************");
                return this._subject;
            });
            defineSetter(this, "FileName", function(value) {
                konysa.logger.trace("*********************Entering into fleName setter method ************");
                this._fileName = value;
                konysa.logger.trace("**********************Exiting from fileName setter method************");
            });
        },
        /**
         * @function checkDeviceInfo
         * @description This function is used to get the device information
         * @private
         */
        checkDeviceInfo: function() {
            try {
                konysa.logger.trace("*******************************Entering into checkDeviceInfo Function*******************************");
                var deviceName = kony.os.deviceInfo().name;
                if (deviceName === "android") {
                    this._deviceInfo = "android";
                    this.createMyFile();
                } else if (deviceName === "iPhone") {
                    this._deviceInfo = "iPhone";
                    this.createMyFile();
                } else {
                    kony.print("Unsupported device type");
                    konysa.logger.trace("Device Type is not supported");
                }
                konysa.logger.trace("****************************Exiting from checkDeviceInfo Function**********************************");
            } catch (error) {
                kony.print("Social Sharing Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function setContent
         * @description This function is used to set the mime type and base64 information
         * @private
         */
        setContent: function(base64) {
            try {
                konysa.logger.trace("*******************************Entering into setContent Function**********************************");
                if (base64.length > 0) {
                    this._base64String = base64;
                    var mimeTypeString = base64.substring(0, 5);
                    if (mimeTypeString === "iVBOR") {
                        this._base64Type = "png";
                        if (this._base64Type === this._contentType) {
                            this._intentContentType = "image/png";
                            this._flag = 1;
                        } else {
                            konysa.logger.trace("****************Content-Type mismatch*******************");
                            this._flag = 0;
                        }
                    } else if (mimeTypeString === "JVBERi") {
                        this._base64Type = "pdf";
                        if (this._base64Type === this._contentType) {
                            this._intentContentType = "application/pdf";
                            this._flag = 1;
                        } else {
                            konysa.logger.trace("****************Content-Type mismatch*******************");
                            this._flag = 0;
                        }
                    } else if (mimeTypeString.substring(0, 3) === "/9j") {
                        this._base64Type = "jpg";
                        if (this._base64Type === this._contentType) {
                            this._intentContentType = "image/jpg";
                            this._flag = 1;
                        } else {
                            konysa.logger.trace("****************Content-Type mismatch*******************");
                            this._flag = 0;
                        }
                    } else {
                        konysa.logger.trace("*********************Unsuppoerted file*********************");
                    }
                } else {
                    this._base64String = null;
                    konysa.logger.trace("Content can't be null");
                    alert("Content can't be null");
                }
                if (this._flag === 0) {
                    return false;
                } else {
                    return true;
                }
                konysa.logger.trace("********************************Exiting from shareContent Function***************************");
            } catch (error) {
                kony.print("Social Sharing Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function createMyFile
         * @description This function is used to create file on the basis of mime type and base64 data
         * @private
         */
        createMyFile: function() {
            try {
                konysa.logger.trace("*************************Entering into createFile Function *******************************");
                var rawbytes;
                var fileExtension;
                var destDirPath;
                if (this._flag === 1) {
                    this._count = this._count + 1;
                    if (this._base64String !== null) {
                        rawbytes = kony.convertToRawBytes(this._base64String);
                    } else {
                        konysa.logger.trace("Content is empty");
                        return;
                    }
                    if (this._intentContentType === "image/png") {
                        fileExtension = ".png";
                    } else if (this._intentContentType === "image/jpg") {
                        fileExtension = ".jpg";
                    } else if (this._intentContentType === "application/pdf") {
                        fileExtension = ".pdf";
                    } else {
                        fileExtension = ".txt";
                    }
                    if (this._deviceInfo === "android") {
                        destDirPath = kony.io.FileSystem.getExternalStorageDirectoryPath() + "/Sharing";
                    } else if (this._deviceInfo === "iPhone") {
                        destDirPath = kony.io.FileSystem.getDataDirectoryPath() + "/Sharing";
                    }
                    var destFilePath = destDirPath + this._fileName + fileExtension;
                    var directory = new kony.io.File(destDirPath);
                    if ((!directory.exists())) {
                        directory.createDirectory();
                    } else {
                        directory.remove(true);
                        directory.createDirectory();
                    }
                    var fileObj = new kony.io.File(destFilePath);
                    if (!(fileObj.exists())) {
                        fileObj.createFile();
                    } else {
                        fileObj.remove();
                        fileObj.createFile();
                    }
                    var writeObj = new kony.io.File(destFilePath).write(rawbytes);
                    if (writeObj) {
                        konysa.logger.trace("**********************Writing succcesful*********************************");
                        if (this._deviceInfo === "android") {
                            this.shareUsingAndroid(destFilePath);
                        } else if (this._deviceInfo === "iPhone") {
                            this.shareUsingiPhone(destFilePath);
                        } else {
                            kony.print("-------------Unsupported device type-----------------------------------------");
                            konysa.logger.trace("*********************Unsupported device type************************");
                        }
                    }
                    this.count = this.count + 1;
                } else {
                    konysa.logger.trace("**************************Content -Type mismatch********************************");
                    return;
                }
                konysa.logger.trace("********************Exiting From createFile Function ******************************");
            } catch (error) {
                kony.print("Social Sharing Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function shareUsingAndroid
         * @description This function is used to share the file existing in the provided path for android
         * @private
         * @param {string} path
         */
        shareUsingAndroid: function(path) {
            try {
                konysa.logger.trace("***************Entering shareUsingAndroid Function***************");
                var konyPackage = java.import("com.konylabs.android.KonyMain");
                var Intent = java.import("android.content.Intent");
                var String = java.import("java.lang.String");
                var uriObj = java.import("android.net.Uri");
                var fileObj = java.import("java.io.File");
                var intentObj = new Intent(Intent.ACTION_SEND);
                intentObj.setType(this._intentContentType);
                intentObj.putExtra(Intent.EXTRA_SUBJECT, this._subject);
                var uri = uriObj.fromFile(new fileObj(path));
                intentObj.putExtra(Intent.EXTRA_STREAM, uri);
                var contextObj = konyPackage.getActContext();
                contextObj.startActivity(Intent.createChooser(intentObj, "Choose App"));
                konysa.logger.trace("***************Exiting shareUsingAndroid Function***************");
            } catch (error) {
                kony.print("Social Sharing Controller" + JSON.stringify(error));
            }
        },
        /**
         * @function shareUsingiPhone
         * @description This function is used to share the file existing in the provided path for iphone
         * @private
         * @param {string} path
         */
        shareUsingiPhone: function(path) {
            try {
                konysa.logger.trace("******************Entering into shareUsingIphone Function***********************");
                var textToShare = "Sharing Content";
                var NSURL = objc.import("NSURL");
                var NSURLObjectLink = NSURL.fileURLWithPath(path);
                var shareItems = [textToShare, NSURLObjectLink];
                var UIActivityViewController = objc.import("UIActivityViewController");
                var avcObject = UIActivityViewController.alloc().initWithActivityItemsApplicationActivities(shareItems, undefined);
                var UIApplication = objc.import("UIApplication");
                UIApplication.sharedApplication().keyWindow.rootViewController.presentViewControllerAnimatedCompletion(avcObject, true, undefined);
                konysa.logger.trace("****************Exiting from shareUsingIphone Function***************************");
            } catch (error) {
                kony.print("Social Sharing Controller" + JSON.stringify(error));
            }
        }
    };
});
define('com/konyenb/socialSharing/socialSharingControllerActions',{
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for imgShare **/
    AS_Image_f234df138ac14cf8832b2b4b4358ec0e: function AS_Image_f234df138ac14cf8832b2b4b4358ec0e(eventobject, x, y) {
        var self = this;
        this.checkDeviceInfo();
    }
});
define('com/konyenb/socialSharing/socialSharingController',["com/konyenb/socialSharing/usersocialSharingController", "com/konyenb/socialSharing/socialSharingControllerActions"], function() {
    var controller = require("com/konyenb/socialSharing/usersocialSharingController");
    var actions = require("com/konyenb/socialSharing/socialSharingControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        defineSetter(this, "shareSrc", function(val) {
            this.view.imgShare.src = val;
        });
        defineGetter(this, "shareSrc", function() {
            return this.view.imgShare.src;
        });
        defineSetter(this, "imgHeight", function(val) {
            this.view.imgShare.height = val;
        });
        defineGetter(this, "imgHeight", function() {
            return this.view.imgShare.height;
        });
        defineSetter(this, "imgWidth", function(val) {
            this.view.imgShare.width = val;
        });
        defineGetter(this, "imgWidth", function() {
            return this.view.imgShare.width;
        });
        defineSetter(this, "imgVisibility", function(val) {
            this.view.imgShare.isVisible = val;
        });
        defineGetter(this, "imgVisibility", function() {
            return this.view.imgShare.isVisible;
        });
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    return controller;
});
