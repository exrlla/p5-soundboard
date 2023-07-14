var w = window.innerWidth;
var h = window.innerHeight;
let buttons = [];
let vine_boom;
let retro_game;
let whoosh;

function setup() {
  canvas=createCanvas(w,h);
  vine_boom = loadSound('vine_boom.mp3');
  retro_game = loadSound('retro_game.wav');
  whoosh = loadSound('whoosh.wav');

  let b1 = new Button(w/4, h/2, 200, 40, color(205,92,92), color(240,128,128), vine_boom);
  let b2 = new Button(w/2, h/2, 200, 40, color(72,209,204), color(175,238,238), retro_game);
  let b3 = new Button(w/4*3, h/2, 200, 40, color(255,215,0), color(255,255,0), whoosh);
  buttons.push(b1);
  buttons.push(b2);
  buttons.push(b3);
}

function mousePressed() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].clicked(mouseX, mouseY);
  }

}

function mouseReleased() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].y = h/2;
  }
}

function draw() {
  background(181, 146, 224);
  noStroke();

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].show();
  }
}

class Button {
  constructor(x, y, w, h, c, a, song) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.a = a;
    this.song = song;
  }

  show() {
    noStroke();
    fill(this.c);
    rect((this.x - 100), this.y, this.w, this.h);

    fill(this.a);
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.c);
    arc(this.x, (this.y + 40), this.w, this.h, TWO_PI, PI);
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);

    if (d < this.w / 2) {
      this.y = this.y + 10;
      this.song.play();
    } 

    
  }
    
}
