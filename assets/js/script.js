$(document).ready(function() {
    $(".submenu-opener").click(function(e) {
        // Toggle + / - icon
        $(this).toggleClass("fa-plus fa-minus");
        // Toggle submenu
        $(this).parent().next(".aside-submenu").toggleClass("open");
    });
});
$(document).ready(function() {
    $(".aside-menu-top").click(function(){
        $(".aside-menu").toggleClass('open');
        $(".aside-menu-overlay").addClass("open")
    })
    $(".aside-logo-close").click(function() {
        $(".aside-menu").toggleClass('open')
        $(".aside-menu-overlay").removeClass("open")
    });
});