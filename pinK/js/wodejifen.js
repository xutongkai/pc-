$(function(){
//	点击我的评分
	$("#wodejifen").click(function(){
		$("#wodejifen div").css("color","#333");
		$("#wodejifen img").attr("src","img/shop_ico_jifened@2x.png");
		$("#wodedingdan div").css("color","#999");
		$("#wodedingdan img").attr("src","img/shop_ico_order@2x.png");
		$("#shouhuodizhidiv").css("color","#999");
		$("#shouhuodizhi img").attr("src","img/shop_ico_address@2x.png");
		$(".wodejifen").show();
		$(".wodedingdan").hide();
		$(".shouhuodizhi").hide();
	})
	//我的订单
	$("#wodedingdan").click(function(){
		$("#wodejifen div").css("color","#999");
		$("#wodejifen img").attr("src","img/shop_ico_jifen@2x.png");
		$("#wodedingdan div").css("color","#333");
		$("#wodedingdan img").attr("src","img/shop_ico_ordered@2x.png");
		$("#shouhuodizhi div").css("color","#999");
		$("#shouhuodizhi img").attr("src","img/shop_ico_address@2x.png");
		$(".wodejifen").hide();
		$(".wodedingdan").show();
		$(".shouhuodizhi").hide();
	})
//	收货地址
	$("#shouhuodizhi").click(function(){
		$("#wodejifen div").css("color","#999");
		$("#wodejifen img").attr("src","img/shop_ico_jifen@2x.png");
		$("#wodedingdan div").css("color","#999");
		$("#wodedingdan img").attr("src","img/shop_ico_order@2x.png");
		$("#shouhuodizhi div").css("color","#333");
		$("#shouhuodizhi img").attr("src","img/shop_ico_addressed@2x.png");
		$(".wodejifen").hide();
		$(".wodedingdan").hide();
		$(".shouhuodizhi").show();
	})
})
