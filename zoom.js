// Click an image with class "zoom" to see it full size; click anywhere or press Esc to close.
const overlay = document.createElement('div');
overlay.className = 'lightbox';
overlay.innerHTML = '<img alt="">';
document.body.appendChild(overlay);
const big = overlay.querySelector('img');

document.querySelectorAll('img.zoom').forEach(img => {
  img.addEventListener('click', () => {
    big.src = img.src;
    big.alt = img.alt;
    overlay.classList.add('open');
  });
});
overlay.addEventListener('click', () => overlay.classList.remove('open'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') overlay.classList.remove('open'); });
