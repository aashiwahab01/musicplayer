var lyrics = document.getElementsByClassName("queue-head-2")[0];
var playlist = document.getElementsByClassName("queue-head-1")[0];
var playlistDiv=document.getElementsByClassName("main-queue-playlist")[0];
var li = document.querySelectorAll("li");
let mainimg = document
  .getElementsByClassName("main-info")[0]
  .getElementsByTagName("img")[0];
let playbackimg = document
  .getElementsByClassName("left-playback")[0]
  .getElementsByTagName("img")[0];
let activeEl;

let play = document.getElementsByClassName("play")[0];
let pause = document.getElementsByClassName("pause")[0];

var activesong;
let time=document.querySelectorAll("time");
let slider=document.getElementsByTagName("input")[0];
let playbackBar=document.getElementsByClassName("playback-bar")[0];
slider.value=0;
var sliderprogress;
let songId= ["a","b","c","d","e","f","g"]
let index = songId[0]

var a=new Audio(index+'.mp3');;
li.forEach(function myPlayer(element){
  element.addEventListener("click", () => {
    li.forEach((e) => {
      if (e.classList.contains("active-song")) {
        e.classList.remove("active-song");
      }
    });
    playbackBar.classList.remove("op-none");
    play.classList.add("d-none");
    pause.classList.add("d-inline");
    index=element.id;
    if (!a.paused) {
      a.pause();
    }
    a=new Audio(index+'.mp3');
    a.play();
    sliderprogress=setInterval(()=>{
      var currtime=Math.floor(a.currentTime);
      var percentageComplete=""+(Math.floor((currtime/(a.duration))*100));
      slider.value=(percentageComplete);
    },1000);
    element.classList.toggle("active-song");
    activesong=document.getElementsByClassName("active-song")[0];
    activeEl = activesong.getElementsByTagName("img")[0].src;
    mainimg.setAttribute("src", activeEl);
    playbackimg.setAttribute("src", activeEl);
    let heading=element.getElementsByTagName("div")[0].getElementsByTagName("h5")[0].innerText;
    let artist=element.getElementsByTagName("div")[0].getElementsByTagName("p")[0].innerText;
    let playbackheading=document.getElementsByClassName("playback-head")[0];
    let playbackartist=document.getElementsByClassName("playback-artist")[0];
    playbackheading.innerText=heading;
    playbackartist.innerText=artist;


    a.onloadedmetadata = () =>  {
      let duration = a.duration/60
      duration = duration.toFixed(2)
      duration = duration.toString()
      duration = duration.replace('.',':')
      element.getElementsByClassName('time')[0].innerText = duration
    }
   
    play.click();

  });
});

play.addEventListener("click", () => {
  a.play();
  play.classList.add("d-none");
  pause.classList.remove("d-none");
});
pause.addEventListener("click", () => {
  a.pause();
  pause.classList.add("d-none");
  pause.classList.remove("d-inline");
  play.classList.remove("d-none");
});

slider.addEventListener('input',()=>{
  console.log(10)
  let songtime=(((a.duration)*(slider.value)) / 100);
  a.currentTime=songtime;
  sliderprogress;
})
