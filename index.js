var allButtons = $('#buttons > button')
console.log(allButtons)

for (var i = 0; i < allButtons.length; i++) {
  $(allButtons[i]).on('click', function (x) {
    console.log(x.currentTarget);
    
    var index = $(x.currentTarget).index()
    var p = index * -300
    $(x.currentTarget).addClass('red').siblings('.red').removeClass('red')
    $('.images').css({
      transform: 'translate(' + p + 'px)'
    })
    a = index
  })
}

var a = 0
var size = allButtons.length
var timeId = setInterval(() => {
  x(allButtons.eq(a % size))
  a += 1
}, 2000)

$('.window').on('mouseenter', function () {
  window.clearInterval(timeId)
})

$('.window').on('mouseleave', function () {
  timeId = setInterval(() => {
    x(allButtons.eq(a % size))
    a += 1
  }, 2000)
})

function x($button) {
  $button.trigger('click')
    .addClass('red').siblings('.red').removeClass('red')
}
