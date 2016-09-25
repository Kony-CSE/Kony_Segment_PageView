//creating chart widget...
function kdv_createChartWidget() {
    var chartObj = kdv_createChartJSObject();
    var chartWidget = new kony.ui.Chart2D3D({
        "id": "chartid",
        "isVisible": true
    }, {
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "containerWeight": 100
    }, chartObj);
    flxChart.flxMainChart.add(chartWidget);
}
//creating chart object with chart properties and chart data...
function kdv_createChartJSObject() {
    var chartJSObj = {
        "chartProperties": {
            "drawEntities": ["donutChart"],
            "chartHeight": 100,
            "layerArea": {
                "background": {
                    "color": ["0xccccccff"]
                }
            },
            "holeRadius": 50,
            "donutChart": {
                "border": {
                    "line": {
                        "color": ["0xffffffff"]
                    }
                },
                "pieSlice": {
                    "color": ["0x3165cbff", "0xdc3812ff", "0xff9700ff", "0x11951bff", "0x990098ff", "0x0099c5ff"]
                },
                "dataLabels": {
                    "font": {
                        "size": [15],
                        "color": ["0xffffffff"]
                    }
                }
            }
        },
        "chartData": {
            "columnNames": {
                "values": ["2013"]
            },
            "data": {
                "2013": [25, 20, 14, 18, 17, 13]
            },
            "rowNames": {
                "values": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
            }
        }
    };
    return chartJSObj;
}