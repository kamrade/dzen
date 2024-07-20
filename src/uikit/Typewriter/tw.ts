const el: HTMLElement | null = document.querySelector('.text');
const originalText = el?.innerHTML;

console.log('el: ' + el);
console.log('original text: ' + originalText);

if (el) {
  el.innerHTML = originalText?.substring(0, 12) + '...';
}

let lastScrollY = 0;
let ticking = false;

const type = (scroll: number) => {
  if (el) {
    el.innerHTML = originalText ? originalText.substring(0, 12 + scroll) : '';
  }
};

const update = () => {
  type(lastScrollY / 2);
  ticking = false;
};

const requestTick = () => {
  if (!ticking) {
    window.requestAnimationFrame(update);
    ticking = true;
  }
};

const onScroll = () => {
  lastScrollY = window.scrollY;
  requestTick();
};

window.addEventListener('scroll', onScroll, false);
