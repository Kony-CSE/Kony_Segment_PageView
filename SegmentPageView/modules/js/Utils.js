function segPageViewData()
{
	frmSegPageView.segment2999296733165332.widgetDataMap={imgProd:"imgProd", lblProd1:"lblProd1", lblProd2:"lblProd2", lblProd3:"lblProd3", lblProd4:"lblProd4", lblProd5:"lblProd5"};
	
	var masterTable=[
						{imgProd:"kony.png", lblProd1:"Kony India", lblProd2:"Vis Enterprise", lblProd3:"Vis Starter", lblProd4:"MADP/MF", lblProd5:"Mobile Application Development"},
						{imgProd:"objectivec.png", lblProd1:"Apple", lblProd2:"Objective-c", lblProd3:"swift", lblProd4:"Xcode", lblProd5:"iOS Application developement"},
						{imgProd:"androidlogo.png", lblProd1:"Google", lblProd2:"Android", lblProd3:"Gradle", lblProd4:"Android SDK", lblProd5:"Android Application developement"},
						{imgProd:"blackberry.png", lblProd1:"Blackberry", lblProd2:"BB", lblProd3:"BB", lblProd4:"BB", lblProd5:"BB application developement"},
						{imgProd:"windows.png", lblProd1:"Windows", lblProd2:"Windows", lblProd3:"Windows", lblProd4:"Visual Plus", lblProd5:"Win application developement"},
						{imgProd:"html.png", lblProd1:"HTML5", lblProd2:"HTML5", lblProd3:"HTML5", lblProd4:"HTML5", lblProd5:"Web Page designing"},
						{imgProd:"nodejs.png", lblProd1:"nodeJS", lblProd2:"nodeJS", lblProd3:"nodeJS", lblProd4:"nodeJS", lblProd5:"Web application developement"},
						{imgProd:"javascript.png", lblProd1:"JavaScript", lblProd2:"JavaScript", lblProd3:"JavaScript", lblProd4:"JavaScript", lblProd5:"Web applicationd development"}
					];
	frmSegPageView.segment2999296733165332.setData(masterTable);
	frmSegPageView.segment2999296733165332.pageSkin=SknPageIndicator;			
}

function onSwipe(seguiWidget, sectionIndex, rowIndex)
{
	alert("SectionIndex:"+sectionIndex+", rowIndex:"+rowIndex);	
}

function segMultiPageViewData()
{
	kdv_createChartWidget();
	frmsegMutliPageView.segment2999296733167357.widgetDataMap={imgProd:"imgProd", lblProd1:"lblProd1", lblProd2:"lblProd2", lblProd3:"lblProd3", lblProd4:"lblProd4", lblProd5:"lblProd5",
															   img1:"img1", img2:"img2", img3:"img3", img4:"img4", img5:"img5", img6:"img6", img7:"img7", img8:"img8",
																lblChartTitle:"lblChartTitle"};
															   
	frmsegMutliPageView.segment2999296733167357.rowTemplate=flxSegMain;
	frmsegMutliPageView.segment2999296733167357.rowTemplate=flxChart;
	frmsegMutliPageView.segment2999296733167357.rowTemplate=flxView3;
	
	var masterTable=[
						{imgProd:"kony.png", lblProd1:"Kony India", lblProd2:"Vis Enterprise", lblProd3:"Vis Starter", lblProd4:"MADP/MF", lblProd5:"Mobile Application Development", template:flxSegMain},
						{img1:"kony.png", img2:"objectivec.png", img3:"androidlogo.png", img4:"blackberry.png", img5:"windows.png", img6:"html5.png", img7:"nodejs.png", img8:"javascript.png", template:flxView3},
						{lblChartTitle:"Donut Chart", template:flxChart}
					];
	frmsegMutliPageView.segment2999296733167357.setData(masterTable);	
	frmsegMutliPageView.segment2999296733167357.pageSkin=SknPageIndicator;		
}

function segCoverFlowPageViewData()
{
	frmSegCoverFlow.segment2999296733167794.widgetDataMap={imgProd:"imgProd", lblProd1:"lblProd1", lblProd2:"lblProd2", lblProd3:"lblProd3", lblProd4:"lblProd4", lblProd5:"lblProd5"};
	
	var masterTable=[
						{imgProd:"kony.png", lblProd1:"Kony India", lblProd2:"Vis Enterprise", lblProd3:"Vis Starter", lblProd4:"MADP/MF", lblProd5:"Mobile Application Development"},
						{imgProd:"objectivec.png", lblProd1:"Apple", lblProd2:"Objective-c", lblProd3:"swift", lblProd4:"Xcode", lblProd5:"iOS Application developement"},
						{imgProd:"androidlogo.png", lblProd1:"Google", lblProd2:"Android", lblProd3:"Gradle", lblProd4:"Android SDK", lblProd5:"Android Application developement"},
						{imgProd:"blackberry.png", lblProd1:"Blackberry", lblProd2:"BB", lblProd3:"BB", lblProd4:"BB", lblProd5:"BB application developement"},
						{imgProd:"windows.png", lblProd1:"Windows", lblProd2:"Windows", lblProd3:"Windows", lblProd4:"Visual Plus", lblProd5:"Win application developement"},
						{imgProd:"html.png", lblProd1:"HTML5", lblProd2:"HTML5", lblProd3:"HTML5", lblProd4:"HTML5", lblProd5:"Web Page designing"},
						{imgProd:"nodejs.png", lblProd1:"nodeJS", lblProd2:"nodeJS", lblProd3:"nodeJS", lblProd4:"nodeJS", lblProd5:"Web application developement"},
						{imgProd:"javascript.png", lblProd1:"JavaScript", lblProd2:"JavaScript", lblProd3:"JavaScript", lblProd4:"JavaScript", lblProd5:"Web applicationd development"}
					];
	frmSegCoverFlow.segment2999296733167794.setData(masterTable);
	frmSegCoverFlow.segment2999296733167794.pageSkin=SknPageIndicator;		
}