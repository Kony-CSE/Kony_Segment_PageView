//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "SegmentPageView",
    appName: "SegmentPageView",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "169.254.5.227",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    isMFApp: false,
    eventTypes: [],
    secureurl: "https://169.254.5.227:443/middleware/MWServlet",
    url: "http://169.254.5.227:80/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializerowPageView();
    initializerowPageView2();
    initializerowPageView3();
    frmHomeGlobals();
    frmSegCoverFlowGlobals();
    frmsegMutliPageViewGlobals();
    frmSegPageViewGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6500
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmHome.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes
    }
    kony.setupsdks(sdkInitConfig, null, null);
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;