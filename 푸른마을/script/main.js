$('#notice>ul>li').eq(0).on('click', function () {
    $('#popup').css({ display: 'block' })
})
$('button').on('click', function () {
    $('#popup').css({ display: 'none' })
})

$('.gnb>li').on('mouseover', function () {
    $('.sub').css({ display: 'flex' })
    $('.sub , .subBg').stop().slideDown()
})

$('.gnb>li').on('mouseout', function () {
    $('.sub , .subBg').stop().slideUp()
})


$('.frame>li').eq(0).siblings().hide()
let index = 0;
setInterval(function () {
    if (index < 2) {
        index++
    } else {
        index = 0
    }
    $('.frame>li').eq(index).siblings().fadeOut(500)
    $('.frame>li').eq(index).fadeIn(500)
}, 3000)



$('#ng>.inner>.name>a').on('click', function () {

    $('#ng>.inner>.name').find("a").removeClass('on')
    $('#ng>.inner>.ngbox>div').removeClass('on')

    // rlagPGus dhkTekrka zz
    $(this).addClass('on')

    let conId = $(this).attr("href")
    $(conId).addClass("on");
})
