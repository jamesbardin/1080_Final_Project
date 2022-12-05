let pendulums = [];

let note = [90, 88, 86, 84, 82,
            80, 78, 76, 74, 72, 
            70, 68, 66, 64, 62];

let notes = [];

let spacing = 8;
let gravity = 9.8;
let periodmax = 500;
let numcycles = 30;
let modifier = 0.12;

// equation to populate len is from https://www.education.com/science-fair/article/pendulum-waves/
let len = [];
for (let i = 0; i < 60; i++) {
  l = (gravity * (Math.pow((periodmax/(2*Math.PI*(numcycles+i+1))),2)))/modifier
  len.push(l);
}

let midi = 127;


let osc = [];
let env = [];

function addSlider(variable, min, max, val, step, text) {
  let slider = createSlider(min, max, val, step);
  let label = createSpan(text.replace("#", val.toFixed(2)));
  createElement("br");
  
  let onInput = () => {
    vars[variable] = slider.value();
    label.html(text.replace("#", slider.value().toFixed(2)));
    background(245);
    stroke(vars.r, vars.g, vars.z, vars.o); 
  };
  
  slider.input(onInput);
  
  vars[variable] = val;
}

function setup() {
  createCanvas(windowWidth, windowHeight);  
  for (let i = 0; i < 60; i++) {
    notes.push(midi - 2*i)
  }
  for (let i = 0; i < 60; i++) {
    pendulums.push(new Pendulum(len[i]));
   
    env.push(new p5.Envelope())
    env[i].setADSR(0.01, 0.01,1 , 0.1);
    env[i].setRange(1, 0);
       
    osc.push(new p5.Oscillator());
    osc[i].start();
    osc[i].freq(midiToFreq(notes[i]))
    osc[i].amp(env[i]);

  }
}

function draw() {
  background('black');

  for (let i = 0; i < pendulums.length; i++) {
    pendulums[i].display();
    pendulums[i].update();
    
    if(Math.abs(pendulums[i].bob.x - width/2) < 7) {
      env[i].play();
      pendulums[i].played();
      // pendulums[i].incrementColor();
    } else {
      pendulums[i].notPlayed();
    }
  }
}