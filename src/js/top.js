var $toplist = $('.listLeft li');
var $ercodemar = $('.ercode');
var $carbtn = $('.carbtn');
var $carinfo = $('#carinfo')
var $spanNum = $('.carbtn span').text()
$toplist.on('mouseenter',function(){
    $(this).children().css('color','#ffffff')
})
$toplist.on('mouseout',function(){
    $(this).children().css('color','#b0b0b0')
})

$('.ercode').on('mouseenter',function(){
    $('.ercodemar').animate({
          height:148
    },200,'linear');
})
$('.ercodemar').on('mouseover',function(){
    $('.ercodemar').css('height','148px')
})
$('.ercodemar').on('mouseout',function(){
    $('.ercodemar').animate({
          height:0
    },200,'linear');
})
$carbtn.on('mouseenter',function(){
  $carinfo.slideToggle(300);
  if($spanNum == '0'){
    $carinfo.html('购物车中还没有商品，赶紧选购吧')
  }else{
    $carinfo.html('赶紧去交钱')
  }
})
$carbtn.on('mouseleave',function(){
  $carinfo.slideToggle(300);
})
