// Find the right method, call on correct element
function launchFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}

// Whack fullscreen
function exitFullscreen() {
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    }
}

document.addEventListener("fullscreenchange", function (e) {
    console.log(document.fullscreen);
});
document.addEventListener("mozfullscreenchange", function (e) {
    console.log(document.mozFullScreen);
});
document.addEventListener("webkitfullscreenchange", function (e) {
    console.log(document.webkitIsFullScreen);
});