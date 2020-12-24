const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine;
var database;
var gameState = 0;
var playerCount;

function setup() {

engine = Engine.create();
world = engine.world;

database = firebase.database();
  createCanvas(displayWidth,displayHeight-150);



  createSprite(400, 200, 30, 70);
}

function draw() {
  background(255,255,0);  
  drawSprites();
}