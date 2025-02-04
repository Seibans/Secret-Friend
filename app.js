// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function validarEntrada(event) {
    const charCode = event.keyCode || event.which;
    const charStr = String.fromCharCode(charCode);
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]$/;
    return regex.test(charStr);
}

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("No hay ningún nombre.");
        return;
    }

    const nombreFormateado = nombreAmigo
        .toLowerCase()
        .split(' ')
        .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(' ');

    amigos.push(nombreFormateado);
    inputAmigo.value = "";
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = "X";
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });

    const botonReiniciar = document.querySelector('.button-reiniciar');
    botonReiniciar.disabled = amigos.length === 0;
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

function reiniciarLista() {
    amigos = [];
    actualizarListaAmigos();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay ningún nombre en la lista.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const dialog = document.getElementById('dialog-sorteo');
    const dialogMensaje = document.getElementById('dialog-mensaje');
    dialogMensaje.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;
    dialog.showModal();
}

function cerrarDialog() {
    const dialog = document.getElementById('dialog-sorteo');
    dialog.close();
}