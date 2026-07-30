console.log("hello world")

const btn = document.getElementById('magic-btn');
const container = document.getElementById('particles');

const colors = ['#00f5ff', '#ff2d95', '#a855f7', '#39ff14', '#ffe66d'];

function createParticle() {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.background = colors[Math.floor(Math.random() * colors.length)];
  p.style.boxShadow = `0 0 6px ${p.style.background}`;
  p.style.animationDuration = (4 + Math.random() * 6) + 's';
  p.style.animationDelay = Math.random() * 2 + 's';
  container.appendChild(p);
  setTimeout(() => p.remove(), 10000);
}

btn.addEventListener('click', () => {
  for (let i = 0; i < 20; i++) {
    setTimeout(createParticle, i * 50);
  }
  btn.textContent = '🎉 Круто!';
  setTimeout(() => { btn.textContent = '✨ Нажми меня'; }, 2000);
});

setInterval(createParticle, 800);