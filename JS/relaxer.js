const container = document.getElementById('container_relaxer');
const text = document.getElementById('text');

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = 'Breathe In!';
  container.className = 'container_relaxer grow';

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out!';
      container.className = 'container_relaxer shrink';
    }, holdTime);
  }, breatheTime);
}

setInterval(breathAnimation, totalTime);