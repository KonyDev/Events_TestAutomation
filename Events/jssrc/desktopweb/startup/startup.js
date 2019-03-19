kony.globals["appid"] = "Events";
kony.globals["build"] = "debug";
kony.globals["defaultLocale"] = "en_US";
kony.globals["locales"] = ["en_US"];
kony.globals["i18nArray"] = [];
kony.globals["localization"] = "true";
kony.globals["i18nVersion"] = "1810624500";
//startup.js
var appConfig = {
    appId: "Events",
    appName: "Events",
    appVersion: "1.1.1",
    isturlbase: "http://sawin1.konylabs.net:8686/services",
    isDebug: true,
    isMFApp: true,
    appKey: "13c6720537257e83390bfe6314fcda7",
    appSecret: "19e5accb69ab31377d4b9901944b2238",
    serviceUrl: "http://sawin1.konylabs.net:8686/authService/100000002/appconfig",
    svcDoc: {
        "identity_meta": {
            "linkedIdentityLogin": {
                "success_url": "allow_any"
            }
        },
        "app_version": "1.0",
        "messagingsvc": {
            "appId": "a15d9fb1-44a7-4131-a669-eb0268f891bf",
            "url": "http://sawin1.konylabs.net:8686/kpns/api/v1"
        },
        "baseId": "9b0752f2-93a4-404b-a784-a0a61789e96b",
        "app_default_version": "1.0",
        "login": [{
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "http://sawin1.konylabs.net:8686/authService/100000002"
        }, {
            "mandatory_fields": [],
            "alias": "customAccountLogin",
            "type": "basic",
            "prov": "customAccountLogin",
            "url": "http://sawin1.konylabs.net:8686/authService/100000002"
        }, {
            "alias": "linkedIdentityLogin",
            "type": "oauth2",
            "prov": "linkedIdentityLogin",
            "url": "http://sawin1.konylabs.net:8686/authService/100000002"
        }],
        "services_meta": {
            "EventsSOS": {
                "offline": false,
                "metadata_url": "http://sawin1.konylabs.net:8686/services/metadata/v1/EventsSOS",
                "type": "objectsvc",
                "version": "1.0",
                "url": "http://sawin1.konylabs.net:8686/services/data/v1/EventsSOS"
            },
            "KMSService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://sawin1.konylabs.net:8686/services/KMSService"
            },
            "getLatLang": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://sawin1.konylabs.net:8686/services/getLatLang"
            },
            "BoxService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://sawin1.konylabs.net:8686/services/BoxService"
            },
            "accountlogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "http://sawin1.konylabs.net:8686/services/accountlogin"
            }
        },
        "selflink": "http://sawin1.konylabs.net:8686/authService/100000002/appconfig",
        "integsvc": {
            "KMSService": "http://sawin1.konylabs.net:8686/services/KMSService",
            "getLatLang": "http://sawin1.konylabs.net:8686/services/getLatLang",
            "BoxService": "http://sawin1.konylabs.net:8686/services/BoxService",
            "accountlogin": "http://sawin1.konylabs.net:8686/services/accountlogin"
        },
        "service_doc_etag": "0000016643A8E0A8",
        "appId": "a15d9fb1-44a7-4131-a669-eb0268f891bf",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "EventSOS",
        "reportingsvc": {
            "session": "http://sawin1.konylabs.net:8686/services/IST",
            "custom": "http://sawin1.konylabs.net:8686/services/CMS"
        },
        "Webapp": {
            "url": "http://sawin1.konylabs.net:8686/apps/Events"
        }
    },
    runtimeAppVersion: "Default",
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        isMVC: true,
        responsive: true,
        APILevel: 8100
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    requirejs.config({
        baseUrl: kony.appinit.getStaticContentPath() + 'desktopweb/appjs'
    });
    require(['kvmodules'], function() {
        applicationController = require("applicationController");
        callAppMenu();
        kony.application.setApplicationInitializationEvents({
            init: applicationController.appInit,
            appservice: applicationController.AS_AppEvents_e38834025b794d44b1debb08918c3e47,
            postappinit: applicationController.postAppInitCallBack,
            showstartupform: function() {
                new kony.mvc.Navigation("frmAllEvents").navigate();
            }
        });
    });
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function loadResources() {
    kony.theme.packagedthemes(["default"]);
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    spaAPM && spaAPM.startTracking();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //This is the entry point for the application.When Locale comes,Local API call will be the entry point.
    $KI.i18n.cleanupI18nCache();
    kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
};
									function getSPARequireModulesList(){ return ['kvmodules']; }
								