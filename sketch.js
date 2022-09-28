

var bgStart, titleImg, startTitle;

function preload(){
  bgStart = loadImage("./assets/inicio.png");
  titleImg = loadImage("./assets/title.png");

  niño_running = loadAnimation("Niño.png","Niño1.png","Niño2.png",
  "Niño3.png","Niño4.png","Niño5.png","Niño6.png","Niño7.png");
  niño_collided = loadAnimation("gameOverFerci.png");
  
  groundImage = loadImage("inicioLargo.png");
  
  points = loadImage("puntos.png");
  points = loadImage("puntos1.png");
  points = loadImage("puntos2.png");
  points = loadImage("puntos3.png");
  points = loadImage("puntos4.png");

  obstacle = loadImage("obstaculo.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  startTitle = createSprite(width / 2, 100, 200, 30);
  startTitle.addImage(titleImg);

  //Imagen de Luc y Ferci
  button = createImg("./assets/inicioMounstro.png");
  button.position(width / 3, 100);
  button.size(300, 430)

  //Boton de inicio
  button = createImg("./assets/start.png");
  button.position(width / 3, 550);
  button.size(500, 150);


  //button.mousePressed(changeBG)
}

function draw() {

  background(bgStart);
  //mostrar la puntuación

  //


  drawSprites();
}
