$(document).ready(function () {

    window.addEventListener("resize", function () {
        if (window.innerWidth > 640) {
            $(".mobile-side-bar").show();
        }
    });

    window.addEventListener("scroll", function () {
        if (window.innerWidth <=640) {
            $(".mobile-side-bar").slideUp();
        }

    });

    $(".buttonMenu").click(function () {
        $(".mobile-side-bar").slideDown();
    });

});

