$(function(){
  responsive_carousel_horz(".home-main", false, 8000, 15000)
  var t

  function motion(){
    $('.home-inner1 ul li').each(function(){
      t = $(this).offset().top
      if(scrt >= t - winh){
        $(this).addClass('active')
      }else{
        $(this).removeClass('active')
      }//if else
    })//each
  }//fn

  motion()

  $(window).resize(function(){
    motion()
  }).scroll(function(){
    motion()
  })
})//ready