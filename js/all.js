$(document).ready(function(){
    //選單動畫
    $(window).on("scroll",function(){
        if($(this).scrollTop()>100){
            $(".menu").removeClass("extend").addClass("shirk");
        }else {
            $(".menu").removeClass("shirk").addClass("extend");
        }
    })

    // 漢堡選單
    $(".burgerMenu").click(function(e){
        e.preventDefault();
        $(this).parent().parent().parent().siblings(".burgerList").addClass("burgerList-active");
    })
    $(".burgerClose").click(function(e){
        e.preventDefault();
        $(this).parent().parent().removeClass("burgerList-active");
    })

    //back to top
    $(".go-top").hide();

    $(window).on("scroll", function () {
      if($(this).scrollTop() > 100){
        $(".go-top").fadeIn("fast");
      } else {
        $(".go-top").fadeOut("fast");
      }
    });

    $(".go-top").click(function(e){
      e.preventDefault();
      $("html,body").animate({ scrollTop: 0 }, 600);
    })

    //project filter
    $(".filter-item").click(function(){
        let value = $(this).attr("data-filter");
        if(value == "all"){
            $(".project").show("1000"); 
        }else{
            $(".project").not("."+value).hide("1000");
            $(".project").filter("."+value).show("1000");
        }
    })
    //project filter btn
    $(".filter-item").click(function(){
        $(this).removeClass("btn-outline-gray-500").addClass("btn-primary");
        $(this).siblings().removeClass("btn-primary").addClass("btn-outline-gray-500");
    })

    //project頁
    //swiper
    function initSwiper() {  
    var swiper = new Swiper(".mySwiper", {
      /*  預設要顯示幾個卡片 */
      slidesPerView: 3,
      /* 斷點設定 */
      breakpoints: {
        /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
        992: {
          slidesPerView: 3
        },
        /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
        768: {
          slidesPerView: 2
        },
        /* 更小時都顯示 1 欄 */
        0: {
          slidesPerView: 1
        }
      },
      /* 卡片元素的間隔 */
      spaceBetween: 16,
    //   loop: true,
      pagination: {
        /* 想將分頁圓點綁在哪個 class */
        el: ".swiper-pagination",
        /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    });
  } ;
  /* 觸發自己定義的函式 */
  initSwiper();
  
  
})