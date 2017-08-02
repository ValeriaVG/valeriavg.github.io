var eyes = {};

eyes.left = document.getElementById("left-eye");
eyes.right = document.getElementById("right-eye");
var maxX = 30;
var maxY = 10;
function getDx(eye, e) {
  var x0 = eye.left + (eye.right - eye.left) / 2;
  var x1 = e.clientX;
  var viewRadius = screen.width / 2;
  var dx = (x1 - x0) / viewRadius;
  if (dx < -1) dx = -1;
  if (dx > 1) dx = 1;
  return dx;
}
function getDy(eye, e) {
  var y0 = eye.top + (eye.bottom - eye.top) / 2;
  var y1 = e.clientY;
  var viewRadius = screen.height / 2;
  var dy = (y1 - y0) / viewRadius;
  if (dy < -1) dy = -1;
  if (dy > 1) dy = 1;
  return dy;
}

function getDxFromTilt(eye, e) {
  var x0 = eye.left + (eye.right - eye.left) / 2;
  var x1 = e.clientX;
  var viewRadius = screen.width / 2;
  var dx = (x1 - x0) / viewRadius;
  if (dx < -1) dx = -1;
  if (dx > 1) dx = 1;
  return dx;
}

var watchTheCursor = function(e) {
  var lEye = eyes.left.getBoundingClientRect();
  var rEye = eyes.right.getBoundingClientRect();
  var ldx = getDx(lEye, e);
  var rdx = getDx(rEye, e);
  var ldy = getDy(lEye, e);
  var rdy = getDy(rEye, e);

  eyes.left.firstElementChild.style.left = maxX / 2 + maxX / 2 * ldx + "px";
  eyes.right.firstElementChild.style.left = maxX / 2 + maxX / 2 * rdx + "px";

  eyes.left.firstElementChild.style.top = maxY * ldy + "px";
  eyes.right.firstElementChild.style.top = maxY * rdy + "px";
};

var watchTheTilt = function(e) {
  var lEye = eyes.left.getBoundingClientRect();
  var rEye = eyes.right.getBoundingClientRect();
  var ldx = -e.gamma/90;
  var rdx = -e.gamma/90;
  var ldy = -e.beta/45;
  var rdy = -e.beta/45;

  eyes.left.firstElementChild.style.left = maxX / 2 + maxX / 2 * ldx + "px";
  eyes.right.firstElementChild.style.left = maxX / 2 + maxX / 2 * rdx + "px";

  eyes.left.firstElementChild.style.top = maxY * ldy + "px";
  eyes.right.firstElementChild.style.top = maxY * rdy + "px";
};
document.addEventListener("mousemove", watchTheCursor);

window.addEventListener("deviceorientation", watchTheTilt, false);
