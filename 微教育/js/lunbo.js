
$(function(){
    // 首页轮播切换
    var mySwiper = new Swiper ('.banner', {
        direction: 'horizontal',
        loop: true,
        autoplay:3000,
        speed:1000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
    });
})
