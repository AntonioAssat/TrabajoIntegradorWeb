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

// Limpiar errores previos
  $span_error.textContent = '';
  $div_error.style.display = 'none';

  const nombre = $form.querySelector('#nombre').value;
  const apellido = $form.querySelector('#apellido').value;
  const mail = $form.querySelector('#mail').value;
  const contacto = $form.querySelector('#contacto').value;

  try {
   const usuario = new Usuario(nombre, apellido, mail, contacto);

    // Uso del createElement para mostrar el resultado si esta bien el formulario
    const pNombre   = document.createElement('p');
    pNombre.textContent   = `Nombre: ${usuario.nombre}`;
    const pApellido = document.createElement('p');
    pApellido.textContent = `Apellido: ${usuario.apellido}`;
    const pMail     = document.createElement('p');
    pMail.textContent     = `Mail: ${usuario.mail}`;
    const pContacto = document.createElement('p');
    pContacto.textContent = `Contacto: ${usuario.contacto}`;

    // Vacio del contenido de los campos
    $resultado.innerHTML = '';
    // Parrafos abajo de los datos del usuario ya registrado
    $resultado.appendChild(pNombre);
    $resultado.appendChild(pApellido);
    $resultado.appendChild(pMail);
    $resultado.appendChild(pContacto);

    //Como se muestra el resultado
    $resultado.style.display = 'block';

    // Limpio el formulario para otro ingreso de datos
    $form.reset(); 

    

  } catch (err) {
    $div_error.style.display = 'flex';
    $span_error.textContent = '';

    const capturaError = document.createElement('p');
    capturaError.className = 'mensaje‐error';  
    capturaError.textContent = err.message;    

    $span_error.appendChild(capturaError);
  }
});