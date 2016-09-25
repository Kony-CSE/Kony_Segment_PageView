//Form JS File
function frmSegCoverFlow_frmSegCoverFlow_postshow_seq0(eventobject) {
    segCoverFlowPageViewData.call(this);
};

function frmSegCoverFlow_button999296733167460_onClick_seq0(eventobject) {
    frmHome.show();
};

function frmSegCoverFlow_segment2999296733167794_onswipe_seq0(seguiWidget, sectionIndex, rowIndex) {
    onSwipe.call(this, seguiWidget, sectionIndex, rowIndex);
};

function addWidgetsfrmSegCoverFlow() {
    var button999296733167460 = new kony.ui.Button({
        "id": "button999296733167460",
        "top": "0dp",
        "left": "0dp",
        "width": "25%",
        "height": "100%",
        "zIndex": 2,
        "isVisible": true,
        "text": null,
        "skin": "btnBackSkin",
        "focusSkin": "btnFocus",
        "onClick": frmSegCoverFlow_button999296733167460_onClick_seq0
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {});
    var label999296733167462 = new kony.ui.Label({
        "id": "label999296733167462",
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
    var flexContainer999296733167458 = new kony.ui.FlexContainer({
        "id": "flexContainer999296733167458",
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
    flexContainer999296733167458.setDefaultUnit(kony.flex.DP)
    flexContainer999296733167458.add(button999296733167460, label999296733167462);
    var segment2999296733167794box = new kony.ui.FlexContainer({
        "id": "segment2999296733167794box",
        "isVisible": true,
        "orientation": null,
        "width": "100%",
        "height": "40dp",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "containerWeight": null
    }, {});
    var segment2999296733167794 = new kony.ui.SegmentedUI2({
        "id": "segment2999296733167794",
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
        "pageOnDotImage": null,
        "pageOffDotImage": null,
        "needPageIndicator": true,
        "onSwipe": frmSegCoverFlow_segment2999296733167794_onswipe_seq0,
        "viewConfig": {
            "coverflowConfig": {
                "projectionAngle": 60,
                "isCircular": true
            }
        },
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});
    segment2999296733167794box.add();
    frmSegCoverFlow.add(flexContainer999296733167458, segment2999296733167794);
    frmSegCoverFlow.setDefaultUnit(kony.flex.DP);
};

function frmSegCoverFlowGlobals() {
    var MenuId = [];
    frmSegCoverFlow = new kony.ui.Form2({
        "id": "frmSegCoverFlow",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frmBGColor1",
        "postShow": frmSegCoverFlow_frmSegCoverFlow_postshow_seq0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmSegCoverFlow
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