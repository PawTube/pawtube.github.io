const cursor = document.getElementById("custom-cursor");
let lastX = 0, lastY = 0;

document.addEventListener("mousemove", e => {
  const dx = e.clientX - lastX;
  const dy = e.clientY - lastY;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursor.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

  lastX = e.clientX;
  lastY = e.clientY;
});
