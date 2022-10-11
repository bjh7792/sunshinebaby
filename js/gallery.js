
$(function () {
  $(window).load(function () {
    $('.page3-2 ul').masonry({ itemSelector: '.page3-2 ul li' })
  })

})
/* ---------------------------------- */
$(window).load(function(){
  var $container = $('.page3-4 ul');
  var filterSelect ="*"
  fn_isotope()
  function fn_isotope(){
    $container.isotope({
      filter: filterSelect,
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }//animationOptions
    })//isotope
  }//fn
  $('.page3-4btn button').click(function(){
    $('.page3-4btn button').removeClass('active')
    $(this).addClass('active')
    filterSelect = $(this).attr("data-cate")
    fn_isotope()
  })//click	
  $(window).resize(function(){
    fn_isotope()
  })//resize
})//load