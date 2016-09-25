//startup.js file
var appConfig = {
    appId: "SegmentPageView",
    appName: "SegmentPageView",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "169.254.5.227",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    url: "http://169.254.5.227:80/middleware/MWServlet",
    secureurl: "https://169.254.5.227:443/middleware/MWServlet",
    middlewareContext: "middleware"
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
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};