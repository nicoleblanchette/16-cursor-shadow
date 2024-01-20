const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100;
const p = document.createElement('p')
document.body.append(p)

const shadow = (e) => {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (!e.target.matches('.hero')) {
    y = y + e.target.offsetTop;
    x = x + e.target.offsetLeft;
  }

  const xWalk = (x / width * walk) - (walk / 2);
  const yWalk = (y / height * walk) - (walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 chartreuse,
    ${xWalk * -1}px ${yWalk}px 0 violet,
    ${xWalk}px ${yWalk * -1}px 0 turquoise
  `;
};

// const handleGyroscope = (event) => {
//   const x = event.angularVelocity.x || 0;
//   const y = event.angularVelocity.y || 0;
//   const z = event.angularVelocity.z || 0;

//   const xWalk = (x / 60 * walk) - (walk / 2);
//   const yWalk = (y / 60 * walk) - (walk / 2);

//   text.style.textShadow = `
//     ${xWalk}px ${yWalk}px 0 chartreuse,
//     ${xWalk * -1}px ${yWalk}px 0 violet,
//     ${xWalk}px ${yWalk * -1}px 0 turquoise
//   `;

//   p.textContent = `
//   x: ${x} | y: ${y} | z: ${z}
//   `;
// };

const ball = document.querySelector(".ball");
const garden = document.querySelector(".garden");
const output = document.querySelector(".output");

const maxX = garden.clientWidth - ball.clientWidth;
const maxY = garden.clientHeight - ball.clientHeight;

function handleOrientation(event) {
hero.removeEventListener('mousemove', shadow)
let x = event.beta; // In degree in the range [-180,180)
let y = event.gamma; // In degree in the range [-90,90)

output.textContent = `beta: ${x}\n`;
output.textContent += `gamma: ${y}\n`;

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
ball.style.left = `${(maxY * y) / 180 - 10}px`; // rotating device around the y axis moves the ball horizontally
ball.style.top = `${(maxX * x) / 180 - 10}px`;// rotating device around the x axis moves the ball vertically
  text.textContent = 'i did it!'
  text.style.color = 'yellow'
  text.style.textShadow = `${x+30}px ${y+30}px chartreuse`
   
};

window.addEventListener("deviceorientation", handleOrientation);

// Enable mousemove event by default
hero.addEventListener('mousemove', shadow);

// if (window.DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
//   DeviceMotionEvent.requestPermission()
//     .then(permissionState => {
//       if (permissionState === 'granted') {
//         const gyroscope = new Gyroscope({ frequency: 60 });

//         gyroscope.addEventListener('reading', handleGyroscope);
//         gyroscope.start();

//         // Disable mousemove event when gyroscope is active
//         hero.removeEventListener('mousemove', shadow);
//       }
//     })
//     .catch(console.error);
// } else {
//   console.log('Gyroscope not supported');
//   p.textContent = 'gyroscope error'
// }
