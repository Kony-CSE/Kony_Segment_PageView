//Template File
function initializerowPageView2() {
    var lblChartTitle = new kony.ui.Label({
        "id": "lblChartTitle",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "10%",
        "zIndex": 1,
        "isVisible": true,
        "text": "Label",
        "skin": "lblNormal"
    }, {
        "padding": [0, 0, 0, 0],
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 0
    }, {
        "textCopyable": false
    });
    var flxMainChart = new kony.ui.FlexContainer({
        "id": "flxMainChart",
        "top": "10%",
        "left": "0dp",
        "width": "100%",
        "height": "90%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,45]",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxMainChart.setDefaultUnit(kony.flex.DP)
    flxMainChart.add();
    flxChart = new kony.ui.FlexContainer({
        "id": "flxChart",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100%",
        "zIndex": 1,
        "isVisible": true,
        "clipBounds": true,
        "Location": "[0,0]",
        "skin": "flxTranSkin",
        "layoutType": kony.flex.FREE_FORM
    }, {
        "padding": [0, 0, 0, 0]
    }, {});;
    flxChart.setDefaultUnit(kony.flex.DP)
    flxChart.add(lblChartTitle, flxMainChart);
};