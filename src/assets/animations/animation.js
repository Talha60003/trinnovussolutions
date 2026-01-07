const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");

let w, h, mode = "flow";
const mouse = { x: 0, y: 0 };

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

window.addEventListener("mousemove", e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener("keydown", e => {
  if (e.key === "1") mode = "flow";
  if (e.key === "2") mode = "wave";
  if (e.key === "3") mode = "vortex";
});

const particles = Array.from({ length: 140 }, () => ({
  x: Math.random() * w,
  y: Math.random() * h,
  vx: 0,
  vy: 0,
  r: Math.random() * 2 + 1,
  angle: Math.random() * Math.PI * 2
}));

function animate() {
  ctx.clearRect(0, 0, w, h);

  particles.forEach(p => {
    const dx = mouse.x - p.x;
    const dy = mouse.y - p.y;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;

    if (mode === "flow") {
      p.vx += dx * 0.00005;
      p.vy += dy * 0.00005;
    }

    if (mode === "wave") {
      p.vx += Math.sin(p.y * 0.01) * 0.02;
      p.vy += Math.cos(p.x * 0.01) * 0.02;
    }

    if (mode === "vortex") {
      p.angle += 0.01;
      p.vx += Math.cos(p.angle) * 0.03;
      p.vy += Math.sin(p.angle) * 0.03;
    }

    p.x += p.vx;
    p.y += p.vy;

    p.vx *= 0.95;
    p.vy *= 0.95;

    if (p.x < 0) p.x = w;
    if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h;
    if (p.y > h) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(80,160,255,0.7)";
    ctx.shadowBlur = 10;
    ctx.shadowColor = "rgba(80,160,255,0.6)";
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();
