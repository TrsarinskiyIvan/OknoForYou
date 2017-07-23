$(document).ready(function () {

    var img = $(".slide-bar img");
    var pathToImage = "img/slide";
    var nextButton = $(".next");
    var prevButton = $(".prev");
    var quntity = 4;
    var index = 0;
    var timerId;

    function nextSlide(step) {
        $(img).fadeOut(function () {
            index = (index + step) % quntity;
            $(img).attr("src", pathToImage + index + ".jpg").fadeIn();
        });
    }

    function runSlideBar() {
        timerId = setInterval(function () {
            nextSlide(1);
        }, 2000);
    }

    runSlideBar();

    $(nextButton).click(function (){
        nextSlide(1);
    });

    $(prevButton).click(function () {
        nextSlide(quntity - 1);
    });

    $(nextButton).mouseover(function () {
        clearInterval(timerId);
    });

    $(prevButton).mouseover(function () {
        clearInterval(timerId);
    });

    $(nextButton).mouseleave(function () {
        runSlideBar();
    });
    $(prevButton).mouseleave(function () {
        runSlideBar();
    });

});


