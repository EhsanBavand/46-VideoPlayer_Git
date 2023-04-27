const controller = document.querySelector(".controls-main");
const video = document.querySelector("video");

function show_controls(){
    controller.style.opacity = 1
}
function hide_controls(){
    controller.style.opacity = 0
}

// To Play the video
function play_video(){
    video.play();
    
}
