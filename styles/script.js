$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

$(window).scroll(function(){
    var top = $(".hero").offset().top; // ターゲットの位置取得
    var position = top - $(window).height();  // 発火させたい位置
    if($(window).scrollTop() > position){
      // 要素が見えたときの動き 
      $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    }else{
      // それ以外の動き
      //$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
      //$("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    }
  })