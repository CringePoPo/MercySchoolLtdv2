<<<<<<< HEAD


$(function() {
    AOS.init({
      duration: 1200
    });
  
    onElementHeightChange(document.body, function(){
      AOS.refresh();
    });
  });
  $(".number").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing:"swing",
            step:function (now) {
  
              now = Number(Math.ceil(now)).toLocaleString('en');
                                    $(this).text(now);
            },
          }
        );
    });
    
function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;
    
    (function run() {
        newHeight = elm.clientHeight;      
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
          clearTimeout(elm.onElementHeightChangeTimer); 
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
  }
=======


$(function() {
    AOS.init({
      duration: 1200
    });
  
    onElementHeightChange(document.body, function(){
      AOS.refresh();
    });
  });
  $(".number").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 4000,
            easing:"swing",
            step:function (now) {
  
              now = Number(Math.ceil(now)).toLocaleString('en');
                                    $(this).text(now);
            },
          }
        );
    });
    
function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight
    var newHeight;
    
    (function run() {
        newHeight = elm.clientHeight;      
        if (lastHeight !== newHeight) callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer) {
          clearTimeout(elm.onElementHeightChangeTimer); 
        }

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
  }


  // Slider for index
  var currentImg = 0;
  var imgs = document.querySelectorAll('.slider .wrap img');
  let dots = document.querySelectorAll('.dot');
  var interval = 5000;

  var secondImageUrl = `img/g12.webp`;
  var thirdImageUrl = `img/g13.webp`;

  document.getElementById('img-2').src = secondImageUrl;
  document.getElementById('img-3').src = thirdImageUrl;

  var timer = setInterval(changeSlide, interval);

  function changeSlide(n) {
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = 0;
      dots[i].className = dots[i].className.replace(' active', '');
    }

    currentImg = (currentImg + 1) % imgs.length;

    if (n != undefined) {
      clearInterval(timer);
      timer = setInterval(changeSlide, interval);
      currentImg = n;
    }

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';
  }
>>>>>>> 69fbc5b0da63f784bee7840497219698d9da6aab
