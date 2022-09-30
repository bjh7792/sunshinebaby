$(function () {
  var url = location.href
  var category //page1-1
  if (url.match('page1-1')) {
    category = 1
  }else if(url.match('page1-2')){
    category = 1
  }else if(url.match('page2-1')){
    category = 2
  }else if(url.match('page2-2')){
    category = 2
  }else if(url.match('page3-1')){
    category = 3
  }else if(url.match('page4-1')){
    category = 4
  }else if(url.match('page5-1')){
    category = 5
  }else if(url.match('page5-2')){
    category = 5
  }else if(url.match('page5-3')){
    category = 5
  }


  $('.snb .menu' + category).show()
})