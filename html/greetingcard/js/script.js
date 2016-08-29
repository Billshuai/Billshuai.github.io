window.onload = function() {
    //获取元素
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    var music = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];

    //音乐结束时，自动停止旋转效果
    audio.addEventListener("ended", function(event) {
        music.setAttribute("class", "");
        // this.style.animationPalyState = "paused";
        // this.style.webkitAnimationPalyState = "running";
    }, false);


    //点击音乐图标，控制音乐播放效果
    // music.onclick = function() { //onclick有0.3秒的延迟
    //     if (audio.paused) {
    //         audio.play();
    //         this.setAttribute("class", "paly");
    //         // this.style.animationPalyState = "running";
    //         // this.style.webkitAnimationPalyState = "running";
    //     } else {
    //         audio.pause();
    //         this.setAttribute("class", "");
    //         // this.style.animationPalyState = "paused";
    //         // this.style.webkitAnimationPalyState = "running";
    //     };
    // };
    music.addEventListener("touchstart", function(event) {
        if (audio.paused) {
            audio.play();
            this.setAttribute("class", "paly");
            // this.style.animationPalyState = "running";
            // this.style.webkitAnimationPalyState = "running";
        } else {
            audio.pause();
            this.setAttribute("class", "");
            // this.style.animationPalyState = "paused";
            // this.style.webkitAnimationPalyState = "running";
        };
    }, false);


  page1.addEventListener("touchstart",function(event){
  	   page1.style.display = "none";
  	   page2.style.display = "block";
  	   page3.style.display = "block";
  	   page3.style.top = "100%";

  	   setTimeout(function(){
  	   	page2.setAttribute("class","page fadeOut");
  	   	page3.setAttribute("class","page fadeIn");
  	   },5500);
  }, false);
};
