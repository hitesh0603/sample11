$(document).ready(function () {
    $(".youtubeContent").click(function () {
        window.open("https://www.youtube.com/", "_blank");
    });

    $(".primeContentDiv").click(function () {
        window.open("https://www.primevideo.com/storefront/home/ref=atv_nb_logo", "_blank");
    });

    $(".hotStarContent").click(function () {
        window.open("https://www.hotstar.com/", "_blank");
    });

    $(".netflixContent").click(function () {
        window.open("https://www.netflix.com/browse", "_blank");
    });

    $(".fmoviesContent").click(function () {
        window.open("https://fmovie.cc/", "_blank");
    });

    $(".fbContent").click(function () {
        window.open("https://www.facebook.com/", "_blank");
    });
    

    document.getElementById("searchdata").addEventListener("keyup", function (e) {
        e.preventDefault();
        if (e.which == 13) {
            window.location.href = $('#searchdata').val();
        }
    });
});