// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Funcion para escribir el nombre de un participante
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    validarEntrada(nombre);
    let lista = document.getElementById("listaAmigos");
    let elemento = document.createElement("li");
    elemento.textContent = nombre;
    lista.appendChild(elemento);
    console.log(nombre);
    document.getElementById("amigo").value = "";
}

function validarEntrada(nombre){
    if(nombre === ""){
        alert("Debe ingresar un nombre");
        return;
    }
}

function sortearAmigo(){
    let lista = document.getElementById("listaAmigos");
    let amigo = lista.children[Math.floor(Math.random() * lista.children.length)];
    let nombreAmigo = amigo.textContent;
    document.getElementById("resultado").textContent = nombreAmigo;
    console.log(nombreAmigo);
}