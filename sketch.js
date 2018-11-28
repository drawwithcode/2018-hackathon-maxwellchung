var sound; var horror;

    function preload(){
    horror = loadImage('bloodopa.png');
    sound = loadSound('Marvel Avengers.mp3');}

  function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  sound.setVolume(1);
  sound.loop();
  ampp = new p5.Amplitude();
  ampp.setInput(sound); }

    function draw() {
    var mainsound = ampp.getLevel();
    var sounds = map(mainsound,0,0.5,0,1000)
    var sound = map(mainsound,0,1,0,height/5)
    turning(width/2,height/2,sounds);
    image(horror,0,0,horror.width/3-sound,horror.height/3-sound) }
    function turning(TX, TY, rotation) {
    push();
    translate(TX,  TY);
    rotate(rotation);
    imageMode(CENTER);

  }
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }
