const inputComando = document.getElementById('instruccion');
const btnEjecutar = document.getElementById('btnejecutar');
const btnLimpiar = document.getElementById('btnlimpiar');
const contenedorSalida = document.getElementById('salida');

// Función auxiliar que da las pausas de 1s
const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Agregamos el metodo al boton
btnEjecutar.addEventListener('click', procesarComando);
btnLimpiar.addEventListener('click', LimpiarSalida);

// Esto es para que la entrada del comando funcione con enter
inputComando.addEventListener('keydown', (e) => {
  if (e.key == 'Enter') {
    procesarComando();
  }
});

async function procesarComando() {
  const comando = inputComando.value.trim().toLowerCase();

  if (comando === '') {
    alert('Ingrese un comando valido!');
  }
  // Verificamos si escribio ping
  if (comando === 'ping') {
    inputComando.value = ''; // Limpia el campo
    imprimirEtiquetaP(
      'Haciendo ping al corazon de Edward con 32 bytes de datos: ',
    );
    // Ciclo para la espera de cada respuesta del ping
    for (let i = 1; i <= 4; i++) {
      await esperar(1000);
      imprimirEtiquetaP(
        `Respuesta desde el 💖 de Edward: bytes=32 tiempo <1ms TTL=64 (paquete ${i}/4)`,
      );
    }
    imprimirEtiquetaP(
      'Paquetes: enviados = 4, perdidos = 0, recibidos = 4, Te amo Edward jejeje ✨🐾.',
    );
  } else if (comando === 'cat readme.txt') {
    inputComando.value = '';
    imprimirEtiquetaP('==================================================');
    imprimirEtiquetaP(
      'Jeje hola 💌, se que parezco desesperado pero la verdad no dejo de pensar en ti y pues es que me lates bastante, entiendo que quieres tu espacio asi como no quieres dañar a nadie pero es para decirte que todo estara bien y espero puedas de terminar de interactuar con la página.',
    );
    imprimirEtiquetaP('==================================================');
  } else if (comando === 'cat iloveyou.txt') {
    inputComando.value = '';
    imprimirEtiquetaP('==================================================');
    imprimirEtiquetaP(
      'Hola Edward 💌, este otro comando que escribiste es para expresar lo que siento por ti, la verdad no he podido dormir bien ya que guardar mis sentimientos no me ayuda mucho y lo que yo deseo es poder tener esa confianza tuya de que podamos contruir algo juntos y superar aquello que te atormenta y no te permite avanzar o te hace sentir mal ya que crees que no mereces ser amado 💕pero la verdad si y es que tener alguien como tu es imposible ya que no puede haber otro Edward como tu💖.',
    );
    imprimirEtiquetaP('==================================================');
  } else if (comando === 'whoami') {
    inputComando.value = '';
    imprimirEtiquetaP('==================================================');
    imprimirEtiquetaP('PERFIL DE USUARIO: Edward Wolfie🐺✨');
    imprimirEtiquetaP('==================================================');
    imprimirEtiquetaP(
      'ROL: Un buen lobo alfa — fuerte, protector y de carácter noble.',
    );
    imprimirEtiquetaP('CUALIDADES DETECTADAS:');
    imprimirEtiquetaP(
      ' - Increíblemente inteligente y apasionado por la informática.',
    );
    imprimirEtiquetaP(
      ' - Lindo, tierno, responsable y con una dedicación admirable.',
    );
    imprimirEtiquetaP(
      ' - Posee una mente brillante y un corazón gigante que vale oro.',
    );
    imprimirEtiquetaP('==================================================');
  }
}

function LimpiarSalida() {
  contenedorSalida.replaceChildren();
}

function imprimirEtiquetaP(texto) {
  // Crea la etiqueta
  const nuevoP = document.createElement('p');
  // Asigna el texto
  nuevoP.textContent = texto;
  // Se agrega al contenedor
  contenedorSalida.appendChild(nuevoP);
}
