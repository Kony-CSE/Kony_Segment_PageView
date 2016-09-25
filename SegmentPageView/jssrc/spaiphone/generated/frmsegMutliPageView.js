//Form JS File
function frmsegMutliPageView_frmsegMutliPageView_postshow_seq0(eventobject) {
    segMultiPageViewData.call(this);
};

function frmsegMutliPageView_button999296733165490_onClick_seq0(eventobject) {
    frmHome.show();
};

function addWidgetsfrmsegMutliPageView() {
    var button999296733165490 = new kony.ui.Button({
        "id": "button999296733165490",
        "top": "0dp",
        "left": "0dp",
        "width": "25%",
        "height": "100%",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "skin": "btnBackSkin",
        "focusSkin": "btnFocus",
        "onClick": frmsegMutliPageView_button999296733165490_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var label999296733165492 = new kony.ui.Label({
        "id": "label999296733165492",
        "top": "0dp",
        "left": "25%",
        "width": "100%",
        "height": "100.0%",
        "centerX": "50.0%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Segment With diff PageView",
        "skin": "lblWhiteSkin"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var flexContainer999296733165488 = new kony.ui.FlexContainer({
        "id": "flexContainer999296733165488",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "flxTranSkin",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flexContainer999296733165488.setDefaultUnit(kony.flex.DP)
    flexContainer999296733165488.add(button999296733165490, label999296733165492);
    var segment2999296733167357box = new kony.ui.FlexContainer({
        "id": "segment2999296733167357box",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segment2999296733167357 = new kony.ui.SegmentedUI2({
        "id": "segment2999296733167357",
        "top": "10%",
        "left": "0dp",
        "width": "100%",
        "height": "90%",
        "zIndex": 1,
        "isVisible": true,
        "retainSelection": false,
        "widgetDataMap": {
            "lblProd5": "lblProd5",
            "flxSegMain": "flxSegMain",
            "imgProd": "imgProd",
            "lblProd3": "lblProd3",
            "rowPageView": "rowPageView",
            "lblProd4": "lblProd4",
            "lblProd1": "lblProd1",
            "lblProd2": "lblProd2"
        },
        "Location": "[0,45]",
        "rowTemplate": flxSegMain,
        "rowSkin": "seg2Normal",
        "rowFocusSkin": "seg2Focus",
        "sectionHeaderSkin": "seg2Header",
        "separatorRequired": true,
        "separatorThickness": 1,
        "separatorColor": "64646400",
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "groupCells": false,
        "pageOnDotImage": "pageon.png",
        "pageOffDotImage": "pageoff.png",
        "needPageIndicator": true,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    segment2999296733167357box.add();
    frmsegMutliPageView.add(flexContainer999296733165488, segment2999296733167357);
    frmsegMutliPageView.setDefaultUnit(kony.flex.DP);
};

function frmsegMutliPageViewGlobals() {
    var MenuId = [];
    frmsegMutliPageView = new kony.ui.Form2({
        "id": "frmsegMutliPageView",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBGColor1",
        "postShow": frmsegMutliPageView_frmsegMutliPageView_postshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmsegMutliPageView
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