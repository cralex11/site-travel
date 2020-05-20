$('.hamburger').on('click', function (e){
    e.preventDefault;
    $(this).toggleClass('arrow');
    $('.nav-main').toggleClass('on');
} )

$('#search-icon').on('click',function (e) {
    $('.search').toggleClass('search__active');
})



/*Player*/
const video = document.getElementById("myVideo");

// Get the button
const btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
