//Spider Labs - JS


// Adding Drop Shadow to sticky header

$(window).scroll(function() {     
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("active");
    }
    else {
        $("#header").removeClass("active");
    }
});