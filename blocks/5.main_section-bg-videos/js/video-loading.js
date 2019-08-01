
var BGbutton = document.querySelector(".bg-video-loading--button");
var BGvideo = document.getElementById("bg-video-load");
BGbutton.addEventListener("click", PlayVideoClip);

function PlayVideoClip() {

  if (BGvideo.className == "visually-hidden") {
    BGvideo.className = "bg-video-loading";
    playClip(BGvideo);
  }
  else {
    BGvideo.className = "visually-hidden";
  }
}

function playClip(media) {
  media.play();
}