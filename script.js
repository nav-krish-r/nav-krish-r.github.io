document.querySelectorAll('.ripple').forEach(button => {
  button.addEventListener('click', function (e) {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    button.style.setProperty('--x', x + 'px');
    button.style.setProperty('--y', y + 'px');
  });
});

document.getElementById('spinBtn').addEventListener('click', () => {
  const logo = document.getElementById('logo');

  // Remove and re-add the animation class to allow re-triggering
  logo.classList.remove('spin-animation');
  void logo.offsetWidth; // Force reflow
  logo.classList.add('spin-animation');
});
