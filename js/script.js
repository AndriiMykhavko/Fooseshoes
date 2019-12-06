// form button
jQuery(document).ready(function ($){
  $('button.input-button').on('click', function (){
    $('input').toggleClass('input-width');
  });
});
//list style button
jQuery(document).ready(function ($){
      $('.right-content button').on('click', function () {
        $('.right-content button').removeClass('active');
        $(this).addClass('active');
      });
      $('button.list').on('click', function (){
        $('.ware .col-sm-4').addClass('ware-list');
      });
      $('button.blocks').on('click', function (){
        $('.ware .col-sm-4').removeClass('ware-list');
      });
    });
//form-drop-down
jQuery(document).ready(function ($){
  $('form#input-search input').on('click', function (){
    $('ul.form-drop-down').toggleClass('display');
  });
});
//news-5s
var newsIndex = 1;
var nIndex = 2;
function NewsRotator() {
  $(".newss").hide();
  $(".newss" + newsIndex).show(700);
  $(".newss" + nIndex).show(900);
  
  var newsCount = 3;
  nIndex++;
  newsIndex++;
  if(newsIndex > newsCount || nIndex > newsCount) {
    newsIndex = 1;
    nIndex = 2;
  }
}
$(document).ready(function() {
  NewsRotator();
  setInterval(NewsRotator, 5000);
});
//flick
$(document).ready(function() {
var atr = [];

         for(i=1; i<7; i++){
            var str = $("#flickr_badge_image"+ i + " " + "a img").attr("src");
            str = str.slice(0, -5)+"z.jpg";
            atr[i] = str;
         }
    $(".flickr_badge_image a").removeAttr("href");

     $(".flickr_badge_image").click(function(){
        //alert(parseInt(($(this).attr("id")).replace(/\D+/g,""))+" src=" + atr[parseInt(($(this).attr("id")).replace(/\D+/g,""))]);
        var num = parseInt(($(this).attr("id")).replace(/\D+/g,""));
    
    $('header').prepend('<div id="open-img"><img  src=' + atr[num] +' alt="" width="950" height="500"></div>');  
    
     $("#open-img").click(function(){
         $('#open-img').remove();
    }); 
 });
});