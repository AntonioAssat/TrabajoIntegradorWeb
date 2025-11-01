const $ = (selector) => document.querySelector(selector);

const $btn_back = $('#back');
const $btn_next = $('#next');
const $img = $('img');

let count = 0;
const images = [
  'cratina',
  'hydromax',
  'protein-foods',
  'protein',
  'vitamina',
];

$img.src = `./public/image/${images[count]}.webp`;
$img.alt = `creatina`;

$btn_back.addEventListener('click', () => {
  // operador ternario '?'
  //count = (count === 0) ? 4 : count - 1; 
 // count = --count % images.length;
  count = (count - 1 + images.length) % images.length;
  $img.src = `./public/image/${images[count]}.webp`;
  $img.alt = images[count];
});

$btn_next.addEventListener('click', () => {
  //count = (count === 4) ? 0 : count + 1;
  count = ++count % images.length
  $img.src = `./public/image/${images[count]}.webp`;
  $img.alt = images[count];
});