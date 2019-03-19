//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "Events",
    appName: "Events",
    appVersion: "1.1.1",
    isturlbase: "https://prodsanity-83.konycloud.com/services",
    isDebug: false,
    isMFApp: true,
    appKey: "cd80056207d95ac5b4192a191209f4d1",
    appSecret: "825d96a6df1af4fe912c11ed3e13b2ba",
    serviceUrl: "https://100005088.auth.konycloud.com/appconfig",
    svcDoc: {
        "identity_meta": {
            "linkedIdentityLogin": {
                "success_url": "allow_any"
            }
        },
        "app_version": "1.0",
        "messagingsvc": {
            "appId": "bea6b01d-095e-4436-8c14-fb5bc7f8c80f",
            "url": "https://prodsanity-83.messaging.konycloud.com/api/v1"
        },
        "baseId": "1ac01bea-15c5-46b6-b550-a0f49bc865b5",
        "app_default_version": "1.0",
        "login": [{
            "mandatory_fields": [],
            "alias": "customAccountLogin",
            "type": "basic",
            "prov": "customAccountLogin",
            "url": "https://100005088.auth.konycloud.com"
        }, {
            "alias": "linkedIdentityLogin",
            "type": "oauth2",
            "prov": "linkedIdentityLogin",
            "url": "https://100005088.auth.konycloud.com"
        }, {
            "forgot_pswd_submit_userid": "https://100005088.auth.konycloud.com/forgot_password/submit_userid/",
            "reset_pswd": "https://100005088.auth.konycloud.com/forgot_password/reset_password/",
            "alias": "userstore",
            "type": "basic",
            "prov": "userstore",
            "url": "https://100005088.auth.konycloud.com"
        }],
        "services_meta": {
            "EventsSOS": {
                "offline": false,
                "metadata_url": "https://prodsanity-83.konycloud.com/services/metadata/v1/EventsSOS",
                "type": "objectsvc",
                "version": "1.0",
                "url": "https://prodsanity-83.konycloud.com/services/data/v1/EventsSOS"
            },
            "KMSService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://prodsanity-83.konycloud.com/services/KMSService"
            },
            "getLatLang": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://prodsanity-83.konycloud.com/services/getLatLang"
            },
            "BoxService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://prodsanity-83.konycloud.com/services/BoxService"
            },
            "accountlogin": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://prodsanity-83.konycloud.com/services/accountlogin"
            }
        },
        "selflink": "https://100005088.auth.konycloud.com/appconfig",
        "integsvc": {
            "_internal_logout": "https://prodsanity-83.konycloud.com/services/IST",
            "KMSService": "https://prodsanity-83.konycloud.com/services/KMSService",
            "getLatLang": "https://prodsanity-83.konycloud.com/services/getLatLang",
            "BoxService": "https://prodsanity-83.konycloud.com/services/BoxService",
            "accountlogin": "https://prodsanity-83.konycloud.com/services/accountlogin"
        },
        "service_doc_etag": "0000016952393E08",
        "appId": "bea6b01d-095e-4436-8c14-fb5bc7f8c80f",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "EventSOS",
        "reportingsvc": {
            "session": "https://prodsanity-83.konycloud.com/services/IST",
            "custom": "https://prodsanity-83.konycloud.com/services/CMS"
        },
        "Webapp": {
            "url": "https://prodsanity-83.konycloud.com/apps/Events"
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
kony.print = function() {
    return;
};