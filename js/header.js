$(function () {
  $('.gnb-lg>ul>li').mouseenter(function(){
    $(this).children('ul').stop().slideDown(200)
  }).mouseleave(function(){
    $(this).children('ul').stop().slideUp(200)
  })
  
  $('.mbtn').click(function(){
    $('.mbtn').toggleClass('active')
    $('.gnb-sm').stop().slideToggle(200)
    $('.gnb-sm>ul>li>ul').stop().slideUp()
    $('.gnb-sm>ul>li>ul>li').removeClass('active')
  })

  $('.gnb-sm>ul>li>a').click(function(e){
    e.preventDefault()
    $('.gnb-sm>ul>li>ul').stop().slideUp()
    $(this).siblings('ul').stop().slideToggle()
    $(this).parent().siblings('li').children('a').removeClass('active')
    $(this).toggleClass('active')
  })
  
  

  /* function headerMotion() {
    scrt = $(window).scrollTop()
    if (scrt >= 35) {
      $('header').addClass('active')
    } else {
      $('header').removeClass('active')
    }

    scrt = $(window).scrollTop()
    if (scrt >= 125) {
      $('header').addClass('active-bg')
    } else {
      $('header').removeClass('active-bg')
    }
    if (scrt >= 300) {
      $('.top-btn').fadeIn()
    } else {
      $('.top-btn').fadeOut()
    }
  }
  headerMotion()
  $(window).scroll(function () {
    headerMotion()
  }).resize(function () {
    headerMotion()
  })
  $('.top-btn').click(function(){
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }) */







})

