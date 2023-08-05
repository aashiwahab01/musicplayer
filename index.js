
// var song1 =new Audio("song1.mp3");
// document.querySelector(".playicon").addEventListener("click", function(){
//     song1.pause();
// });
// document.querySelector(".pauseicon").addEventListener("click",function(){
//     song1.play();
// });

var mySong =document.getElementById("mysong");
    var imag =document.getElementById("imag");

   imag.onclick=function(){
      if(mySong. paused){
          mySong.play();
          imag.src="lenka.png";
          
      }
    //   else{
    //       mySong.pause();
    //       imag.src="play.png";
    //   }
   }
  