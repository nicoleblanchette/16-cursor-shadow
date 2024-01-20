const hero = document.querySelector('.hero')
const text = document.querySelector('h1')
const walk = 100

const shadow = (e) => {
  const {offsetWidth: width, offsetHeight: height} = hero
  let { offsetX: x, offsetY: y } = e

  if (!e.target.matches('.hero')) {
    y = y + e.target.offsetTop
    x = x + e.target.offsetLeft
  }

  const xWalk = (x / width * walk) - (walk / 2)
  const yWalk = (y / height * walk) - (walk / 2)
  // console.log(xWalk, yWalk)

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 chartreuse,
  ${xWalk * -1}px ${yWalk}px 0 violet,
  ${xWalk}px ${yWalk * -1}px 0 turquoise
  `
}

const phoneShadow = (e) => {

let x = e.beta; // In degree in the range [-180,180)
let y = e.gamma; // In degree in the range [-90,90)

// output.textContent = `beta: ${x}\n`;
// output.textContent += `gamma: ${y}\n`;

// Because we don't want to have the device upside down
// We constrain the x value to the range [-90,90]
if (x > 90) {
  x = 90;
}
if (x < -90) {
  x = -90;
}

// To make computation easier we shift the range of
// x and y to [0,180]
x += 90;
y += 90;

// 10 is half the size of the ball
// It centers the positioning point to the center of the ball
text.style.textShadow = `${(maxY * y) / 180 - 10}px ${(maxX * x) / 180 - 10}px chartreuse`; // rotating device around the y axis moves the ball horizontally
//ball.style.top = `${(maxX * x) / 180 - 10}px`; // rotating device around the x axis moves the ball vertically
}


hero.addEventListener('mousemove', shadow)
window.addEventListener('deviceorientation', phoneShadow)