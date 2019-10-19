
$(function(){
	console.log(window.location.href)
	
	//切换登录框
	$('.go_login').click(function(){
		$('#sign').hide();
		$('#login').css('display','flex');
	})
	
	//切换注册框
	$('.go_sign').click(function(){
		$('#login').hide();
		$('#sign').css('display','flex');
	})
	
	//点击登录注册弹框  防止时间冒泡
	$('.login_kuang').click(function(e){
		e.stopPropagation();
	})
	//点击登录幕布关闭幕布
	$('.login_mb_wrap').click(function(){
		$(this).hide();
	})
	
	//鼠标经过瀑布流  显示收藏分享按钮
	$('.i_type_li').hover(function(e){
		var left = ($(this).width()/2)+this.offsetLeft - 7;
		$('.itype_jtss').css('left',left+'px');
		$('.itype_jtss').show();
		$(this).children('div[class=i_typekk]').show();
	},function(e){
		
		$('.itype_jtss').hide();
		$(this).children('div[class=i_typekk]').hide();
	})
	
	//瀑布流点击三个点显示更多
	$('.i_cont_bico').click(function(e){
		e.stopPropagation();
		if($(this).children('div[class=i_tk_wrap]').is(':hidden')){
			$('.i_tk_wrap').hide();
			$(this).children('div[class=i_tk_wrap]').show();
		}else{
			$(this).children('div[class=i_tk_wrap]').hide();
		}
	})
	
	//点击搜索框
	$('.i_srch_sel').click(function(e){
		e.stopPropagation();
		
		if($('#searchTk').is(':hidden')){
			$('#searchTk').show();
		}else{
			$('#searchTk').hide();
		}
	})
	
	//点击导航user弹出userinfo
	$('.user_wrap').click(function(e){
		e.stopPropagation();
		if($('#userinfo').is(':hidden')){
			$('#userinfo').show();
		}else{
			$('#userinfo').hide();
		}
	})
	
	//点击导航通知弹出通知列表
	$('.tz_but').click(function(e){
		e.stopPropagation();
		if($('#xxList').is(':hidden')){
			$('#xxList').show();
		}else{
			$('#xxList').hide();
		}
	})
	
	//点击导航通知弹出通知列表
	$('.gd_but').click(function(e){
		e.stopPropagation();
		if($('#gdList').is(':hidden')){
			$('#gdList').show();
		}else{
			$('#gdList').hide();
		}
	})
	
	
	$('.i_search_inp').on('focus',function(){
		$('.search_mb').show();
		$('.i_sear_tks').show();
	})
	$('.i_search_inp').click(function(){
		event.stopPropagation();
	})
	
	$('.xxs_but').click(function(e){
		e.stopPropagation();
		if($('.xx_tks_wrap').is(':hidden')){
			$('.xx_tks_wrap').show();
			$('.xx_tks_wrap').animate({right:'0px'})
		}else{
			$('.xx_tks_wrap').hide();
			$('.xx_tks_wrap').css('right','-392px')
		}
	})
	
	
//	$('.i_search_inp').on('blur',function(){
//		$('.search_mb').hide();
//	})


	//关闭所有除自己以外的弹框
	$('*').not(':hidden').click(function(){
		closeAll(this);
	})
	function closeAll(_this){
		//关闭导航栏 userinfo
		if(!$(_this).is($('.user_wrap'))){
			$('#userinfo').hide();
		}
		//关闭瀑布流三个点弹框
		if(!$(_this).is($('.i_cont_bico'))){
			$('.i_tk_wrap').hide();
		}
		//关闭导航栏 通知消息弹框
		if(!$(_this).is($('.tz_but'))){
			$('#xxList').hide();
		}
		//关闭导航栏 通知消息弹框
		if(!$(_this).is($('.gd_but'))){
			$('#gdList').hide();
		}
		
		//关闭导航栏 通知消息弹框
		if(!$(_this).is($('.gd_but'))){
			$('#gdList').hide();
		}
		
		//关闭导航栏 通知消息弹框
		if(!$(_this).is($('.i_search_inp'))){
			$('.search_mb').hide();
			$('.i_sear_tks').hide();
		}
		
		if(!$(_this).is($('.xxs_but'))){
			$('.xx_tks_wrap').hide();
			$('.xx_tks_wrap').css('right','-392px')
		}
		
		//关闭导航栏 搜索框下拉条件
		if(!$(_this).is($('.i_srch_sel'))){
			$('#searchTk').hide();
		}
		
		//关闭导航栏 搜索框下拉条件
		if(!$(_this).is($('.me_upfb_sel'))){
			$('.me_upxz_wrap').hide();
		}
		
		//关闭评论更多选项弹框
		if(!$(_this).is($('.tp_gbicos'))){
			$('.plli_more_wraps').hide();
		}
		
		//关闭图片详情的三个点弹框
		if(!$(_this).parent().is($('.photo_det_more'))){
			$('.pho_dmore_tks').hide();
		}
		
		
	}
	
	$('.i_search_inp').bind('input',function(){
		
		if($(this).val().length){
			$('.clear_inptext').css('display','flex')
		}else{
			$('.clear_inptext').hide();
		}
	})
	
	//点击切换搜索条件
	$('.seartk_wlis').click(function(e){
		$('.i_srch_sel').children('span').html($(this).html());
	})
	
	//防止三个点更多事件冒泡
	$('.i_tk_wrap,.xx_tks_wrap').click(function(e){
		e.stopPropagation()
	})
	
	//点击发送按钮弹出 私信框
	$('.xx_fs_but').click(function(){
		$('.xx_tks_wrap').hide();
		$('.xx_tks_wrap').css('right','-392px');
		$('.sx_mb_wrap').css('display','flex');
	})
	
	//点击图片举报
	$('.itk_jb').click(function(e){
		$(this).parent().hide();
		$('.jb_mb_wrap').css('display','flex');
	})
	
	//点击取消 X 关闭举报图片弹框
	$(".close_jbtp,.jb_qx,.xsx_xq_but").on("click",function(){
		$('.jb_mb_wrap').hide();
		$('.sx_mb_wrap').hide();
	})
	
	
	$('.i_fx_wrap').click(function(){
		$('.fx_mb_wrap').css('display','flex');
	})
	
	//点击叉号关闭分享幕布
	$('.close_fxmb').click(function(){
		$('.fx_mb_wrap').hide();
	})
	
	//关闭收藏幕布
	$('.close_sc_mb').click(function(){
		$('.sc_mb_wrap').hide();
	})
	
	
	/*点击收藏弹出收藏框*/
	$('.me_upfb_sel').click(function(){
		$('.sc_mb_wrap').css('display','flex');
	})
	
})
