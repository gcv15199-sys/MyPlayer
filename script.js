// 主要頁面
const homePage = document.getElementById("homePage")

// 播放頁面
const playerPage = document.getElementById("playerPage")
const video = document.getElementById("video");
const playButton = document.getElementById("playButton");
const progress = document.getElementById("progress");
const playlist = document.getElementById("playlist");
const artist = document.getElementById("artist");
const taps = document.getElementById("taps");

// 作者頁面
const artistPage = document.getElementById("artistPage")

playButton.onclick = function () {

    if (video.paused) {

        video.play();

    } else {

        video.pause();

    }

}