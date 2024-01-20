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

const handleGyroscope = (event) => {
  const x = event.angularVelocity.x || 0;
  const y = event.angularVelocity.y || 0;
  const z = event.angularVelocity.z || 0;

  const xWalk = (x / 60 * walk) - (walk / 2);
  const yWalk = (y / 60 * walk) - (walk / 2);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 chartreuse,
    ${xWalk * -1}px ${yWalk}px 0 violet,
    ${xWalk}px ${yWalk * -1}px 0 turquoise
  `;

  p.textContent = `
  x: ${x} | y: ${y} | z: ${z}
  `;
};

// Enable mousemove event by default
hero.addEventListener('mousemove', shadow);

if (window.DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
  DeviceMotionEvent.requestPermission()
    .then(permissionState => {
      if (permissionState === 'granted') {
        const gyroscope = new Gyroscope({ frequency: 60 });

        gyroscope.addEventListener('reading', handleGyroscope);
        gyroscope.start();

        // Disable mousemove event when gyroscope is active
        hero.removeEventListener('mousemove', shadow);
      }
    })
    .catch(console.error);
} else {
  console.log('Gyroscope not supported');
  p.textContent = 'gyroscope error'
}
