// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


document.getElementById('smallBtn').onclick = function () {
    document.documentElement.style.fontSize = '12px';
    document.getElementById("smallBtn").style.color = "#FF4500";
    document.getElementById("mediumBtn").style.color = "black";
    document.getElementById("largeBtn").style.color = "black";
};
document.getElementById('mediumBtn').onclick = function () {
    document.documentElement.style.fontSize = '16px';
    document.getElementById("smallBtn").style.color = "black";
    document.getElementById("mediumBtn").style.color = "#FF4500";
    document.getElementById("largeBtn").style.color = "black";
};
document.getElementById('largeBtn').onclick = function () {
    document.documentElement.style.fontSize = '20px';
    document.getElementById("smallBtn").style.color = "black";
    document.getElementById("mediumBtn").style.color = "black";
    document.getElementById("largeBtn").style.color = "#FF4500";
};
