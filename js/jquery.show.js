
/*定义数据*/
var dataList = 	["经销商1","经销商2","经销商3","经销商4","经销商5","经销商6"];
var dataList2 =  ["岗位1","岗位2","岗位3"];
var typeList=["类型1","类型2","类型3"];
var objectList=["对象1","对象2","对象3"];
var expressShow, showCont, showList = $("#showList"), showTop = showList.offset().top;

/*初始化省份*/
function intdataList(tag) {
	showCont = "";
	if(tag==1){
		for (var i=0; i<dataList.length; i++) {
			showCont += '<li onClick="selectP(' + i + ','+tag+');">' + dataList[i] + '</li>';
		}
	}else if(tag==2){
		for (var i=0; i<dataList2.length; i++) {
			showCont += '<li onClick="selectP(' + i + ','+tag+');">' + dataList2[i] + '</li>';
		}
	}else if(tag==3){
		for (var i=0; i<typeList.length; i++) {
			showCont += '<li onClick="selectP(' + i + ','+tag+');">' + typeList[i] + '</li>';
		}
	}else if(tag==4){
		for (var i=0; i<objectList.length; i++) {
			showCont += '<li onClick="selectP(' + i + ','+tag+');">' + objectList[i] + '</li>';
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
	}else if(tag==2){
		expressShow = dataList2[p];
		$("#expressShow2").val(expressShow);
	}else if(tag==3){
		expressShow = typeList[p];
		$("#type").val(expressShow);
	}else if(tag==4){
		expressShow = objectList[p];
		$("#release").val(expressShow);
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
	$("#type").click(function() {
		intdataList(3);
		$("#showMask").fadeIn();
		$("#showLayer").animate({"bottom": 0});	
	});
	$("#release").click(function() {
		intdataList(4);
		$("#showMask").fadeIn();
		$("#showLayer").animate({"bottom": 0});	
	});
	/*关闭选项*/
	$("#showMask, #closeShow").click(function() {
		clockShow();
	});
	
});