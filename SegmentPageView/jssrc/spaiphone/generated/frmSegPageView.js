//Form JS File
function frmSegPageView_frmSegPageView_postshow_seq0(eventobject) {
    segPageViewData.call(this);
};

function frmSegPageView_button999296733165329_onClick_seq0(eventobject) {
    frmHome.show();
};

function frmSegPageView_segment2999296733165332_onswipe_seq0(seguiWidget, sectionIndex, rowIndex) {
    onSwipe.call(this, seguiWidget, sectionIndex, rowIndex);
};

function addWidgetsfrmSegPageView() {
    var button999296733165329 = new kony.ui.Button({
        "id": "button999296733165329",
        "top": "0dp",
        "left": "0dp",
        "width": "25%",
        "height": "100%",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "skin": "btnBackSkin",
        "focusSkin": "btnFocus",
        "onClick": frmSegPageView_button999296733165329_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var label999296733165330 = new kony.ui.Label({
        "id": "label999296733165330",
        "top": "0dp",
        "left": "25%",
        "width": "100%",
        "height": "100.0%",
        "centerX": "50.0%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Segment With PageView",
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
    var flexContainer999296733165328 = new kony.ui.FlexContainer({
        "id": "flexContainer999296733165328",
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
    flexContainer999296733165328.setDefaultUnit(kony.flex.DP)
    flexContainer999296733165328.add(button999296733165329, label999296733165330);
    var segment2999296733165332box = new kony.ui.FlexContainer({
        "id": "segment2999296733165332box",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segment2999296733165332 = new kony.ui.SegmentedUI2({
        "id": "segment2999296733165332",
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
        "data": [{
            "lblProd5": "Label",
            "imgProd": "kony.png",
            "lblProd3": "Label",
            "lblProd4": "Label",
            "lblProd1": "Label",
            "lblProd2": "Label"
        }],
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
        "onSwipe": frmSegPageView_segment2999296733165332_onswipe_seq0,
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    segment2999296733165332box.add();
    frmSegPageView.add(flexContainer999296733165328, segment2999296733165332);
    frmSegPageView.setDefaultUnit(kony.flex.DP);
};

function frmSegPageViewGlobals() {
    var MenuId = [];
    frmSegPageView = new kony.ui.Form2({
        "id": "frmSegPageView",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBGColor1",
        "postShow": frmSegPageView_frmSegPageView_postshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmSegPageView
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