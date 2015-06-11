
// start spiral canvas background //
function getScrollBarWidth() {
    var $outer = $('<div>').css({
            visibility: 'hidden',
            width: 100,
            overflow: 'scroll'
        }).appendTo('body'),
        widthWithScroll = $('<div>').css({
            width: '100%'
        }).appendTo($outer).outerWidth();
    $outer.remove();
    return 100 - widthWithScroll;
};

function resize_canvas() {
    canvas = document.getElementById("canvas");
    if (canvas.width < window.innerWidth) {
        canvas.width = window.innerWidth - getScrollBarWidth();
    } else if (canvas.width > window.innerWidth - getScrollBarWidth()) {
        canvas.width = window.innerWidth;
    }

    if (canvas.height < $(".hero").innerHeight()) {
        canvas.height = $(".hero").innerHeight();
    } else if (canvas.height > $(".hero").innerHeight()) {
        canvas.height = $(".hero").innerHeight()
    }
}


$(function() {

    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');
    var width = canvas.width = window.innerWidth - getScrollBarWidth();
    var height = canvas.height = $(".hero").outerHeight();
    var angle = 1;
    var maxRectSize = width * 2;

    setInterval(loop, 1000 / 10);

    function loop() {
        c.save();
        width = window.innerWidth;
        height = $(".hero").outerHeight();
        c.translate(width / 2, height / 2);
        c.lineWidth = 2;

        for (var i = 0; i < 1000; i++) {
            c.strokeStyle = 'hsla(' + (i * 16) + ', 15%, 50%, ' + ((i + 10) * 0.0001) + ')';
            c.strokeRect(maxRectSize / 2, maxRectSize / 2, maxRectSize, maxRectSize);
            c.rotate(angle * Math.PI / 90);
            c.scale(0.991, 0.991);
        }
        c.restore();
        angle += 0.0009;
    }
});

// end spiral canvas background //

// quicksand.js functions //

var $itemsHolder = $('ul.thumbnails');
var $itemsClone = $itemsHolder.clone(); 
var $filterClass = "";
$('ul.filter li').click(function(e) {
e.preventDefault();
$filterClass = $(this).attr('data-value');
    if($filterClass == 'all'){ var $filters = $itemsClone.find('li'); }
    else { var $filters = $itemsClone.find('li[data-type='+ $filterClass +']'); }
    $itemsHolder.quicksand(
      $filters,
      { duration: 1000 },
      gallery
      );
});
$(document).ready(gallery);

function gallery(){
  $('#dog1').click(function() { bootbox.alert('<img src="images/dog1.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
  $('#cat1').click(function() { bootbox.alert('<img src="images/cat1.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
  $('#bird1').click(function() { bootbox.alert('<img src="images/bird1.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
  $('#dog2').click(function() { bootbox.alert('<img src="images/dog2.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
  $('#cat2').click(function() { bootbox.alert('<img src="images/cat2.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
  $('#bird2').click(function() { bootbox.alert('<img src="images/bird2.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
  $('#dog3').click(function() { bootbox.alert('<img src="images/dog3.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
  $('#cat3').click(function() { bootbox.alert('<img src="images/cat3.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
  $('#bird3').click(function() { bootbox.alert('<img src="images/bird3.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
  $('#dog4').click(function() { bootbox.alert('<img src="images/dog4.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
  $('#cat4').click(function() { bootbox.alert('<img src="images/cat4.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
  $('#bird4').click(function() { bootbox.alert('<img src="images/bird4.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
}
  var $itemsHolder = $('ul.thumbnails');
  var $itemsClone = $itemsHolder.clone(); 
  var $filterClass = "";
  $('ul.filter li').click(function(e) {
  e.preventDefault();
  $filterClass = $(this).attr('data-value');
      if($filterClass == 'all'){ var $filters = $itemsClone.find('li'); }
      else { var $filters = $itemsClone.find('li[data-type='+ $filterClass +']'); }
      $itemsHolder.quicksand(
        $filters,
        { duration: 1000 },
        gallery
        );
  });
  $(document).ready(gallery);

