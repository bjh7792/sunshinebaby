$(function () {
  var url = location.href
  var category //page1-1
  if (url.match('page1-1')) {
    category = 1
    page = 1
  } else if (url.match('page1-2')) {
    category = 1
    page = 2
  } else if (url.match('page2-1')) {
    category = 2
    page = 1
  } else if (url.match('page2-2')) {
    category = 2
    page = 2
  } else if (url.match('page3-1')) {
    category = 3
    page = 1
  } else if (url.match('page3-2')) {
    category = 3
    page = 2
  } else if (url.match('page3-3')) {
    category = 3
    page = 3
  }
  else if (url.match('page3-4')) {
    category = 3
    page = 4
  } else if (url.match('page4-1')) {
    category = 4
    page = 1
  } else if (url.match('page5-1')) {
    category = 5
    page = 1
  } else if (url.match('page5-2')) {
    category = 5
    page = 2
  } else if (url.match('page5-3')) {
    category = 5
    page = 3
  }


  $('.snb .menu' + category).show()
  $('.snb .menu' + category + '-' + page).addClass('active')
  var menuTitle = $('.snb .menu' + category + '>a').text()
  var pageTitle = $('.snb .menu' + category + '-' + page).text()
  $('.bread-crumb .menu-title').text(menuTitle)
  $('.bread-crumb .page-title').text(pageTitle)

})