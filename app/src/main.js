const hero = document.querySelector('.hero');
const text = document.querySelector('h1');
const walk = 100;

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
    ${xWalk}px ${yWalk}px 0 rgba(127, 255, 0, .8),
    ${xWalk * -1}px ${yWalk}px 0 rgba(238, 130, 238, .8),
    ${xWalk}px ${yWalk * -1}px 0 rgba(64, 224, 208, .8)
  `;
};

const handleOrientation = (e) => {
  let x = e.beta; // In degree in the range [-180,180)
  let y = e.gamma; // In degree in the range [-90,90)

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }

  text.style.textShadow = `
  ${y * 2 - 10}px ${x * 2 - 10}px 0 rgba(127, 255, 0, .8),
  ${-y}px ${x}px 0 rgba(238, 130, 238, .8),
  ${y}px ${-x}px 0 rgba(64, 224, 208, .8)`;
};


const main = () => {
  window.addEventListener("deviceorientation", handleOrientation);
  hero.addEventListener('mousemove', shadow);
};
main();
