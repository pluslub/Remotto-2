/* ------------------------------------- */
/* ヘッダーとナビゲーションメニュー */
/* ------------------------------------- */

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('js-hamburger');
    const navMenu = document.getElementById('js-nav-menu');
    const content = document.getElementById('js-content');

    // ハンバーガーアイコンがクリックされたときの処理
    hamburger.addEventListener('click', function() {
        // hamburger要素自身にactiveクラスをトグル
        hamburger.classList.toggle('active');
        
        // ナビゲーションメニューにactiveクラスをトグル
        navMenu.classList.toggle('active');

        // メインコンテンツにactiveクラスをトグル（背景効果用）
        content.classList.toggle('active');
        
        // メニュー開閉時にbodyのスクロールを制御
        if (navMenu.classList.contains('active')) {
            // メニューが開いているときはスクロール禁止
            document.body.style.overflow = 'hidden';
        } else {
            // メニューが閉じているときはスクロール許可
            document.body.style.overflow = '';
        }
    });
    
    // メニューが開いている状態で、メニュー以外の部分（content）をクリックしたときの処理
    content.addEventListener('click', function() {
        if (navMenu.classList.contains('active')) {
            // メニューを閉じる
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            content.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});



/* ------------------------------------- */
/* スライダー */
/* ------------------------------------- */

$(document).ready(function(){
    $('.test-slick').slick({
      // 基本設定 (デスクトップなど、デフォルトの表示)
        autoplay: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3, // デスクトップの表示に合わせて調整
        slidesToScroll: 1,

        //レスポンシブ設定
        responsive: [
            {
                breakpoint: 960, // スマートフォンやタブレットのブレイクポイント
                settings: {
                    // **スライドの表示枚数を1枚に設定**
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false, 
                    centerMode: false, 
                }
            }
        ]
    });
});