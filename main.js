x = 0;
y = 0;

var screen_width = 0;
var screen_height = 0;

var Apples ="";

var to_number ="";

speak_data = "";

function preload(){
  Apples = loadImage("apple.png");
}

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 
  to_number=Number(content);

  if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML="Started drawing apple";

    draw_apple="set";
  }else
  {document.getElementById("status").innerHTML="The speech does not reconized a number";}
}
document.getElementById

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width,screen_height-150);
 canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    console.log("if");
    for(var i=1;i<= to_number;i++){
      console.log("for");
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
      image(Apples,x,y,50,50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    speak_data = to_number +"apples drawn";
    speak();
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
