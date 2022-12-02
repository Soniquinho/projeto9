var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d8ebf38e-9b31-4ee9-8798-1ba0edf35425","4b6478f1-becd-4709-afb6-4d210a0fea24","16e0906d-ec79-4971-b1f5-7bd8c6fc0d62","527b17de-1502-44ce-9f28-f5992302af46","d75f4be6-e7b0-4f74-8873-383987cac2d8"],"propsByKey":{"d8ebf38e-9b31-4ee9-8798-1ba0edf35425":{"name":"faxineira","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"xldfNAa9eCtC1YaGHWQCtd_11lR9c5bH","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/d8ebf38e-9b31-4ee9-8798-1ba0edf35425.png"},"4b6478f1-becd-4709-afb6-4d210a0fea24":{"name":"diretor","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"DPo_xy1oA8KkmyeG9naRxDTHg6GRfC41","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/4b6478f1-becd-4709-afb6-4d210a0fea24.png"},"16e0906d-ec79-4971-b1f5-7bd8c6fc0d62":{"name":"monitor","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"eUc8OicjMzYDI85vLQcI05ImbxUEAMQD","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/16e0906d-ec79-4971-b1f5-7bd8c6fc0d62.png"},"527b17de-1502-44ce-9f28-f5992302af46":{"name":"guilherme","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZoQ.T27Tdn1V6EsLqGv5F80dZPVS09mK","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/527b17de-1502-44ce-9f28-f5992302af46.png"},"d75f4be6-e7b0-4f74-8873-383987cac2d8":{"name":"celular","sourceUrl":null,"frameSize":{"x":10,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"w86edlNCInCFOjlG7IIVCNys7BGgyDxZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":20},"rootRelativePath":"assets/d75f4be6-e7b0-4f74-8873-383987cac2d8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//guilherme se comportou mal na escola,então sua professora confiscou seu celular.ajude guilherme a invadir a escola e recuperar seu celular

var mortes = 0;

var guilherme = createSprite(88,142,20,20);
guilherme.setAnimation("guilherme");
guilherme.scale = 0.8;

var wall = createSprite(200,90,300,10);
wall.shapeColor = "brown";

var wall2 = createSprite(200,350,300,10);
wall2.shapeColor = "brown";

var wall3 = createSprite(350,219,10,270);
wall3.shapeColor = "brown";

var wall4 = createSprite(50,219,10,270);
wall4.shapeColor = "brown";

var wall5 = createSprite(170,160,250,10);
wall5.shapeColor = "brown";

var wall6 = createSprite(300,230,10,150);
wall6.shapeColor = "brown";

var wall7 = createSprite(210,300,170,10);
wall7.shapeColor = "brown";

var wall8 = createSprite(120,263,10,80);
wall8.shapeColor = "brown";

var wall9 = createSprite(170,230,100,10);
wall9.shapeColor = "brown";

var piso_molhado1 = createSprite(150,110,15,15);
piso_molhado1.shapeColor = "lightBlue";

var piso_molhado2 = createSprite(210,110,15,15);
piso_molhado2.shapeColor = "lightBlue";

var piso_molhado3 = createSprite(180,143,15,15);
piso_molhado3.shapeColor = "lightBlue";

var piso_molhado4 = createSprite(240,143,15,15);
piso_molhado4.shapeColor = "lightBlue";

var piso_molhado5 = createSprite(313,255,15,15);
piso_molhado5.shapeColor = "lightBlue";

var piso_molhado6 = createSprite(313,252,15,15);
piso_molhado6.shapeColor = "lightBlue";

var piso_molhado7 = createSprite(335,216,15,15);
piso_molhado7.shapeColor = "lightBlue";

var piso_molhado8 = createSprite(202,329,15,15);
piso_molhado8.shapeColor = "lightBlue";

var piso_molhado9 = createSprite(338,305,15,15);
piso_molhado9.shapeColor = "lightBlue";

var faxineira = createSprite(86,320,20,20);
faxineira.setAnimation("faxineira");
faxineira.velocityY = 4;

var diretor = createSprite(80,193,20,20);
diretor.setAnimation("diretor");
diretor.velocityX = 3;

var monitor = createSprite(264,266,20,20);
monitor.setAnimation("monitor");
monitor.velocityY = -5;

var celular = createSprite(153,270,10,20);
celular.setAnimation("celular");


function draw() {
  background("gray") ;
  textSize(18);
  text("Mortes:"+mortes,300,25);
  
guilherme.collide(wall);
guilherme.collide(wall2);
guilherme.collide(wall3);
guilherme.collide(wall4);
guilherme.collide(wall5);
guilherme.collide(wall6);
guilherme.collide(wall7);
guilherme.collide(wall8);
guilherme.collide(wall9);
faxineira.bounceOff(wall5);
faxineira.bounceOff(wall2);
diretor.bounceOff(wall6);
diretor.bounceOff(wall4);
monitor.bounceOff(wall5);
monitor.bounceOff(wall7);
 
  drawSprites();


  if (guilherme.isTouching(piso_molhado1) || guilherme.isTouching(piso_molhado2) || guilherme.isTouching(piso_molhado3) || guilherme.isTouching(piso_molhado4) || guilherme.isTouching(piso_molhado5) || guilherme.isTouching(piso_molhado6) || guilherme.isTouching(piso_molhado7) || guilherme.isTouching(piso_molhado8) || guilherme.isTouching(piso_molhado9) || guilherme.isTouching(faxineira) || guilherme.isTouching(diretor) || guilherme.isTouching(monitor)) {
     guilherme.x = 82;
     guilherme.y = 142;
     mortes = mortes +1;
  }
  
  if (keyDown("a")) {
    guilherme.x = guilherme.x -2;
    
  }
  
  if (keyDown("d")) {
    guilherme.x = guilherme.x +2;
    
  }
  
  if (keyDown("s")) {
    guilherme.y = guilherme.y +2;
    
  }
  
    if (keyDown("w")) {
    guilherme.y = guilherme.y -2;
    
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
