class Music{
    constructor(title , singer , img , file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }
    getName(){
        return this.title + " - " + this.singer;
    }
}
const musicList = [
    new Music("Cliffs of Gallipoli" , "Sabaton" , "1.jpg" , "1.mp3"),
    new Music("Senua’s Saga" , "Hellblade 2" , "2.jpg" , "2.mp3"),
    new Music("Er Turan" , "Türk Kanı" , "3.jpg" , "3.mp3")
]