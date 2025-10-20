import Usuario from './Usuario.js'

const $ = (selector) => document.querySelector(selector);

const $form = $('form');
const $resultado = $('.resultado');

const $nombre = $('.nombre');
const $apellido = $('.apellido');
const $mail = $('.mail');
const $contacto = $('.contacto');

const $div_error = $('.error');
const $span_error = $div_error.querySelector('span');

$form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const nombre = $form.querySelector('#nombre').value;
  const apellido = $form.querySelector('#apellido').value;
  const mail = $form.querySelector('#mail').value;
  const contacto = $form.querySelector('#contacto').value;

  try {
    const usuario = new Usuario(nombre, apellido, mail, contacto);

    $nombre.textContent = usuario.nombre;
    $apellido.textContent = usuario.apellido;
    $mail.textContent = usuario.mail;
    $contacto.textContent = usuario.contacto;

    $resultado.style.display = 'block';
    $div_error.style.display = 'none';
    $form.style.display = 'none';
  } catch (err) {
    $div_error.style.display = 'flex';
    $span_error.textContent = '';

    const capturaError = document.createElement('p');
    capturaError.className = 'mensaje‐error';  
    capturaError.textContent = err.message;    

    $span_error.appendChild(capturaError);
  }
});