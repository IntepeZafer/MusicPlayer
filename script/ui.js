'use strict'

function UI(){
    this.container = document.querySelector(".container");
    this.image = document.querySelector("#music-image");
    this.title = document.querySelector("#music-details .title");
    this.singer = document.querySelector("#music-details .singer");
    this.prev = document.querySelector("#controls #prev");
    this.play = document.querySelector("#controls #play");
    this.next = document.querySelector("#controls #next");
    this.duration_time = document.querySelector("#duration-time");
    this.curent_time = document.querySelector("#curent-time");
    this.progress_bar = document.querySelector("#progress-bar");
    this.audio = document.querySelector("#audio");
    this.volume = document.querySelector("#volume");
    this.volume_bar = document.querySelector("#volume-bar");
    this.muteState = "muted";
}