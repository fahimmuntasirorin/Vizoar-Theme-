$(document).ready(function() {
    $(".submenu-opener").click(function(e) {
        // Toggle + / - icon
        $(this).toggleClass("fa-plus fa-minus");
        // Toggle submenu
        $(this).parent().next(".aside-submenu").toggleClass("open");
    });
     $(".aside-menu-top").click(function(){
        $(".aside-menu").toggleClass('open');
        $(".aside-menu-overlay").addClass("open")
    })
    $(".aside-logo-close").click(function() {
        $(".aside-menu").toggleClass('open')
        $(".aside-menu-overlay").removeClass("open")
    });
    $(".mobile-menu-bar").click(function(){
      $(".nav-main").addClass("open")
    })
    $(".mobile-nav-close").click(function(){
      $(".nav-main").removeClass("open")
    })
});


$(document).ready(function(){
  $('.counter').counterUp({
    delay: 20,
    time: 1000
  });

  $('.counter-star').counterUp({
    delay: 20,
    time: 1000
  });

});

let text = document.querySelector(".banner-animate");
let words = text.innerText.split(" ");

text.innerHTML = words.map(w => `<span>${w}</span>`).join(" ");

gsap.to(".banner-animate span", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power3.out"
});