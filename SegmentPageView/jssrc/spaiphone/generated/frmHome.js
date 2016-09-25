//Form JS File
function frmHome_button999296733165324_onClick_seq0(eventobject) {
    frmSegPageView.show();
};

function frmHome_button999296733167265_onClick_seq0(eventobject) {
    frmsegMutliPageView.show();
};

function frmHome_button999296733168238_onClick_seq0(eventobject) {
    frmSegCoverFlow.show();
};

function addWidgetsfrmHome() {
    var image2999296733165323 = new kony.ui.Image2({
        "id": "image2999296733165323",
        "top": "25dp",
        "left": "100dp",
        "width": "156dp",
        "height": "50dp",
        "centerX": "50.0%",
        "zIndex": 1,
        "isVisible": true,
        "src": "logo.png",
        "imageWhenFailed": null,
        "imageWhileDownloading": null
    }, {
        "padding": [0, 0, 0, 0],
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button999296733165324 = new kony.ui.Button({
        "id": "button999296733165324",
        "top": "91dp",
        "left": "100dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Page View",
        "skin": "btnMenuSkin",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button999296733165324_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button999296733167265 = new kony.ui.Button({
        "id": "button999296733167265",
        "top": "150dp",
        "left": "100dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Page View wtih diff rowTemplates",
        "skin": "btnMenuSkin",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button999296733167265_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    var button999296733168238 = new kony.ui.Button({
        "id": "button999296733168238",
        "top": "210dp",
        "left": "100dp",
        "width": "260dp",
        "height": "50dp",
        "centerX": "50%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Cover Flow ",
        "skin": "btnMenuSkin",
        "focusSkin": "btnFocus",
        "onClick": frmHome_button999296733168238_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 11
    }, {});
    frmHome.add(image2999296733165323, button999296733165324, button999296733167265, button999296733168238);
    frmHome.setDefaultUnit(kony.flex.DP);
};

function frmHomeGlobals() {
    var MenuId = [];
    frmHome = new kony.ui.Form2({
        "id": "frmHome",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBGColor1",
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmHome
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "inTransitionConfig": {
            "formTransition": "None"
        },
        "outTransitionConfig": {
            "formTransition": "None"
        }
    });
};