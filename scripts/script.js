$(document).ready(function() {
    $(".navbar-burger").click(function() {
        $(".navbar-burger, .navbar-menu", $(this).closest('.navbar')).toggleClass("is-active");
    });
  });

  const typeWriter = selector => {
    const el = document.querySelector(selector)
    const text = el.innerHTML
  
    ;(function _type(i = 0) {
      if (i === text.length) return
  
      el.innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
      setTimeout(() => _type(i + 1), 200)
    })()
  }
  
  typeWriter(".js-type-writer");

  // Scroll 
  jQuery(document).ready(function($) {
    $('#section05').on('click', function(e) {
        e.preventDefault();
        const target = this.hash,
            $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function() {
            window.location.hash = target;
        });
    });
});