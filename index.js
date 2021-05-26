function handleClick(key){
  
  switch (key) {
    case 'w':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'a':
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
    case 's':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'd':
      var tom1= new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
      case 'j':
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'k':
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
    case 'l':
      var tom4= new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
   default:"oops"
      break;
  }
  
}

var  num=document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var btn=this.innerHTML;
    handleClick(btn);
    var ps=document.querySelector("."+btn);
 ps.classList.add("pressed");
 setTimeout(function(){
  ps.classList.remove("pressed");
},100);
  });
}

document.addEventListener("keydown",function(event){
 handleClick(event.key);
 var ps=document.querySelector("."+event.key);
 ps.classList.add("pressed");
 
  setTimeout(function(){
    ps.classList.remove("pressed");
  },100);
}
)


