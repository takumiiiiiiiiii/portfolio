$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});
var awake=true;
window.onload = function(){
    // 青の移動
    var before = document.getElementById('Before');
    Before.style.width = '70%';
    // ピンクの移動
    var after = document.getElementById('After');
    after.style.width = '100%';
    // ヒーローテキストの移動
    $(".hero-text").css({ 'right' : '0%'  } );
    }
var item1=true;
var item2=true;
var item3=true;
$(window).scroll(function(){
  
        var top = $("#contents1").offset().top; // ターゲットの位置取得
        var position = top - $(window).height();  // 発火させたい位置
        if($(window).scrollTop() > position&&item1==true){
          // 要素が見えたときの動き 
          console.log("fafafa")
          $("#contents1").css({ 'left' : '0px'  } );
          item1=false;
        }else{
          // それ以外の動き
        }

        var top = $("#contents2").offset().top; // ターゲットの位置取得
        var position = top - $(window).height();  // 発火させたい位置
        if($(window).scrollTop() > position&&item2==true){
          // 要素が見えたときの動き 
          console.log("fafafa")
          $("#contents2").css({ 'right' : '0px'} );
          item2=false;
        }else{
          // それ以外の動き
        }

        var top = $("#contents3").offset().top; // ターゲットの位置取得
        var position = top - $(window).height();  // 発火させたい位置
        if($(window).scrollTop() > position&&item3==true){
          // 要素が見えたときの動き 
          console.log("fafafa")
          $("#contents3").css({ 'left' : '0px'  } );
          item3=false;
        }else{
          // それ以外の動き
        }
      })