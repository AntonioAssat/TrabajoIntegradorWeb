export default class Usuario {

  constructor(nombre, apellido, mail, contacto) {
    this.nombre = this.#setNombre(nombre);
    this.apellido = this.#setApellido(apellido);
    this.mail = this.#setMail(mail);
    this.contacto = this.#setContacto(contacto);
  }

  #setNombre(nombre) {
    const noNumeros = /^\D+$/.test(nombre);
    const longitudMin = nombre.length <= 3;
    const longitudMax = nombre.length >= 12;
    const estaVacio = nombre === '';
    
    if (estaVacio) throw new Error('El nombre no puede estar vacio.');

    if (!noNumeros) throw new Error('El nombre no puede contener numeros.');

    if (longitudMin) throw new Error('El nombre debe contener minimo 3 caracteres.');

    if (longitudMax) throw new Error('El nombre debe contener maximo 12 caracteres.');

    return nombre;
  }

  #setApellido(apellido) {
    const noNumeros = /^\D+$/.test(apellido);
    const longitudMin = apellido.length <= 3;
    const longitudMax = apellido.length >= 12;
    const estaVacio = apellido === '';
    
    if (estaVacio) throw new Error('El apellido no puede estar vacio.');

    if (!noNumeros) throw new Error('El apellido no puede contener numeros.');

    if (longitudMin) throw new Error('El apellido debe contener minimo 3 caracteres.');

    if (longitudMax) throw new Error('El apellido debe contener maximo 12 caracteres.');

    return apellido;
  }

  #setMail(mail) {
    const formato = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(mail);
    const estaVacio = mail === '';

    if (estaVacio) throw new Error('El mail no puede estar vacio.');

    if (!formato) throw new Error('Formato del mail invalido.');

    return mail;
  }

  #setContacto(contacto) {
    const noLetras = /^\d+$/.test(contacto);
    const longitud = contacto.length === 10;
    const estaVacio = contacto === '';

    if (estaVacio) throw new Error('El contacto no puede estar vacio.');

    if (!noLetras) throw new Error('El contacto no debe contener letras.');

    if (!longitud) throw new Error('El contacto debe contener 10 caracteres.');

    return contacto;
  }
}