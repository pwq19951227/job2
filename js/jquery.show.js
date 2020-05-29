
/*定义数据*/
var dataList = 	["经销商1","经销商2","经销商3","经销商4","经销商5","经销商6"];
var dataList2 =  ["岗位1","岗位2","岗位3"];
var expressShow, showCont, showList = $("#showList"), showTop = showList.offset().top;

/*初始化省份*/
function intdataList(tag) {
	showCont = "";
	if(tag==1){
		$("#showLayer h3").html("经销商名称");
		for (var i=0; i<dataList.length; i++) {
			showCont += '<li onClick="selectP(' + i + ','+tag+');">' + dataList[i] + '</li>';
		}
	}else{
		$("#showLayer h3").html("岗位名称");
		for (var i=0; i<dataList2.length; i++) {
			showCont += '<li onClick="selectP(' + i + ','+tag+');">' + dataList2[i] + '</li>';
		}
	}
	
	showList.html(showCont);
	$("#showBox").scrollTop(0);
}

/*选择*/
function selectP(p,tag) {
	showCont = "";
	showList.html("");
	showList.html(showCont);
	$("#showBox").scrollTop(0);
	if(tag==1){
		expressShow = dataList[p];
		$("#expressShow").val(expressShow);
	}else{
		expressShow = dataList2[p];
		$("#expressShow2").val(expressShow);
	}
	clockShow();
}


/*关闭选项*/
function clockShow() {
	$("#showMask").fadeOut();
	$("#showLayer").animate({"bottom": "-100%"});
	$("#showBox").scrollTop(0);
}

$(function() {
	/*打开选项*/
	$("#expressShow").click(function() {
		intdataList(1);
		$("#showMask").fadeIn();
		$("#showLayer").animate({"bottom": 0});
		
	});
	/*打开选项*/
	$("#expressShow2").click(function() {
		intdataList(2);
		$("#showMask").fadeIn();
		$("#showLayer").animate({"bottom": 0});	
	});
	/*关闭选项*/
	$("#showMask, #closeShow").click(function() {
		clockShow();
	});
	
});