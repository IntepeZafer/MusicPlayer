'use strict'
const player = new musicPlayer(musicList);
const ui = new UI();
window.addEventListener("load" , () => {
    let music = player.getMusic();
    displayMusic(music);
});
const displayMusic = (music) => {
    ui.title.innerHTML = music.getName();
    ui.singer.innerHTML = music.singer;
    ui.image.src = "img/" + music.img;
    audio.src = "mp3/" + music.file; 
};

ui.play.addEventListener("click" , () => {
    const isPlayingMusic = ui.container.classList.contains("playing");
    isPlayingMusic ? pauseMusic() : playMusic();
});
const pauseMusic = () => {
    ui.container.classList.remove("playing");
    ui.play.classList = "fa-regular fa-circle-play";
    audio.pause();
};
const playMusic = () => {
    ui.container.classList.add("playing");
    ui.play.classList = "fa-regular fa-circle-pause";
    audio.play();
};

ui.next.addEventListener("click" , () => {
    nextMusic();
});
const nextMusic = () => {
    player.next();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
};
ui.prev.addEventListener("click" , () => {
    prevMusic();
});
const prevMusic = () =>{
    player.previous();
    let music = player.getMusic();
    displayMusic(music);
    playMusic();
};
const calculateTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    const newSecond = seconds < 10 ? `0${seconds}` : `${seconds}`; 
    const sonuc = `${minutes} : ${newSecond}`;
    return sonuc;
};
audio.addEventListener("loadedmetadata"  , () => {
    ui.duration_time.textContent = calculateTime(ui.audio.duration);
    ui.progress_bar.max = Math.floor(ui.audio.duration);
});
audio.addEventListener("timeupdate" , () => {
    ui.progress_bar.value = Math.floor(ui.audio.currentTime);
    ui.curent_time.textContent = calculateTime(ui.progress_bar.value); 
});
ui.progress_bar.addEventListener("input" , () => {
    ui.curent_time.textContent = calculateTime(ui.progress_bar.value);
    ui.audio.currentTime = ui.progress_bar.value;
});
ui.volume_bar.addEventListener("input" , (e) => {
    const value = e.target.value;
    ui.audio.volume = value / 100;
    if(value == 0){
        ui.audio.muted = true;
        ui.muteState = "nonMuted";
        ui.volume.classList = "fa-solid fa-volume-xmark";
    }
    else if(value == 30){
        audio.muted = false;
        ui.muteState = "muted";
        ui.volume.classList = "fa-solid fa-volume-low";
    }
    else{
        audio.muted = false;
        ui.muteState = "muted";
        ui.volume.classList = "fa-solid fa-volume-high";
    }
})
ui.volume.addEventListener("click" , () => {
    if(ui.muteState === "muted"){
        audio.muted = true;
        ui.muteState = "nonMuted";
        ui.volume.classList = "fa-solid fa-volume-xmark";
        ui.volume_bar.value = 0
    }else{
        audio.muted = false;
        ui.muteState = "muted";
        ui.volume.classList = "fa-solid fa-volume-high";
        ui.volume_bar.value = 100;
    }
})