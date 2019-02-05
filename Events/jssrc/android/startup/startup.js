//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "Events",
    appName: "Events",
    appVersion: "1.0.0",
    isturlbase: "https://automation1.konycloud.com/services",
    isDebug: true,
    isMFApp: true,
    appKey: "9b28a77972bda5198733195576cf62ae",
    appSecret: "5170b337ce8318b89e2753314ec9c333",
    serviceUrl: "https://100017816.auth.konycloud.com/appconfig",
    svcDoc: {
        "identity_meta": {
            "linkedIdentityLogin": {
                "success_url": "allow_any"
            }
        },
        "app_version": "1.0",
        "messagingsvc": {
            "appId": "dee1640d-52ed-4426-9435-636ad4afa692",
            "url": "https://automation1.messaging.konycloud.com/api/v1"
        },
        "baseId": "49a4d9d2-0fee-4b1f-908c-c6001d97c712",
        "app_default_version": "1.0",
        "login": [{
            "alias": "linkedIdentityLogin",
            "type": "oauth2",
            "prov": "linkedIdentityLogin",
            "url": "https://100017816.auth.konycloud.com"
        }, {
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "https://100017816.auth.konycloud.com"
        }, {
            "mandatory_fields": [],
            "alias": "customAccountLogin",
            "type": "basic",
            "prov": "customAccountLogin",
            "url": "https://100017816.auth.konycloud.com"
        }],
        "services_meta": {
            "EventsSOS": {
                "offline": false,
                "metadata_url": "https://automation1.konycloud.com/services/metadata/v1/EventsSOS",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://automation1.konycloud.com/services/data/v1/EventsSOS"
            },
            "EventOrchSDO": {
                "offline": false,
                "metadata_url": "https://automation1.konycloud.com/services/metadata/v1/EventOrchSDO",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://automation1.konycloud.com/services/data/v1/EventOrchSDO"
            },
            "KMSService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://automation1.konycloud.com/services/KMSService"
            },
            "EventsOrchService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://automation1.konycloud.com/services/EventsOrchService"
            },
            "getLatLang": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://automation1.konycloud.com/services/getLatLang"
            },
            "BoxService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://automation1.konycloud.com/services/BoxService"
            },
            "accountlogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://automation1.konycloud.com/services/accountlogin"
            }
        },
        "selflink": "https://100017816.auth.konycloud.com/appconfig",
        "integsvc": {
            "KMSService": "https://automation1.konycloud.com/services/KMSService",
            "EventsOrchService": "https://automation1.konycloud.com/services/EventsOrchService",
            "getLatLang": "https://automation1.konycloud.com/services/getLatLang",
            "BoxService": "https://automation1.konycloud.com/services/BoxService",
            "accountlogin": "https://automation1.konycloud.com/services/accountlogin"
        },
        "service_doc_etag": "00000166A61DE8F0",
        "appId": "dee1640d-52ed-4426-9435-636ad4afa692",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "EventSOS",
        "reportingsvc": {
            "session": "https://automation1.konycloud.com/services/IST",
            "custom": "https://automation1.konycloud.com/services/CMS"
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
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 8100
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        preappinit: applicationController.AS_AppEvents_idf0829f55594ed2be1b3d9985ec14a4,
        appservice: applicationController.AS_AppEvents_c34a87f4b8e9423a8e2a398f086dac42,
        postappinit: applicationController.postAppInitCallBack,
        showstartupform: function() {
            new kony.mvc.Navigation("frmEventsLanding").navigate();
        }
    });
};

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
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
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
kony.i18n.setDefaultLocaleAsync("en_US", onSuccess, onFailure, null);
debugger;