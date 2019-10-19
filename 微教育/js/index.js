$(function(){
//	$('.nav-ul-li').mouseover(function(){
//		$(this).css("border-bottom","2px solid #FFF");
//	})
//	$('.nav-ul-li').mouseout(function(){
//		$(this).css("border-bottom","none");
//	})
//导航条
	$('.a').mouseover(function(){
		$('.a .nav-ul-li-border').css("width","100%");
	})
	$('.a').mouseout(function(){
		$('.a .nav-ul-li-border').css("width","0");
	})
	$('.b').mouseover(function(){
		$('.b .nav-ul-li-border').css("width","100%");
	})
	$('.b').mouseout(function(){
		$('.b .nav-ul-li-border').css("width","0");
	})
	$('.c').mouseover(function(){
		$('.c .nav-ul-li-border').css("width","100%");
	})
	$('.c').mouseout(function(){
		$('.c .nav-ul-li-border').css("width","0");
	})
	$('.d').mouseover(function(){
		$('.d .nav-ul-li-border').css("width","100%");
	})
	$('.d').mouseout(function(){
		$('.d .nav-ul-li-border').css("width","0");
	})	

	
	
	

	$('.solution').mouseover(function(){
		$('.cpjj-eject').css("opacity","1");
		$('.cpjj-eject').show();
	})
	$('.solution').mouseout(function(){
		$('.cpjj-eject').css("opacity","0");
		$('.cpjj-eject').hide();
	})
	$('.cpjj-eject-empty').mouseover(function(){
		$('.cpjj-eject').css("opacity","1");
		$('.cpjj-eject').show();
	})
	$('.cpjj-eject-empty').mouseout(function(){
		$('.cpjj-eject').css("opacity","0");
		$('.cpjj-eject').hide();
	})
	$('.cpjj-eject').mouseover(function(){
		$('.cpjj-eject').css("opacity","1");
		$('.cpjj-eject').show();
	})
	$('.cpjj-eject').mouseout(function(){
		$('.cpjj-eject').css("opacity","0");
		$('.cpjj-eject').hide();
	})


//	免费开通弹出
	$('.swiper-slide-box-botton').click(function(){
		$('.eject2').show();
	})
	$('.swiper-pagination-nav-clear').click(function(){
		$('.eject2').show();
	})
	$('.moudule-buttom').click(function(){
		$('.eject2').show();
	})
	$('.zhaoshangjiameng-header-box-buttom').click(function(){
		$('.eject1').show();
	})


//	免费开通关闭
    $('.eject').click(function(){
    	$('.eject').hide();
    })
    $('.eject-box-img').click(function(){
    	$('.eject').hide();
    })
    $('.eject-box').click(function(){
    	return false
    })


//  学费带新手机切换图片
	$('.xufeidaixin-a').mousemove(function(){
		$('.a1').attr("src","img/ketangdongtai.png");
	})
	$('.xufeidaixin-b').mousemove(function(){
		$('.a1').attr("src","img/kehoudaka.png");
	})
	$('.xufeidaixin-c').mousemove(function(){
		$('.a1').attr("src","img/tongzhituisong.png");
	})
	
	$('.xufeidaixin-d').mousemove(function(){
		$('.a2').attr("src","img/xueyuanjiangli.png");
	})
	$('.xufeidaixin-e').mousemove(function(){
		$('.a2').attr("src","img/kehoudaka.png");
	})
	$('.xufeidaixin-f').mousemove(function(){
		$('.a2').attr("src","img/tongzhituisong.png");
	})
	
	
//	获取验证码
	$('.eject-box-lis-button').click(function(){
		var s = 10;
		$('.eject-box-lis-button').html(s + "秒");
		var timer = setInterval(function(){
			s--;
			$('.eject-box-lis-button').html(s + "秒");
			if(s<=0){
				$('.eject-box-lis-button').html("获取验证码");
				clearInterval(timer);
			}
		},1000)
	})
})
