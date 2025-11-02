import Usuario from './Usuario.js';

const $ = selector => document.querySelector(selector);

const $form      = $('form');
const $div_error = $('.error');
const $span_error= $div_error.querySelector('span');

// Preparar un contenedor dinámico para los resultados — lo crearemos al primer envío válido
let $resultado = null;

$form.addEventListener('submit', evt => {
  evt.preventDefault();

  // Limpiar mensaje de error previo
  $span_error.textContent = '';
  $div_error.style.display = 'none';

  const nombre   = $form.querySelector('#nombre').value.trim();
  const apellido = $form.querySelector('#apellido').value.trim();
  const mail     = $form.querySelector('#mail').value.trim();
  const contacto = $form.querySelector('#contacto').value.trim();

  try {
    const usuario = new Usuario(nombre, apellido, mail, contacto);

    // Si aún no hemos creado el contenedor resultado, lo creamos
    if (!$resultado) {
      $resultado = document.createElement('div');
      $resultado.className = 'resultado';
      // lo añadimos al DOM — por ejemplo justo después del formulario
      $form.parentNode.insertBefore($resultado, $form.nextSibling);
    }

    // Vaciar contenedor resultado para mostrar sólo este envío (o comentar la línea para acumular)
    $resultado.innerHTML = '';

    // Crear los párrafos dinámicos
    const pNombre   = document.createElement('p');
    pNombre.textContent   = `Nombre: ${usuario.nombre}`;
    const pApellido = document.createElement('p');
    pApellido.textContent = `Apellido: ${usuario.apellido}`;
    const pMail     = document.createElement('p');
    pMail.textContent     = `Mail: ${usuario.mail}`;
    const pContacto = document.createElement('p');
    pContacto.textContent = `Contacto: ${usuario.contacto}`;

    // Añadir los párrafos al contenedor
    $resultado.appendChild(pNombre);
    $resultado.appendChild(pApellido);
    $resultado.appendChild(pMail);
    $resultado.appendChild(pContacto);

    // Mostrar el contenedor (en caso que esté oculto vía CSS)
    $resultado.style.display = 'block';

    // Limpiar el formulario para otro uso
    $form.reset();

  } catch (err) {
    // Mostrar error
    $div_error.style.display = 'flex';

    const capturaError = document.createElement('p');
    capturaError.className   = 'mensaje-error';
    capturaError.textContent = err.message;

    $span_error.appendChild(capturaError);
  }
});