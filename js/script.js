$(function() {
    $('.hamburger').on('click', function() {
        if($('.navs').hasClass('items')) {
            $('.navs').removeClass('items')
        }
        else{
            $('.navs').addClass('items')
        }
    })
})
