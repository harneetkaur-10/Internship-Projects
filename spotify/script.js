console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Je Jatt Vigad Gya", filePath: "songs/1.mp3", coverPath: "arjan.jpg" },
    { songName: "Chidi Udd", filePath: "songs/3.mp3", coverPath: "arjan.jpg" },
    { songName: "Glorious", filePath: "songs/4.mp3", coverPath: "arjan.jpg" },
    { songName: "Back to Sikhi", filePath: "songs/2.mp3.mp3", coverPath: "arjan.jpg" },
    { songName: "Hot Shit", filePath: "songs/1.mp3", coverPath: "arjan.jpg" },
    { songName: "Trucker", filePath: "songs/1.mp3", coverPath: "arjan.jpg" },
    { songName: "Kuz Saal", filePath: "songs/1.mp3", coverPath: "arjan.jpg" },
]

songs.forEach((element, i)=>{
    console.log(element, i);
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => { 
    //update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
myProgressBar.value = progress; 
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songListPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
         element.classList.add('fa-play-circle');
    })
    
}

Array.from(document.getElementsByClassName('songListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
    makeAllPlays();
    index = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = 'songs/${index+1}.mp3';
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })
})