var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  canvas=createCanvas(w,h);
}

function draw() {
  background(181, 146, 224);
  noStroke();

  // rectangle 
  fill(205,92,92);
  rect((w/4 - 100), (h/2 - 40), 200, 40);

  // ellipse for the top
  fill(240,128,128);
  ellipse(w/4, (h/2 - 40), 200, 40);

  fill(205,92,92);
  // arc(x, y, w, h, start, stop, [mode], [detail])
  arc(w/4, h/2, 200, 40, TWO_PI, PI);


   // rectangle 
   fill(205,92,92);
   rect((w/2 - 100), (h/2 - 40), 200, 40);
 
   // ellipse for the top
   fill(240,128,128);
   ellipse(w/2, (h/2 - 40), 200, 40);
 
   fill(205,92,92);
   // arc(x, y, w, h, start, stop, [mode], [detail])
   arc(w/2, h/2, 200, 40, TWO_PI, PI);



}
