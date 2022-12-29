const block = document.querySelector('body');
const img = document.querySelectorAll('[data-prix-mouse]');
const circle = document.querySelector('.icons-main-block__circle_1');

block.addEventListener('mousemove', function (e) {
  let x = e.clientX / innerWidth;
  let y = e.clientY / innerHeight;

  img.forEach((el) => {
    el.setAttribute(
      'style',
      'margin-left:' + -x * 2 + '%;' + 'margin-top:' + -y * 2 + '%',
    );
  });

  circle.setAttribute(
    'style',
    'margin-right:' + x * 2 + '%;' + 'margin-top:' + -y * 2 + '%',
  );
});

block.addEventListener('mouseout', function (e) {
  img.forEach((el) => {
    el.setAttribute('style', 'margin:' + 0);
  });

  circle.setAttribute('style', 'margin' + 0);
});
