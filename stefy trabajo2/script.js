// Función 2: Mensaje mediante un recuadro de alerta
function enviar() {
    var nombre = document.getElementById("nombre").value;
    alert("Hola " + nombre + " :)");
  }
  
  // Función 3: Modificar el texto de una etiqueta
  function cambiarContenido() {
    var elemento = document.getElementById("miBoton");
    elemento.innerHTML = "¡Producto agregado!";
  }
  
  // Función 4: Modificar el estilo de una etiqueta
  function cambiarEstilo() {
    var elemento = document.getElementById("mi-elemento");
    elemento.style.color = "red";
  }
  
  // Función 5: Caja de comentarios
  function agregarComentario() {
    var comentarioInput = document.getElementById("comentario").value;
    if (comentarioInput === "") {
      return;
    }
    var contenedorComentarios = document.getElementById("contenedor-comentarios");
    var nuevoComentario = document.createElement("div");
    nuevoComentario.innerHTML = comentarioInput;
    nuevoComentario.classList.add("comentario");
    contenedorComentarios.appendChild(nuevoComentario);
    document.getElementById("comentario").value = "";
  }
  