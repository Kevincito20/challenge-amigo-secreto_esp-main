// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Funcion para escribir el nombre de un participante
function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if(!validarEntrada(nombre)){
        return;
    }
    let lista = document.getElementById("listaAmigos");
    let elemento = document.createElement("li");
    elemento.textContent = nombre;
    lista.appendChild(elemento);
    document.getElementById("amigo").value = "";
}

//validacion de entrada vacía y solo letras
function validarEntrada(nombre){
    let letrasPermitidas = /^[a-zA-Z]+$/;

    if(nombre === ""){
        alert("Debe ingresar un nombre");
        return false;
    }

    if(!nombre.match(letrasPermitidas)){
        alert("El nombre debe contener solo letras");
        return false;    
    }

    return true;
}

//Funcion para sortear un amigo de la lista
function sortearAmigo(){
    let lista = document.getElementById("listaAmigos");
    let amigo = lista.children[Math.floor(Math.random() * lista.children.length)];
    let nombreAmigo = amigo.textContent;
    document.getElementById("resultado").textContent = "Tu amigo secreto es: " + nombreAmigo;
}
