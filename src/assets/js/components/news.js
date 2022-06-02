$(document).ready(function () {
  $('.news__list-link').click(function (e) {
    e.preventDefault()

    $('.news__list-link').removeClass('news__list-link--active')
    $('.news__item').removeClass('news__item--active')

    $(this).addClass('news__list-link--active')
    $($(this).attr('href')).addClass('news__item--active')
  })

  $('.news__list-link:last').click()
})