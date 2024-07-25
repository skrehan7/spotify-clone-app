console.log("welcome to spotify");

// Initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "AUR_TU_HAI_KAHAN_Raffey_Usama_Ahad_Official_Music", filepath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "AUR_SHIKAYAT_Raffey_Usama_Ahad_Official_Music", filepath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Arash_ft_Helena_Broken_Angel_English_Version", filepath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "LAJAWAB_2", filepath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "LONG_TIME_NO_SEE", filepath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Jay Sean - Ride It (Lyrics)", filepath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "EMIWAY_STILL_NUMBER_1", filepath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Soch_Na_Sake_FULL_VIDEO_SONG", filepath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tujhe_Bhula_Diya_Full_Song", filepath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Tu_Hi_Hai_Aashiqui_by_Arijit_Singh", filepath: "songs/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "Tum_Se_Hi", filepath: "songs/11.mp3", coverPath: "covers/11.jpg"},
    {songName: "Aankhen_khuli_ho_ya_ho_band", filepath: "songs/12.mp3", coverPath: "covers/12.jpg"},
    {songName: "Naina", filepath: "songs/13.mp3", coverPath: "covers/15.jpg"},
    {songName: "Tu_Pyar_Hai_Kisi_Aur_Ka", filepath: "songs/14.mp3", coverPath: "covers/14.jpg"},
    {songName: "Zara_Zara", filepath: "songs/15.mp3", coverPath: "covers/13.jpg"},
    
]
// audioElement.play();

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})


// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// listion to events
audioElement.addEventListener('timeupdate', ()=>{
    // update seekbar
    Progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = Progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

