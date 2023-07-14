var w = window.innerWidth;
var h = window.innerHeight;
let buttons = [];

function setup() {
  canvas=createCanvas(w,h);
  let b1 = new Button(w/4, h/2, 200, 40, color(205,92,92), color(240,128,128));
  let b2 = new Button(w/2, h/2, 200, 40, color(240,128,128), color(175,238,238));
  buttons.push(b1);
  buttons.push(b2);

}

function draw() {
  background(181, 146, 224);
  noStroke();

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].show();
  }


}

class Button {
  constructor(x, y, w, h, c, a) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.a = a;
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

}
