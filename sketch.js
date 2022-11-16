//Variables color game
let colorGame = 0;
let x;
let y;
let b = 100;
let c = 150;
let x1 = 100;
let x2 = 100;
let x3 = 100;
let x4 = 100;
let y1 = 150
let y2 = 250;
let y3 = 350;
let y4 = 450;
var img;
var img2;




let canvas;
let babyOnIcon, exec1, exec2, exec3, poop; 

//buttonNames
let handEyeButton, colorCoord, basicMath, shapeDif, listeningPrac, backButton;
let handEyeRect, basicMathRect, colorCoorRect, shapeDifRect, listeningPracRect; 

function preload(){
  babyOnIcon = loadImage('assets/BabyOnIcon.png');
  exec1 = loadImage('assets/Exec1.png'); 
  exec2 = loadImage('assets/Exec2.png'); 
  exec3 = loadImage('assets/Exec3.png'); 
  poop = loadImage('assets/poopemoji.png'); 
  
}


//function creates canvas and adds babyOn image 
function setup() {
  canvas = createCanvas(600,800);
  background(255, 255, 255);
  //loads images in
  imageMode(CENTER);
  image(babyOnIcon, 250, 135, 400, 100);
  createGUIButtons();
}

function draw(){
if(colorGame == 1){
  img = loadImage('Red check.jpg');
  img2 = loadImage('green check.jpg');
  background(255);
  
  
  image(img, 225, 450, 150 , 150)
  //right side
  fill('blue');
  circle(100,150,50);
  fill('red');
  circle(100,250,50)
  fill('green')
  circle(100, 350, 50)
  fill('purple')
  circle(100,450,50)
  
  //left side
  fill('green');
  circle(500,150,50);
  fill('purple');
  circle(500,250,50)
  fill('blue')
  circle(500, 350, 50)
  fill('red')
  circle(500,450,50)
  //line ( 100, 150, 500, 350)
  
  line ( 100,150, x1,y1)
  line ( 100,250, x2,y2)
  line ( 100,350, x3,y3)
  line ( 100,450, x4,y4)
  
  x = mouseX;
  y = mouseY;
  

  line( b, c, x, y)
  if( mouseIsPressed && x > 490 && x < 510 && y > 340 && y < 360 && b == 100 && c == 150){
    fill('black')
    x1 = 500;
    y1 = 350;
    b = 100;
    c = 250;
  }else if ( mouseIsPressed && x > 490 && x < 510 && y > 440 && y < 460 && b == 100 && c == 250){
    fill('black')
    x2 = 500;
    y2 = 450;
    b = 100;
    c = 350;
  }else if ( mouseIsPressed && x > 490 && x < 510 && y >140 && y < 160 && b == 100 && c == 350){
    fill('black')
    x3 = 500
    y3 = 150
    b = 100
    c = 450
    
}else if (mouseIsPressed && x > 490 && x < 510 && y > 240 && y < 260 && b == 100 && c == 450){
    fill('purple')
    x4 = 500
    y4 = 250
    
  }
  
  //
  if (x1 == 500 && y1 == 350 && x2 == 500 && y2 == 450 && x3 == 500 && y3 == 150 && x4 == 500 && y4 == 250){
    background(255)
    image(img2, 225, 450, 150 , 150)
    //right side
  fill('blue');
  circle(100,150,50);
  fill('red');
  circle(100,250,50)
  fill('green')
  circle(100, 350, 50)
  fill('purple')
  circle(100,450,50)
  
  //left side
  fill('green');
  circle(500,150,50);
  fill('purple');
  circle(500,250,50)
  fill('blue')
  circle(500, 350, 50)
  fill('red')
  circle(500,450,50)
  
  // lines
  fill('black')
  line ( 100, 150, 500,350)
  line ( 100, 250, 500,450)
  line ( 100, 350, 500,150)
  line ( 100, 450, 500,250)
  colorGame = 0;
    
    
    
  }
}
//others games
}

//method creates gui buttons 
function createGUIButtons(){
  let c = color('purple');
  fill(c);
  handEyeRect = rect(60, 250, 400, 40);
  handEyeButton = createButton('Hand eye coordination'); 
  handEyeButton.position(135, 255); 
  handEyeButton.mouseClicked(handEyePressed);
  handEyeButton.style("font-family", "Georgia"); 
  handEyeButton.style("font-size", "20px"); 
  
  basicMathRect = rect(60, 310, 400, 40);
  basicMath = createButton('Basic Mathematics'); 
  basicMath.position(155, 314); 
  basicMath.mouseClicked(basicMathPressed); 
  basicMath.style("font-family", "Georgia"); 
  basicMath.style("font-size", "20px"); 
  
  colorCoorRect = rect(60, 370, 400, 40);
  colorCoord = createButton('Color Coordination'); 
  colorCoord.position(155, 374); 
  colorCoord.mouseClicked(colorCoordPressed); 
  colorCoord.style("font-family", "Georgia"); 
  colorCoord.style("font-size", "20px"); 
  
  
  shapeDifRect = rect(60, 430, 400, 40);
  shapeDif = createButton('Shape Differentiation'); 
  shapeDif.position(145, 434); 
  shapeDif.mouseClicked(shapeDifPressed); 
  shapeDif.style("font-family", "Georgia"); 
  shapeDif.style("font-size", "20px"); 
  
  listeningPracRect = rect(60, 490, 400, 40);
  listeningPrac = createButton('Listening Practice'); 
  listeningPrac.position(160, 494); 
  listeningPrac.mouseClicked(listeningPracPressed); 
  listeningPrac.style("font-family", "Georgia"); 
  listeningPrac.style("font-size", "20px"); 
}

function createBackButton(){
  backButton = createButton('Back');
  backButton.position(20, 725);
  backButton.style("font-family", "Georgia"); 
  backButton.style("font-size", "25px"); 
  backButton.style('background-color', color(255, 0 , 0)); 
  backButton.mouseClicked(backButtonPressed); 
}

function coverRectangles(){
  fill(255, 255, 255);
  rect(60, 250, 400, 305); 
}

/*
button functions located below 
*/

function handEyePressed(){ 
  removeElements(); //removes all elements and canvas
  coverRectangles();
  imageMode(CENTER);
  image(exec1, 260, 400, 400, 305);
  createBackButton(); 
}

function basicMathPressed(){
  removeElements(); //removes all elements (buttons etc) and canvas
  coverRectangles();
  imageMode(CENTER);
  image(exec2, 260, 400, 400, 305);
  createBackButton(); 
}

function colorCoordPressed(){
  removeElements(); //removes all elements (buttons etc) and canvas
  colorGame = 1;
  createBackButton(); 
}

function shapeDifPressed(){
  removeElements(); //removes all elements (buttons etc) and canvas
  coverRectangles();
  imageMode(CENTER);
  image(poop, 260, 400, 400, 305);
  createBackButton(); 
}

function listeningPracPressed(){
  removeElements(); //removes all elements (buttons etc) and canvas
  coverRectangles();
  imageMode(CENTER);
  image(poop, 260, 400, 400, 305);
  createBackButton(); 
}

function backButtonPressed(){
  removeElements();
  colorGame = 0;
  setup(); 
  backButton.hide(); 
}