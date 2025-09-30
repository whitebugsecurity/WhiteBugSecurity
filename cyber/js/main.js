// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Accessible submenu (on focus/keyboard)
document.querySelectorAll('.menu-button').forEach(btn => {
  const li = btn.closest('.has-menu');
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    li.querySelector('.sub').style.display = expanded ? 'none' : 'block';
  });
  btn.addEventListener('blur', () => {
    setTimeout(() => {
      btn.setAttribute('aria-expanded','false');
      li.querySelector('.sub').style.display = 'none';
    }, 200);
  });
});
