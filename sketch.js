//https://www.remove.bg/

var canvas,bone,boneImage,dog1,dog2,dog1Image,dog2Image,mazeImage,playButtonImage,playButton;
var gameState = "serve"
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21;
var wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,wall37,wall38,wall39,wall40,wall41,wall42;
var wall43,wall44,wall45,wall46,wall47,wall48,wall49,wall50,wall51,wall52,wall53,wall54,wall55,wall56,wall57,wall58,wall59,wall60,wall61,wall62,wall63;
var wall64,wall65,wall66,wall67,wall68,wall69,wall70,wall71,wall72,wall73,wall74,wall75;

function preload(){
    boneImage = loadImage("images/bone.png");
    dog1Image = loadImage("images/dog1.png");
    dog2Image = loadImage("images/dog2.png");
    mazeImage = loadImage("images/maze image.jpg");
    playButtonImage = loadImage("images/play_button.png");

}


function setup(){
    canvas = createCanvas(1350,595);
    
    wall1 = createSprite(50,300,3,555);
    wall1.shapeColour = "brown";
    wall2 =  createSprite(675,23,1250,3);
    wall2.shapeColour = "brown";
    wall3 = createSprite(1300,300,3,555);
    wall3.shapeColour = "brown";
    wall4 = createSprite(300,577,500,3);
    wall4.shapeColour = "brown";
    wall5 = createSprite(1050,577,500,3);
    wall5.shapeColour = "brown";
    wall6 = createSprite(171,550,3,50);
    wall6.shapeColour = "brown";
    wall7 = createSprite(678,50,3,50);
    wall7.shapeColour = "brown";
    wall8 = createSprite(890,50,3,50);
    wall8.shapeColour = "brown";
    wall9 = createSprite(1015,75,250,3);
    wall9.shapeColour = "brown";
    wall10 = createSprite(1140,100,3,50)
    wall10.shapeColour = "brown";
    wall11 = createSprite(1170,125,60,3);
    wall11.shapeColour = "brown";
    wall12 = createSprite(1200,100,3,50);
    wall12.shapeColour = "brown";
    wall13 = createSprite(680,75,160,3);
    wall13.shapeColour = "brown";
    wall14 = createSprite(760,96,3,45);
    wall14.shapeColour = "brown";
    wall15 = createSprite(660,120,400,3);
    wall15.shapeColour = "brown";
    wall16 = createSprite(680,275,3,305);
    wall16.shapeColour = "brown";
    wall17 = createSprite(460,98,3,47);
    wall17.shapeColour = "brown";
    wall18 = createSprite(405,75,110,3);
    wall18.shapeColour = "brown";
    wall19 = createSprite(350,97,3,45);
    wall19.shapeColour = "brown";
    wall20 = createSprite(940,190,3,230);
    wall20.shapeColour = "brown";
    wall21 = createSprite(1000,305,120,3);
    wall21.shapeColour = "brown";
    wall22 = createSprite(390,400,3,80);
    wall22.shapeColour = "brown";
    wall23 = createSprite(1000,270,3,65);
    wall23.shapeColour = "brown";
    wall24 = createSprite(850,190,175,3);
    wall24.shapeColour = "brown";
    wall25 = createSprite(96,120,90,3);
    wall25.shapeColour = "brown";
    wall26 = createSprite(764,225,3,70);
    wall26.shapeColour = "brown";
    wall27 = createSprite(850,300,3,120);
    wall27.shapeColour = "brown";
    wall28 = createSprite(985,360,440,3);
    wall28.shapeColour = "brown";
    wall29 = createSprite(570,426,220,3);
    wall29.shapeColour = "brown";
    wall30 = createSprite(355,550,3,50);
    wall30.shapeColour = "brown";
    wall31 = createSprite(465,525,220,3);
    wall31.shapeColour = "brown";
    wall32 = createSprite(575,503,3,45);
    wall32.shapeColour = "brown";
    wall33 = createSprite(670,480,190,3);
    wall33.shapeColour = "brown";
    wall34 = createSprite(765,392,3,65);
    wall34.shapeColour = "brown";
    wall35 = createSprite(1000,390,3,60);
    wall25.shapeColour = "brown";
    wall36 = createSprite(1204,390,3,60);
    wall36.shapeColour = "brown";
    wall37 = createSprite(1132,420,145,3);
    wall37.shapeColour = "brown";
    wall38 = createSprite(1140,447,3,50);
    wall38.shapeColour = "brown";
    wall39 = createSprite(1040,472,200,3);
    wall39.shapeColour = "brown";
    wall40 = createSprite(940,446,3,50);
    wall40.shapeColour = "brown";
    wall41 = createSprite(1005,553,3,50);
    wall41.shapeColour = "brown";
    wall42 = createSprite(845,530,320,3);
    wall42.shapeColour = "brown";
    wall43 = createSprite(850,470,3,115);
    wall43.shapeColour = "brown";
    wall44 = createSprite(1255,470,85,3);
    wall44.shapeColour = "brown";
    wall45 = createSprite(1214,495,3,50);
    wall45.shapeColour = "brown";
    wall46 = createSprite(1150,520,130,3);
    wall46.shapeColour = "brown";
    wall47 = createSprite(575,300,550,3);
    wall47.shapeColour = "brown";
    wall48 = createSprite(1255,220,85,3);
    wall48.shapeColour = "brown";
    wall49 = createSprite(1214,195,3,50);
    wall49.shapeColour = "brown";
    wall50 = createSprite(1108,170,215,3);
    wall50.shapeColour = "brown";
    wall51 = createSprite(1000,149,3,45);
    wall51.shapeColour = "brown";
    wall52 = createSprite(1023,125,50,3);
    wall52.shapeColour = "brown";
    wall53 = createSprite(1060,200,3,60);
    wall53.shapeColour = "brown";
    wall54 = createSprite(1095,230,70,3);
    wall54.shapeColour = "brown";
    wall55 = createSprite(1130,262,3,65);
    wall55.shapeColour = "brown";
    wall56 = createSprite(1165,295,70,3);
    wall56.shapeColour = "brown";
    wall57 = createSprite(460,450,3,50);
    wall57.shapeColour = "brown";
    wall58 = createSprite(330,475,260,3);
    wall58.shapeColour = "brown";
    wall59 = createSprite(200,450,3,50);
    wall59.shapeColour = "brown";
    wall60 = createSprite(145,525,55,3);
    wall60.shapeColour = "brown";
    wall61 = createSprite(120,500,3,50);
    wall61.shapeColour = "brown";
    wall62 = createSprite(165,425,70,3);
    wall62.shapeColour = "brown";
    wall63 = createSprite(130,360,3,130);
    wall63.shapeColour = "brown";
    wall64 = createSprite(165,295,70,3);
    wall64.shapeColour = "brown";
    wall65 = createSprite(200,185,3,220);
    wall65.shapeColour = "brown";
    wall66 = createSprite(410,240,160,3);
    wall66.shapeColour = "brown";
    wall67 = createSprite(400,185,3,110);
    wall67.shapeColour = "brown";
    wall68 = createSprite(580,240,3,120);
    wall68.shapeColour = "brown";
    wall69 = createSprite(540,180,80,3);
    wall69.shapeColour = "brown";
    wall70 = createSprite(260,180,275,3);
    wall70.shapeColour = "brown";
    wall71 = createSprite(100,240,95,3);
    wall71.shapeColour = "brown";
    wall72 = createSprite(280,475,3,120);
    wall72.shapeColour = "brown";
    wall73 = createSprite(300,330,3,60);
    wall73.shapeColour = "brown";
    wall74 = createSprite(400,360,380,3);
    wall74.shapeColour = "brown";
    wall75 = createSprite(160,75,80,3);
    wall75.shapeColour = "brown";

    bone = createSprite(710,50,50,10);
    bone.addImage(boneImage);
    bone.scale = 0.1;

    dog1 = createSprite(620,560,0,0);
    dog1.scale = 0.27;
    //dog1.debug = true;
    dog1.setCollider("circle",0,0,70);
    dog1.addImage(dog1Image);
    dog2 = createSprite(670,560,0,0);
    dog2.addImage(dog2Image);
    //dog2.debug = true;
    dog2.setCollider("circle",0,0,200);
    dog2.scale = 0.1;

    playButton = createSprite(650,295,200,200);
    playButton.addImage(playButtonImage);
    playButton.scale = 0.5;
}


function draw(){
    //0, 255, 219
    console.log(gameState);

    if(gameState === "serve"){
        background("white");
        dog1.display();
        dog2.display();
        text(mouseX + "," + mouseY,mouseX,mouseY);
        fill(0,0,0)
        text("Boomer",dog1.x - 20,dog1.y - 25);
        text("Aaryan",dog2.x - 20, dog2.y - 25);
        textSize(20);
        text("Boomer can be controlled with the 'WSAD' keys and Aaryan can be controlled with the 'Arrow' keys",200,70);
        fill("green");
        text("Press the play button to Start",525,185);
        playButton.display();
        
        if(mousePressedOver(playButton)){
            gameState = "play";
        }
    }

    if(gameState === "play"){
     background(0,255,219);

     playButton.visible = false;
     
     text("Boomer",dog1.x - 20,dog1.y - 25);
     text("Aaryan",dog2.x - 20, dog2.y - 25);
     
    if(keyDown(UP_ARROW)){
        dog2.y = dog2.y - 5;
    }

    if(keyDown(DOWN_ARROW)){
        dog2.y = dog2.y + 5;
    }

    if(keyDown(LEFT_ARROW)){
        dog2.x = dog2.x - 5;
    }

    if(keyDown(RIGHT_ARROW)){
        dog2.x = dog2.x + 5;
    }

    if(keyDown("W")){
        dog1.y = dog1.y - 5;
    }

    if(keyDown("S")){
        dog1.y = dog1.y + 5;
    }

    if(keyDown("A")){
        dog1.x = dog1.x - 5;
    }

    if(keyDown("D")){
        dog1.x = dog1.x + 5;
    }

    if(dog1.isTouching(bone)||dog2.isTouching(bone)){
        gameState = "end";
    }
    
    dog1.bounceOff(wall1);
    dog1.bounceOff(wall2);
    dog1.bounceOff(wall3);
    dog1.bounceOff(wall4);
    dog1.bounceOff(wall5);
    dog1.bounceOff(wall6);
    dog1.bounceOff(wall7);
    dog1.bounceOff(wall8);
    dog1.bounceOff(wall9);
    dog1.bounceOff(wall10);
    dog1.bounceOff(wall11);
    dog1.bounceOff(wall12);
    dog1.bounceOff(wall13);
    dog1.bounceOff(wall14);
    dog1.bounceOff(wall15);
    dog1.bounceOff(wall16);
    dog1.bounceOff(wall17);
    dog1.bounceOff(wall18);
    dog1.bounceOff(wall19);
    dog1.bounceOff(wall20);
    dog1.bounceOff(wall21);
    dog1.bounceOff(wall22);
    dog1.bounceOff(wall23);
    dog1.bounceOff(wall24);
    dog1.bounceOff(wall25);
    dog1.bounceOff(wall26);
    dog1.bounceOff(wall27);
    dog1.bounceOff(wall28);
    dog1.bounceOff(wall29);
    dog1.bounceOff(wall30);
    dog1.bounceOff(wall31);
    dog1.bounceOff(wall32);
    dog1.bounceOff(wall33);
    dog1.bounceOff(wall34);
    dog1.bounceOff(wall35);
    dog1.bounceOff(wall36);
    dog1.bounceOff(wall37);
    dog1.bounceOff(wall38);
    dog1.bounceOff(wall39);
    dog1.bounceOff(wall40);
    dog1.bounceOff(wall41);
    dog1.bounceOff(wall42);
    dog1.bounceOff(wall43);
    dog1.bounceOff(wall44);
    dog1.bounceOff(wall45);
    dog1.bounceOff(wall46);
    dog1.bounceOff(wall47);
    dog1.bounceOff(wall48);
    dog1.bounceOff(wall49)
    dog1.bounceOff(wall50);
    dog1.bounceOff(wall51);
    dog1.bounceOff(wall52);
    dog1.bounceOff(wall53);
    dog1.bounceOff(wall54);
    dog1.bounceOff(wall55);
    dog1.bounceOff(wall56);
    dog1.bounceOff(wall57);
    dog1.bounceOff(wall58);
    dog1.bounceOff(wall59);
    dog1.bounceOff(wall60);
    dog1.bounceOff(wall61);
    dog1.bounceOff(wall62);
    dog1.bounceOff(wall63);
    dog1.bounceOff(wall64);
    dog1.bounceOff(wall65);
    dog1.bounceOff(wall66);
    dog1.bounceOff(wall67);
    dog1.bounceOff(wall68);
    dog1.bounceOff(wall69);
    dog1.bounceOff(wall70);
    dog1.bounceOff(wall71);
    dog1.bounceOff(wall72);
    dog1.bounceOff(wall73);
    dog1.bounceOff(wall74);
    dog1.bounceOff(wall75);
    
    dog2.bounceOff(wall1);
    dog2.bounceOff(wall2);
    dog2.bounceOff(wall3);
    dog2.bounceOff(wall4);
    dog2.bounceOff(wall5);
    dog2.bounceOff(wall6);
    dog2.bounceOff(wall7);
    dog2.bounceOff(wall8);
    dog2.bounceOff(wall9);
    dog2.bounceOff(wall10);
    dog2.bounceOff(wall11);
    dog2.bounceOff(wall12);
    dog2.bounceOff(wall13);
    dog2.bounceOff(wall14);
    dog2.bounceOff(wall15);
    dog2.bounceOff(wall16);
    dog2.bounceOff(wall17);
    dog2.bounceOff(wall18);
    dog2.bounceOff(wall19);
    dog2.bounceOff(wall20);
    dog2.bounceOff(wall21);
    dog2.bounceOff(wall22);
    dog2.bounceOff(wall23);
    dog2.bounceOff(wall24);
    dog2.bounceOff(wall25);
    dog2.bounceOff(wall26);
    dog2.bounceOff(wall27);
    dog2.bounceOff(wall28);
    dog2.bounceOff(wall29);
    dog2.bounceOff(wall30);
    dog2.bounceOff(wall31);
    dog2.bounceOff(wall32);
    dog2.bounceOff(wall33);
    dog2.bounceOff(wall34);
    dog2.bounceOff(wall35);
    dog2.bounceOff(wall36);
    dog2.bounceOff(wall37);
    dog2.bounceOff(wall38);
    dog2.bounceOff(wall39);
    dog2.bounceOff(wall40);
    dog2.bounceOff(wall41);
    dog2.bounceOff(wall42);
    dog2.bounceOff(wall43);
    dog2.bounceOff(wall44);
    dog2.bounceOff(wall45);
    dog2.bounceOff(wall46);
    dog2.bounceOff(wall47);
    dog2.bounceOff(wall48);
    dog2.bounceOff(wall49)
    dog2.bounceOff(wall50);
    dog2.bounceOff(wall51);
    dog2.bounceOff(wall52);
    dog2.bounceOff(wall53);
    dog2.bounceOff(wall54);
    dog2.bounceOff(wall55);
    dog2.bounceOff(wall56);
    dog2.bounceOff(wall57);
    dog2.bounceOff(wall58);
    dog2.bounceOff(wall59);
    dog2.bounceOff(wall60);
    dog2.bounceOff(wall61);
    dog2.bounceOff(wall62);
    dog2.bounceOff(wall63);
    dog2.bounceOff(wall64);
    dog2.bounceOff(wall65);
    dog2.bounceOff(wall66);
    dog2.bounceOff(wall67);
    dog2.bounceOff(wall68);
    dog2.bounceOff(wall69);
    dog2.bounceOff(wall70);
    dog2.bounceOff(wall71);
    dog2.bounceOff(wall72);
    dog2.bounceOff(wall73);
    dog2.bounceOff(wall74);
    dog2.bounceOff(wall75);

    dog1.bounce(dog2);

    drawSprites();
        }

        if(gameState === "end"){
            background(0,0,0);
            
            text(mouseX + "," + mouseY,mouseX,mouseY);
           
           if(dog1.isTouching(bone)){
              fill("white");
              textSize(50);
              text("Boomer is the Winner !!!!",450,470);
              
              dog1.display();
              bone.display();

            }
            
            if(dog2.isTouching(bone)){
               fill("white");
               textSize(50);
               text("Aaryan is the Winner !!!!",450,470);

               dog2.display();
               bone.display();
              }
        }
      
   } 
    