// テスト用
// $(".en-copy").css("color","red");

jQuery(function ($) {

    // スティッキーヘッダー
    var win = $(window),
        header = $(".header"),
        fv = $("fv"),
        fvPosi = $(".fv").height();
    // console.log(fvPosi);


    win.on("scroll load resize", function () {
        var scr = win.scrollTop();
        console.log(win.width());
        if (win.width() > 768) {
            // header-navは改めて表示
            $('.header-nav').fadeIn();
            if (fvPosi < scr) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
            // スライダー(bgSwitcherでの作成)
            // $(".fv").bgSwitcher({
            //     images: ['./img/fv-bgi_01@2x.jpg', './img/fv-bgi_02@2x.jpg', './img/fv-bgi_03@2x.jpg'],
            //     interval: 3000, // 背景画像を切り替える間隔を指定 3000=3秒
            //     loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
            //     shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
            //     effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
            //     duration: 500, // エフェクトの時間を指定します。
            //     easing: "swing" // エフェクトのイージングをlinear,swingから指定
            // });
        }
    })
    // スライダー
    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        fade: true,
        cssEase: "linear",
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false
    });
    //ハンバーガーボタン押下
    // action of pushing on a burger-botton
    $('.burger-btn').on('click', function () {
        $('body').toggleClass('noscroll');//bodyにnoscrollクラスを付与(スクロールを固定)
        $(this).toggleClass('close');
        $('.header-nav').fadeToggle();
    });

    // action of pushing on a header-nav
    if (win.width() < 768) {
        $('.header-nav').on("click", function () {
            $('.header-nav').fadeToggle();
            $('body').toggleClass('noscroll');
            $('.burger-btn').toggleClass('close');    
        });
    }
});
