//---------------------------------------------------------------------------------------------//
// Boss Variable & Let
let BossAmbient;
var Btimer = 0
let B1, B2, B3, B4, B5, B6, B7, B8;
let T1, T2;
let FinalBoss;
let BossHealth;
let Winping;
var W = 10
var WA = 1
let Boom;
var boom = 0
var boomtimer = 0;
var bf = 100;
var Wintimer = 0
var Csize = 0
var COx = 400;
var Coy = 400;
var EV = 255;
var GT = 0.2;
let DeathS;
//---------------------------------------------//
//Variables
var GO = 0
var WO = 0
let Badfont;
var LOSE = 0
var HEALTH = 100
var TN = 0
var DONE = 0
var RPM = 0
var RPM1= 0
var gx = 0;
var gy = 0;
var gw = 0;
var gh = 0;
var rx = 400
var ry = 400
var rw = 800
var rh = 800
var wx = 0
var wy = 0
var ww = 0
var wh = 0
var Start = 0
var TR = 0
var TG = 0
var TB = 0
var Difficulty = 0
//--------------------player------------------//
var C1 = 10
var C1x = 20
var C1y = 20
var C2 = 10
var C2x = 30
var C2y = 30

//---------------------------------------------//

//Let Statements

let Ambient;
let Charge1, Charge2, Charge3;
let PowerSphere;
let BKGRND;
let PS;
let Dif;
let tbx = 400;
let tby = 380;
let BadFont;
//------------------------------//
let Ast1, Ast2, Ast3, Ast4;
let ship1, ship2, ship3, ship4;
let Die1, Die2, Die3, Die4;
let G1,G2, G3,G4;

//----------------------------------------------------------------------------------------------//
//Preload
function preload(){
   BKGRND = loadImage('hs-2004-07-a-large_web.jpg');
  Badfont = loadFont('RobotoSlab-VariableFont_wght.ttf');
  Ast1 = new Asteroid();
  Ast2 = new Asteroid();
  Ast3 = new Asteroid();
  Ast4 = new Asteroid();
  //--------------------------------------------//
  ship1 = new Ship();
  ship2 = new Ship();
  ship3 = new Ship();
  ship4 = new Ship();
  //-------------------------------------------//
  Die1 = new Difast();
  Die2 = new Difast();
  Die3 = new Difast();
  Die4 = new Difast();
  //------------------------------------------//
  G1 = new GG();
  G2 = new GG();
   G3 = new GG();
   G4 = new GG();
  //-----------------------------------------//
  PowerSphere = new p5.Oscillator('sine');
  Charge1 = new p5.Oscillator('triangle');
   Charge2 = new p5.Oscillator('triangle');
   Charge3 = new p5.Oscillator('triangle');
  Ambient = new p5.Oscillator('cos');
  //------------------------------Boss Stuff----------------------------------------//
  BossAmbient = new p5.Oscillator('triangle');
  Winping = new p5.Oscillator('sin');
  Boom = new p5.Oscillator('sin');
  DeathS = new p5.Oscillator('square');
  B1 = new Bullet();
  B2 = new Bullet();
  B3 = new Bullet();
  B4 = new Bullet();
  B5 = new Bullet();
  B6 = new Bullet();
  B7 = new Bullet();
  B8 = new Bullet();
  //----------------------------------------//
  T1 = new Tracker();
  T2 = new Tracker();
  //------------------------------------------//
  FinalBoss = new Boss();

}
//----------------------------------------------------------------------------------------------//
//Setup
function setup() {
  createCanvas(800, 800);
  Dif = -600;
  PS = 55;
r1x = random(25, 775);
r1y = -150;
riw = random(40, 50);
r1h = random(130, 140);
  //---------------------------Sound Preperation----------------------------//
  PowerSphere.start();
  PowerSphere.freq(100);
  PowerSphere.amp(0);
  Charge1.start();
  Charge1.freq(70);
  Charge1.amp(0);
    Charge2.start();
  Charge2.freq(60);
  Charge2.amp(0);
    Charge3.start();
  Charge3.freq(50);
  Charge3.amp(0);
  Ambient.start();
  Ambient.freq(85);
  Ambient.amp(0.1);
  //--------------Player------------//
  DeathS.start();
  DeathS.freq(60);
  DeathS.amp(0);
  //----------------------------------/Boss Stuff/--------------------------------//
  BossAmbient.start();
  BossAmbient.freq(40);
  BossAmbient.amp(0);
  BossHealth = 100000;
  Winping.start();
  Winping.freq(W);
  Winping.amp(0);
  Boom.start();
  Boom.freq(100);
  Boom.amp(0);

}
//---------------------------------------------------------------------------------------------//
//Draw Function

function draw() {
  image(BKGRND, 0, 0);
  //BossStart();
  StartGame();
 AllStop();
HEALTH = 150;
 
  //---------------------------------------------------------------------------------------------//
  //Classes & Functions
}

function Player(){
    push();
 PS += 0.03;
//Controls The activation of the power sphere
    if(mouseIsPressed){
      push();
      PowerSphere.freq(45 + PS);
      PowerSphere.amp(0.5);
      Charge1.amp(0);
      Charge2.amp(0);
      Charge3.amp(0);
      pop();
    fill(random(1, 255), random(1, 255), random(1,255));
    ellipse(mouseX, mouseY, PS, PS);
      PS += -0.1;
      if(PS <= 33){
        PS = 34;
      }
  }
  //Everything inside the else statement deals with the charge crystals that float around the players ellipse when the power sphere is recharging & the sounds that play based on charge status--------------//
  else{
    PowerSphere.amp(0);
      if(PS <= 55){
    push();
        angleMode(DEGREES);
        fill(random(1, 255), random(1, 255), random(1,255));
    translate(mouseX, mouseY);
        rotate(90- RPM);
        RPM += 5;
        ellipse(C1x, C1y, C1, C1);
    pop();
  }
    if(PS <= 50){
          push();
      angleMode(DEGREES);
        fill(random(1, 255), random(1, 255), random(1,255));
    translate(mouseX, mouseY);
        rotate(360 - RPM1);
        RPM1+= 1;
        ellipse(C2x, C2y, C2, C2);
    pop();
                push();
      angleMode(DEGREES);
        fill(random(1, 255), random(1, 255), random(1,255));
    translate(mouseX, mouseY);
        rotate(180 - RPM1);
        RPM1+= 1;
        ellipse(C2x, C2y, C2, C2);
    pop();
    }
    if(PS <= 40){
       push();
      angleMode(DEGREES);
        fill(random(1, 255), random(1, 255), random(1,255));
    translate(mouseX, mouseY);
        rotate(90 - RPM1);
        RPM1+= 1;
        ellipse(C2x, C2y, C2, C2);
    pop();
             push();
      angleMode(DEGREES);
        fill(random(1, 255), random(1, 255), random(1,255));
    translate(mouseX, mouseY);
        rotate(270 - RPM1);
        RPM1+= 1;
        ellipse(C2x, C2y, C2, C2);
    pop();
    }
      if(PS <= 54 && PS >= 50){
    Charge1.amp(0.2);
            Charge2.amp(0);
        Charge3.amp(0);
  }
  if(PS <= 50 && PS >= 40 ){
        Charge1.amp(0);
            Charge2.amp(0.2);
        Charge3.amp(0);
  }
  if(PS <= 40){
        Charge1.amp(0);
            Charge2.amp(0);
        Charge3.amp(0.2);
  }
  }
  if(PS >= 55){
    PS = 55;
    Charge1.amp(0);

  }

  fill(220, 255, 222);
  ellipse(mouseX, mouseY, 35, 35);

  pop();
  //--------------------------------------------------------------------------------------------//
}
//Everything in this class deals with the grey asteroids that come from the right side
class Asteroid {
  constructor(Speed, Spawn, Size, SpeedV){
    this.Speed = 850;
    this.Spawn = random(22.5, 777.5);
    this.Size = random(10, 45);
    this.SpeedV = random(-1, -4);
  }
  SpawnA(){
    fill(100, 100, 100);
    ellipse(this.Speed, this.Spawn, this.Size, this.Size);
    this.Speed += this.SpeedV;
    if (this.Speed <= -15){
      this.Speed = 850;
      this.Spawn = random(22.5, 777.5);
      this.Size = random(10, 45);
      this.SpeedV = random(-1, -4);
    }
    //For Health Loss-----------------------------------------//
    if(dist(mouseX, mouseY, this.Speed,this.Spawn)< 34/2 + this.Size/2){
      HealthLoss();
      if(PS<= 54 && PS >= 50){
        HEALTH += -0.5;
      }
      if(PS <= 50 && PS >= 40){
        HEALTH += -1;
      }
      if(PS <=40){
        HEALTH += -2;
      }


    }
    //For Bonus Points when the mouse is pressed----------------------------//
    if(dist(mouseX, mouseY, this.Speed, this.Spawn) < PS/2 + this.Size/2){
      if(mouseIsPressed){
        HealthGain();
Dif += 50;
      }
    }
  }
  //Removes Asteroids when the game is lost
  StopA(){
          this.Size = 0;
      this.SpeedV = 0;
    this.Speed = 10000;
  }
  
  
}
//---------------------------------------------------------------------------------------------//
//Everything in this class deals with the red sphere ships that come from the top of the screen
class Ship {
  constructor(Speed, Spawn, Size, SpeedV){
    this.Speed = random(40, 760);
    this.Spawn = -90;
    this.Size = random(70, 80);
    this.SpeedV = random(1, 6);
  }
  SpawnS(){

    fill(150, 50, 50);
ellipse(this.Spawn, this.Speed, this.Size, this.Size);
    this.Speed += this.SpeedV;
    
    if(this.Speed >= 885){
      this.Speed = -90;
    this.Spawn = random(40, 760);
    this.Size = random(70, 80);
    this.SpeedV = random(1, 6);

    }
    //for Health Loss--------------------------------//
    if(dist(mouseX, mouseY, this.Spawn, this.Speed ) < 34/2 + this.Size/2){
      HealthLoss();
      HEALTH += -1.5;
            if(PS<= 54 && PS >= 50){
        HEALTH += -0.5;
      }
      if(PS <= 50 && PS >= 40){
        HEALTH += -1;
      }
      if(PS <=40){
        HEALTH += -2;
      }
    }
    // For Bonus points while mouse is pressed-------------------------//
    if(dist(mouseX, mouseY, this.Spawn, this.Speed ) < PS/2 + this.Size/2){
      if(mouseIsPressed){
        HealthGain();
        HEALTH += -0.3;
              Dif += 50;
      }
    }
    }
  //removes ships when the game is lost
  StopS(){
    this.Size = 0;
    this.SpeedV = 0;
    this.Spawn = 10000;
  }

}
//---------------------------------------------------------------------------------------------//
//Everything in this class deals with the purple bullets that fly from the left side
class Difast{
  constructor(Speed, Spawn, Size, SpeedV){
    this.Spawn = random(30, 770);
    this.Speed = -15;
    this.Size = random(20, 60);
    this.SpeedV = random(1, 6); 
  }
  SpawnD(){
    fill(150, 30, 150);
    ellipse(this.Speed, this.Spawn, this.Size, this.Size);
    this.Speed += this.SpeedV + mouseX/80;
    if(this.Speed >= 850){
    this.Spawn = random(30, 770);
    this.Speed = -15;
    this.Size = random(20, 60);
    this.SpeedV = random(1, 6); 
    }
        //For Health Loss-------------------------//
    if(dist(mouseX, mouseY, this.Speed,this.Spawn)< 34/2 + this.Size/2){
      HealthLoss();
      HEALTH += -5;
            if(PS<= 54 && PS >= 50){
        HEALTH += -0.5;
      }
      if(PS <= 50 && PS >= 40){
        HEALTH += -1;
      }
      if(PS <=40){
        HEALTH += -2;
      }

    }
        //For Bonus Points When the mouse is pressed------------------//
    if(dist(mouseX, mouseY, this.Speed, this.Spawn) < PS/2 + this.Size/2){
      if(mouseIsPressed){
        HealthGain();
        HEALTH += 0.2;
Dif += 50;
      }
    }
    }
  //removes bullets when the game is lost
  StopD(){
    this.SpeedV = 0;
    this.Size = 0;
    this.Speed = 10000;
  }
  }
//---------------------------------------------------------------------------------------------//
//Arguablly the most strange of the obsacles, Everything in this class deals with the ship that follows the players Y position. deals minimal damage to health but reduces points dramtically
class GG{
  constructor(Speed, Spawn, Size, SpeedV){
    this.Speed = 850;
    this.Spawn = random(40, 760);
    this.Size = random(20, 40);
    this.SpeedV = random(-1,-8);
  }
  SpawnG(){
    fill(10, 150, 150);
    ellipse(this.Spawn, this.Speed, this.Size, this.Size);
    this.Speed += this.SpeedV + mouseY/65;
if(this.Speed >= 855){
  this.Speed = -50;
      this.Spawn = random(40, 760);
    this.Size = random(20, 40);
    this.SpeedV = random(-1,-8);
}
    if(this.Speed <= -55){
      this.Speed = 850;
            this.Spawn = random(40, 760);
    this.Size = random(20, 40);
    this.SpeedV = random(-1,-8);
    }
        //For health loss------------------------------//
    if(dist(mouseX, mouseY, this.Spawn , this.Speed)< 34/2 + this.Size/2){
      HealthLoss();
      Dif += -100;
      HEALTH += 1.4;
            if(PS<= 54 && PS >= 50){
        HEALTH += -0.5;
      }
      if(PS <= 50 && PS >= 40){
        HEALTH += -1;
      }
      if(PS <=40){
        HEALTH += -2;
      }

    }
        //For Bonus Points When the Mouse is Pressed-------------------------//
    if(dist(mouseX, mouseY, this.Speed, this.Spawn) < PS/2 + this.Size/2){
      if(mouseIsPressed){
        HealthGain();
        HEALTH += - 0.3;
Dif += 50;
      }
    }
  }
  //Removes Ships when the game is lost
  StopG(){
      this.Size = 0;
      this.SpeedV = 0;
    this.Spawn = 10000;
  }
}
//------------------------------------Final Boss-----------------------------------------//
//Everything in this area deals with the final boss class and the abilities it gets
class Boss{
  constructor(Spawn, Speed, Size, SpeedV){
    this.Spawn = 400;
    this.Speed = - 200;
    this.Size = 150;
    this.SpeedV = +1;
  }
  SpawnBoss(){
    this.Speed += this.SpeedV
    push();
    fill(70, 70, 70);
    ellipse(this.Spawn, this.Speed, this.Size, this.Size);
    pop();
    
    push();
    fill(180);
    ellipse(this.Spawn + 50, this.Speed, 20, 20);
    ellipse(this.Spawn - 50, this.Speed, 20, 20);
    ellipse(this.Spawn, this.Speed + 50, 20, 20);
    ellipse(this.Spawn, this.Speed - 50, 20, 20);
    ellipse(this.Spawn + 40, this.Speed + 40, 20, 20);
    ellipse(this.Spawn - 40, this.Speed - 40, 20, 20);
    ellipse(this.Spawn + 40, this.Speed - 40, 20, 20);
    ellipse(this.Spawn - 40, this.Speed + 40, 20, 20);
    pop();
    
    if(this.Speed >= 400){
      this.SpeedV = 0;
      Bullets1();
    }
    if(dist(mouseX, mouseY, this.Spawn, this.Speed) < 35/2 + this.Size/2){
      HEALTH += -6;
      Dif += -20;
            push();
fill(140, 20, 20);
  ellipse(mouseX, mouseY, 35, 35);
      pop();
            if(PS<= 54 && PS >= 50){
        HEALTH += -0.5;
      }
      if(PS <= 50 && PS >= 40){
        HEALTH += -1;
      }
      if(PS <=40){
        HEALTH += -2;
      }
    }
    if(dist(mouseX, mouseY, this.Spawn, this.Speed) < PS/2 + this.Size/2){
      if(mouseIsPressed){
        BossHealth += -10;
           push();
          fill(150, 0, 0, 100);
          ellipse(this.Spawn, this.Speed, this.Size, this.Size);
          pop();
      }
    }
    if(dist(mouseX, mouseY, this.Spawn, this.Speed) < 40 + this.Size/2){
      if(mouseIsPressed){}
      else{
        if(PS <= 40){
            BossHealth += -40;
          push();
          fill(150, 0, 0, 100);
          ellipse(this.Spawn, this.Speed, this.Size, this.Size);
          pop();
        }

              
      }

    }
    
  }
  // Removes Final Boss
  StopBoss(){
    this.Spawn = 10000;
    this.SpeedV = 0;
  }
  
}
//--------------------------------------------bullet---------------------------------------//
// Everything in this class deals with the projectiles the boss spawns that fly out from its center
class Bullet{
  constructor(Spawn, Speed, Size, SpeedV, SpeedV2){
    this.Spawn = 400;
    this.Speed = 400;
    this.Size = random(30, 50);
    this.SpeedV =  random(-3, 3);
     this.SpeedV2 =  random(-3, 3);
    
  }
  SpawnBullet(){
    this.Spawn += this.SpeedV2;
    this.Speed += this.SpeedV;
    push();
    fill(255, 153, 51);
    ellipse(this.Spawn, this.Speed, this.Size, this.Size);
    pop();
    if(this.Spawn >= 900 || this.Spawn <= - 100){
      this.Spawn = 400;
      this.Speed = 400;
      this.SpeedV =  random(-3, 3);
       this.SpeedV2 =  random(-3, 3);
    }
    if(this.Speed >= 900 || this.Speed <= - 100){
      this.Spawn = 400;
      this.Speed = 400;
      this.SpeedV =  random(-3, 3);
       this.SpeedV2 =  random(-3, 3);
    }
    //for Health Loss
    if(dist(mouseX, mouseY, this.Spawn, this. Speed) < 35/2 + this.Size/2){
      HEALTH += -5;
      Dif += -60;
            if(PS<= 54 && PS >= 50){
        HEALTH += -0.5;
      }
      if(PS <= 50 && PS >= 40){
        HEALTH += -1;
      }
      if(PS <=40){
        HEALTH += -2;
      }
      push();
      fill(140, 20, 20);
  ellipse(mouseX, mouseY, 35, 35);
      pop();
    }
    //for health gain
    if(dist(mouseX, mouseY, this.Spawn, this.Speed) < PS/2 + this.Size/2){
      if(mouseIsPressed){
        HEALTH += 2;
      }
    }
  }
  // Removes Bullet
  StopBullet(){
    this.Spawn = 800;
    this.Speed = 800;
    this.Size = 0;
    this.SpeedV = 0;
    this.SpeedV2 = 0;
  }
}
//-------------------------------------------Tracker-----------------------------------//
class Tracker{
  constructor(Spawn, Speed, Size, SpeedV, SpeedV2){
    this.Spawn = 400;
    this.Speed = 400;
    this.Size = 20;
    this.SpeedV = 0;
    this.SpeedV2 = 0;
    
  }
  SpawnTracker(){
    this.Spawn += this.SpeedV;
    this.Speed += this.SpeedV2;
    push();
    fill(100, 20, 100);
    ellipse(this.Spawn, this.Speed, this.Size, this.Size);
    pop();
    if(this.Spawn < mouseX){
      this.SpeedV = 0.5;
    }
    if(this.Spawn > mouseX){
      this.SpeedV = -0.5
    }
    if(this.Speed < mouseY){
      this.SpeedV2 = 0.5;
    }
    if(this.Speed > mouseY){
      this.SpeedV2 = -0.5;
    }
    if(dist(mouseX, mouseY, this.Spawn, this.Speed) < 35/2 + this.Size/2){
      HEALTH += - 35;
      Dif += - 400;
            if(PS<= 54 && PS >= 50){
        HEALTH += -0.5;
      }
      if(PS <= 50 && PS >= 40){
        HEALTH += -1;
      }
      if(PS <=40){
        HEALTH += -2;
      }
      push();
fill(140, 20, 20);
  ellipse(mouseX, mouseY, 35, 35);
      pop();
      this.Spawn = 400;
      this.Speed = 400;
    }
  }
  //Removes Tracker
  StopTracker(){
    this.Spawn = 100000;
    this.SpeedV = 0;
    this.SpeedV2 = 0;
  }
}

//---------------------------------------------------------------------------------------------//
//Difficulty Functions
//Each stage spawns more ships and changes the colors of the score text to indicate difficulty change. Also the difficulty is based off of frame count that starts when the player presses a key to start the game.-- Bonus points are awarded for surviving different stages-- 
//Stage 5 is the only endless stage and is by far the most difficult until your points reach a certain threshold in wich the final boss spawns
//-----------Stage1----------------//
function Stage1(){
  
  if(Difficulty >= 600){
      Ast1.SpawnA();
      Ast2.SpawnA();
TR = 10;
TG = 240;
TB = 10;
    

  }

  
}
//-------------Stage 2-------------//
function Stage2(){
  if(Difficulty >= 3600 && Difficulty <=3601){
    Dif *= 1.5;
  }
  //----------------------------------------------------///////////------------//
  if(Difficulty >= 3600){
    ship1.SpawnS();
    Ast3.SpawnA();
    TR = 200;
    TG = 200;
    TB = 200;
  }
  if(Difficulty >=5400 && Difficulty <= 5401){
    Dif += 2000;
  }
  if(Difficulty >= 5400){
    ship2.SpawnS();

  }
}
//--------------Stage 3-----------------//
function Stage3(){
  if(Difficulty >=6400 && Difficulty <= 6401) {
        Dif *= 1.5;
  }
  if(Difficulty >= 6400){
    Die1.SpawnD();
    TR = 150;
    TG = 15;
    TB =150;
  }
  if(Difficulty >= 8200 && Difficulty <=8201){
    Dif += 3000;
  }
  if(Difficulty >= 8200){
    Die2.SpawnD();
  }
}
//-------------------Stage 4------------------------//
function Stage4(){
  if(Difficulty >= 14400 && Difficulty <= 14401){
    Dif *= 1.5;
  }
  if(Difficulty >= 14400){
    G1.SpawnG();
    TR = 255;
    TG = 165;
    TB = 0;
  }
  if(Difficulty >= 16200 && Difficulty <= 16201){
    Dif += 4000;
  }
  if(Difficulty >= 16200){
    G2.SpawnG();
  }
}
  //----------------------**Stage 5**---------------------------//
  function StageF(){
    if(Difficulty >= 18000 && Difficulty <= 18001){
      Dif *= 1.5
}
    if(Difficulty >= 18000){
      Ast4.SpawnA();
      ship3.SpawnS();
      TR = 255;
      TG = 0;
      TB = 10;
    }
    
    if(Difficulty >= 19800 && Difficulty <= 19801){
      Dif *= 1.5
    }
    if(Difficulty >=19800){
      Die3.SpawnD();
    }
    if(Difficulty >= 21600 && Difficulty <= 21601){
      Dif *= 1.5;
    }
    if(Difficulty >= 21600){
      ship4.SpawnS();
      G3.SpawnG();
    }
    //23400 & 23401
    if(Difficulty >= 23400 && Difficulty <= 23401){
      Dif *= 1.5;
}
    if(Difficulty >= 23400){
      Die4.SpawnD();
      G3.SpawnG();
    }
    // 25200
    if(Difficulty >= 25200){
      Dif += 1000;
TR = random(1, 255);
      TG = random(1, 255);
      TB = random(1, 255);
}
    //50,000,000
    if(Dif >= 10000000){
      BossStart();
    }
  }

//---------------------------------------Game Start-------------------------------------------//
//Start and End functions
//Everything inside this function deals with starting and running the game, from the menu to the players function activating and the stages being checked to see if the frame count has passed a certain limit.

function StartGame(){
  // Pressing Key starts the Game
  if(keyIsPressed){
    Start += 1;
  }
     push();
    fill(200);
  rectMode(CENTER);
    rect(rx, ry, rw, rh);
    pop();
  //-------------------------//
  //------------------------------Rules That Display On The Menu------------------------------//
  push();
  textAlign(CENTER);
  rectMode(CENTER);
  textSize(15);
  text('Press Any Key to Start', tbx, tby, 150, 50);
  text('This Game Becomes  More Difficult Over Time', tbx, tby + 80, 157, 55);
 textSize(20);
  text('Move The Mouse and Avoid Flying Objects For As Long As You Can', tbx, tby - 200, 390, 100);
  
  push();
  fill(220, 255, 222);
  ellipse(tbx , tby + 20, 35, 35);
  pop();
  
  push();
  fill(random(1, 255), random(1, 255), random(1,255));
  ellipse(tbx - 200, tby, 10, 10);
  pop();
  
  push();
  textSize(12);
  text('This Will Spin Around You While Your Power Sphere Recharges', tbx - 200, tby - 50, 150, 50);
  pop();
  
  
  push();
    fill(random(1, 255), random(1, 255), random(1,255));
  ellipse(tbx + 200 , tby, 55, 55)
  pop();
  
  push();
  textSize(13);
  text('This Is Your Power Sphere, Click The Mouse To Activate It', tbx + 200, tby - 50, 165, 50);
  text('Touching Obstacles With The Power Sphere Will Give You Bonus Points And Will Refill Your Health, But Be Warned The More Drained Your Power Sphere, The More Health You Will Lose When Hit', tbx + 200, tby + 120, 172, 150);
  pop();
  push();
  textSize(15);
  text('Different Objects Deal Different Damage', tbx, tby + 200, 210, 50);
  text('-If Your Health Reaches Zero, You Lose-', tbx, tby +250, 200, 50);
  pop();
  
  //-------------------------------------------------------------------------------------------//
  if(Start >= 1){
    Dif += 1;
      HealthCheck();
      Player();
    
      push();
  fill(TR, TG, TB);
  textSize(20);
  text('Score ' + Dif , 680, 40, 200, 30);
  pop();
    
    push();
    rectMode(CENTER);
    fill(255, 50, 0);
    text('Health ' + HEALTH,80, 40, 120, 20);
    pop();
    Stage1();
    Stage2();
    Stage3();
    Stage4();
    StageF();
    Difficulty += 1;
    rx = -5;
    ry = -5;
    rw = -5;
    rh = -5;
  tbx = -200;
    tby=-200;
  pop();
  }
}
//-----------------------------------------Game Over-------------------------------------//
//Everything inside this function deals with the game over sequence and screen
function StopGame(){
      Ambient.amp(0);
    PowerSphere.amp(0);
    Charge1.amp(0);
    Charge2.amp(0);
    Charge3.amp(0);
    GT += -0.0008;
    if(GT <= 0){
      GT = 0;
    }
    DeathS.amp(GT);
  if(LOSE >= 1){
    GO += 5;
    LOSE += -1;
        Dif += -1;
  Difficulty += -1;
  DONE = 1;
    if(GO >= 255){
GO = 255;}
  push();
  fill(0, 0, 0, GO);
  rectMode(CENTER);
 gx = 400;
 gy = 400;
 gw = 800;
 gh = 800;
  rect(gx, gy, gw, gh);
    push();
    textFont(Badfont);
  textSize(40);
  fill(255, 20, 20);
  text('Game Over', 400, 400, 330, 180);
  text('Score ' + Dif , 400, 280, 330, 180);
    //-----------------------------Game Over Screen Banter & Win-------------------------------//
    if(Dif <= 0){
      text('Utter Defeat!', 400, 600, 330, 180);
    }
    if(Dif >= 1000000 && Dif <= 1000000000){
      text('Incredible!', 400, 600, 330, 180);
    }
        if( Dif >= 10000000){
      text('Perfect Survivor', 400, 600, 300, 180);
    
    }

    //---------------------------------------------------------------------------------------//
  pop();
  pop();
    TR = 0;
    TG = 0;
    TB = 0;
  }
}
function AllStop(){
  if(DONE >= 1){ 
    StopGame();
    Ast1.StopA();
  Ast2.StopA();
  Ast3.StopA();
  Ast4.StopA();
  //--------------------------------------------//
  ship1.StopS();
  ship2.StopS();
  ship3.StopS();
  ship4.StopS();
  //-------------------------------------------//
  Die1.StopD();
  Die2.StopD();
  Die3.StopD();
   Die4.StopD();
  //------------------------------------------//
  G1.StopG();
G2.StopG();
G3.StopG();
G4.StopG();
  //-------------------------------------------//
    B1.StopBullet();
       B2.StopBullet();
       B3.StopBullet();
       B4.StopBullet();
       B5.StopBullet();
       B6.StopBullet();
       B7.StopBullet();
    B8.StopBullet();
    T1.StopTracker();
    T2.StopTracker();
    FinalBoss.StopBoss();
  }

}
//---------------------------------------------WIN!----------------------------------------//
//Everything in this area deals with winning the game and the win sound/screen
function Win(){
  WO += 2;
  wx = 400;
  wy = 400;
  wh = 800;
  ww = 800;
  if(WO >= 255){
    WO = 255;
  }

  push();
  rectMode(CENTER);
  fill(255, 255, 255, WO);
  rect(wx, wy, ww, wh);
  pop();
        push();
      fill(10, 250, 10);
      textSize(45);
      text('You Win!', 400, 400, 300, 180);
      pop();
  push();
      textFont(Badfont);
  textSize(40);
      fill(10, 250, 10);
  text('Score ' + Dif , 400, 280, 400, 180);
  pop();
  //------------sound--------------------//

  BossAmbient.amp(0);
  Ambient.amp(0);
    Winping.amp(0.2);
  Winping.freq(W);
  W += 1;

  if(W >= 200){
    WA = 0;
    W = 200;
    Winping.amp(WA);
  }
  if(WA <= 0){
    W = 0;
  }
}
//---------------------------------------Health----------------------------------------------//
//Everything inside these functions deals with checking and update the HEALTH variable to determine if the game is lost or not.
function HealthCheck(){
  if(HEALTH <= 0){
        LOSE += 1;
    StopGame();
  }
  if(HEALTH >= 200){
    HEALTH = 200;
  }
}
function HealthGain(){
  HEALTH += 0.5;
  

  //fill(20, 140, 20);
  //ellipse(mouseX, mouseY, 35, 35);
}

function HealthLoss(){
  HEALTH += -1.5;
  Dif += -60;
  push();
  fill(140, 20, 20);
  ellipse(mouseX, mouseY, 35, 35);
  pop();
}
//---------------------------------------Final Boss------------------------------------------//
//Everything in this area deeals with the spawning and defeat of the final boss
function BossStart(){
        Dif += - 1001;
  Btimer += 1;
  if(Btimer >= 1 && Btimer <= 2){
    Dif += 5000;
  }
  if (Btimer >= 600){
    FinalBoss.SpawnBoss();
    Btimer = 601;
      Ambient.amp(0);
  BossAmbient.amp(0.2);
  }
  if(BossHealth <= 75000){
    T1.SpawnTracker();
  }
if(BossHealth <= 50000){
  B5.SpawnBullet();
  B6.SpawnBullet();
  B7.SpawnBullet();
  B8.SpawnBullet();
  T2.SpawnTracker();
}
  if(BossHealth <= 0){
    AllStop();
 Wintimer += 1;
    Csize += 2;
    EV += - 2;
    push();
    noStroke();
    fill(255, 165, 0, EV);
    ellipse(COx, Coy, Csize, Csize);
    pop();
    if(Wintimer >= 300){
      Win();
      Csize = 0;
      EV = 0;
    }
        Boom.amp(0.4);
  Boom.freq(bf);
  bf += -0.3;
boomtimer += 1;
  if(boomtimer >= 155){
    boomtimer = 155;
    Boom.amp(0);
    bf = 0;
  }
    //Stops Boss fight when the boss dies
        B1.StopBullet();
       B2.StopBullet();
       B3.StopBullet();
       B4.StopBullet();
       B5.StopBullet();
       B6.StopBullet();
       B7.StopBullet();
    B8.StopBullet();
    T1.StopTracker();
    T2.StopTracker();
    FinalBoss.StopBoss();
  }
   Ast1.StopA();
  Ast2.StopA();
  Ast3.StopA();
  Ast4.StopA();
  //--------------------------------------------//
  ship1.StopS();
  ship2.StopS();
  ship3.StopS();
  ship4.StopS();
  //-------------------------------------------//
  Die1.StopD();
  Die2.StopD();
  Die3.StopD();
   Die4.StopD();
  //------------------------------------------//
  G1.StopG();
G2.StopG();
G3.StopG();
G4.StopG();
}
function Bullets1(){
  B1.SpawnBullet();
  B2.SpawnBullet();
  B3.SpawnBullet();
  B4.SpawnBullet();
}
//--------------------------------------Cheats------------------------------------//
function GodMode(){
  Health = 200;
}




