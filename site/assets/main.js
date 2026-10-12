const header = document.querySelector('.site-header');
const sections = [...document.querySelectorAll('main section[id]')];
const links = [...document.querySelectorAll('.section-nav a')];
let scheduled = false;

function updateCurrentSection() {
  const readingLine = header.getBoundingClientRect().bottom + 36;
  let current = sections[0];

  for (const section of sections) {
    if (section.getBoundingClientRect().top <= readingLine) current = section;
  }

  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    current = sections.at(-1);
  }

  for (const link of links) {
    if (link.hash === `#${current.id}`) {
      link.setAttribute('aria-current', 'location');
    } else {
      link.removeAttribute('aria-current');
    }
  }
  scheduled = false;
}

function scheduleUpdate() {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(updateCurrentSection);
}

function updateHeaderHeight() {
  document.documentElement.style.setProperty('--header-height', `${header.offsetHeight}px`);
  scheduleUpdate();
}

new ResizeObserver(updateHeaderHeight).observe(header);
window.addEventListener('scroll', scheduleUpdate, { passive: true });
window.addEventListener('resize', scheduleUpdate);
window.addEventListener('hashchange', scheduleUpdate);
window.addEventListener('pageshow', scheduleUpdate);
document.fonts.ready.then(updateHeaderHeight);
updateHeaderHeight();
