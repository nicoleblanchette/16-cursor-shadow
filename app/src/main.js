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
    ${xWalk}px ${yWalk}px 0 chartreuse,
    ${xWalk * -1}px ${yWalk}px 0 violet,
    ${xWalk}px ${yWalk * -1}px 0 turquoise
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

  text.style.textShadow = `${y * 2 - 10}px ${x * 2 - 10}px 0 chartreuse,
  ${-y}px ${x}px 0 violet,
  ${y}px ${-x}px 0 turquoise`;
};


const main = () => {
  window.addEventListener("deviceorientation", handleOrientation);
  hero.addEventListener('mousemove', shadow);
};
main();
