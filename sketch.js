var w = window.innerWidth;
var h = window.innerHeight;
let buttons = [];
let vine_boom;
let retro_game;
let whoosh;
let acute_guitar;
let guitar_string;
let guitar_notif;

function setup() {
  canvas=createCanvas(w,h);
  vine_boom = loadSound('vine_boom.mp3');
  retro_game = loadSound('retro_game.wav');
  whoosh = loadSound('whoosh.wav');
  acute_guitar = loadSound('acute_guitar.wav');
  guitar_string = loadSound('guitar_string.wav');
  guitar_notif = loadSound('guitar_notif.wav');



  let b1 = new Button(w/4, h/2, 200, 40, color(205,92,92), color(240,128,128), vine_boom);
  let b2 = new Button(w/2, h/2, 200, 40, color(72,209,204), color(175,238,238), retro_game);
  let b3 = new Button(w/4*3, h/2, 200, 40, color(255,215,0), color(255,255,0), whoosh);

  let b4 = new Button(w/4, h/3, 200, 40, color(226, 132, 19), color(244, 190, 124), vine_boom);
  let b5 = new Button(w/2, h/3, 200, 40, color(0, 159, 183), color(153, 241, 255), retro_game);
  let b6 = new Button(w/4*3, h/3, 200, 40, color(145, 145, 233), color(204, 204, 245), whoosh);

  let b7 = new Button(w/4, 2*h/3, 200, 40, color(255, 163, 175), color(255, 214, 220), acute_guitar);
  let b8 = new Button(w/2, 2*h/3, 200, 40, color(143, 45, 86), color(216, 131, 166), guitar_string);
  let b9 = new Button(w/4*3, 2*h/3, 200, 40, color(236, 78, 32), color(234, 162, 133), guitar_notif);
  
  buttons.push(b1);
  buttons.push(b2);
  buttons.push(b3);
  buttons.push(b4);
  buttons.push(b5);
  buttons.push(b6);
  buttons.push(b7);
  buttons.push(b8);
  buttons.push(b9);
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
  background(51, 92, 129);
  noStroke();

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].show();
  }
}

class Button {
  constructor(x, y, w, h, color, accent, song) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.accent = accent;
    this.song = song;
  }

  show() {
    noStroke();
    fill(this.color);
    rect((this.x - 100), this.y, this.w, this.h);

    fill(this.accent);
    ellipse(this.x, this.y, this.w, this.h);

    fill(this.color);
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
