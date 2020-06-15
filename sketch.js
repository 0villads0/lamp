let turn = 0;

let one;
let onePressed = false;

let two;
let twoPressed = false;

let three;
let threePressed = false;

let four;
let fourPressed = false;

let five;
let fivePressed = false;

let six;
let sixPressed = false;

let seven;
let sevenPressed = false;

let eight;
let eightPressed = false;

let nine;
let ninePressed = false;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  stroke(0);
  line(0, height/3, width, height/3);
  line(0, height/3*2, width, height/3*2);
  line(width/3, 0, width/3, height);
  line(width/3*2, 0, width/3*2, height);
  fill(255);
  if(onePressed == false) {
    one = createButton(" ");
    one.position(0, 0);
    one.size(width/3, height/3);
    one.mousePressed(PressOne);
  }
  if(twoPressed == false) {
    two = createButton(" ");
    two.position(width/3, 0);
    two.size(width/3, height/3);
    two.mousePressed(PressTwo);
  }
  if(threePressed == false) {
    three = createButton(" ");
    three.position(width/3*2, 0);
    three.size(width/3, height/3);
    three.mousePressed(PressThree);
  }
  if(fourPressed == false) {
    four = createButton(" ");
    four.position(0, height/3);
    four.size(width/3, height/3);
    four.mousePressed(PressFour);
  }
  if(fivePressed == false) {
    five = createButton(" ");
    five.position(width/3, height/3);
    five.size(width/3, height/3);
    five.mousePressed(PressFive);
  }
  if(sixPressed == false) {
    six = createButton(" ");
    six.position(width/3*2, height/3);
    six.size(width/3, height/3);
    six.mousePressed(PressSix);
  }
  if(sevenPressed == false) {
    seven = createButton(" ");
    seven.position(0, height/3*2);
    seven.size(width/3, height/3);
    seven.mousePressed(PressSeven);
  }
  if(eightPressed == false) {
    eight = createButton(" ");
    eight.position(width/3, height/3*2);
    eight.size(width/3, height/3);
    eight.mousePressed(PressEight);
  }
  if(ninePressed == false) {
    nine = createButton(" ");
    nine.position(width/3*2, height/3*2);
    nine.size(width/3, height/3);
    nine.mousePressed(PressNine);
  }
}

function PressOne() {
  if(turn == 0||turn == 2||turn == 4||turn == 6||turn == 8) {
    one = createButton("X");
    one.position(0, 0);
    one.size(width/3, height/3);
    onePressed = true;
    turn += 1;
  } else {
    one = createButton("O");
    one.position(0, 0);
    one.size(width/3, height/3);
    onePressed = true;
    turn += 1;
  }
    
}

function PressTwo() {
  if(turn == 0||turn == 2||turn == 4||turn == 6||turn == 8) {
    two = createButton("X");
    two.position(width/3, 0);
    two.size(width/3, height/3);
    twoPressed = true;
    turn += 1;
  } else {
    two = createButton("O");
    two.position(width/3, 0);
    two.size(width/3, height/3);
    twoPressed = true;
    turn += 1;
  }
    
}


function PressThree() {
  if(turn == 0||turn == 2||turn == 4||turn == 6||turn == 8) {
    three = createButton("X");
    three.position(width/3*2, 0);
    three.size(width/3, height/3);
    threePressed = true;
    turn += 1;
  } else {
    three = createButton("O");
    three.position(width/3*2, 0);
    three.size(width/3, height/3);
    threePressed = true;
    turn += 1;
  }
    
}

function PressFour() {
  if(turn == 0||turn == 2||turn == 4||turn == 6||turn == 8) {
    four = createButton("X");
    four.position(0, height/3);
    four.size(width/3, height/3);
    fourPressed = true;
    turn += 1;
  } else {
    four = createButton("O");
    four.position(0, height/3);
    four.size(width/3, height/3);
    fourPressed = true;
    turn += 1;
  }
}

function PressFive() {
  if(turn == 0||turn == 2||turn == 4||turn == 6||turn == 8) {
    five = createButton("X");
    five.position(width/3, height/3);
    five.size(width/3, height/3);
    fivePressed = true;
    turn += 1;
  } else {
    five = createButton("O");
    five.position(width/3, height/3);
    five.size(width/3, height/3);
    fivePressed = true;
    turn += 1;
  }
}
function PressSix() {
  if(turn == 0||turn == 2||turn == 4||turn == 6||turn == 8) {
    six = createButton("X");
    six.position(width/3*2, height/3);
    six.size(width/3, height/3);
    sixPressed = true;
    turn += 1;
  } else {
    six = createButton("O");
    six.position(width/3*2, height/3);
    six.size(width/3, height/3);
    sixPressed = true;
    turn += 1;
  }
}
function PressSeven() {
  if(turn == 0||turn == 2||turn == 4||turn == 6||turn == 8) {
    seven = createButton("X");
    seven.position(0, height/3*2);
    seven.size(width/3, height/3);
    sevenPressed = true;
    turn += 1;
  } else {
    seven = createButton("O");
    seven.position(0, height/3*2);
    seven.size(width/3, height/3);
    sevenPressed = true;
    turn += 1;
  }
}
function PressEight() {
  if(turn == 0||turn == 2||turn == 4||turn == 6||turn == 8) {
    eight = createButton("X");
    eight.position(width/3, height/3*2);
    eight.size(width/3, height/3);
    eightPressed = true;
    turn += 1;
  } else {
    eight = createButton("O");
    eight.position(width/3, height/3*2);
    eight.size(width/3, height/3);
    eightPressed = true;
    turn += 1;
  }
}
function PressNine() {
  if(turn == 0||turn == 2||turn == 4||turn == 6||turn == 8) {
    nine = createButton("X");
    nine.position(width/3*2, height/3*2);
    nine.size(width/3, height/3);
    ninePressed = true;
    turn += 1;
  } else {
    nine = createButton("O");
    nine.position(width/3*2, height/3*2);
    nine.size(width/3, height/3);
    ninePressed = true;
    turn += 1;
  }
}