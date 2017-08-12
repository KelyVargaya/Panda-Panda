//Las fotos de nuestra portada
var pictures = ["img/panda1.jpg",
                "img/panda2.jpg",
                "img/panda3.jpg",
                "img/panda4.jpg"];

var PicturesPanda = document.getElementById("fotos");

    for (var i = 0; i < pictures.length; i++) {
    var imag = document.createElement("div");
    imag.setAttribute("class","img");

    var panda = document.createElement("img");
    panda.src = pictures[i];

    //Creando el Boton Cerrar Imagen
    var x= document.createElement("button");
    x.setAttribute("class","x");
    var texto = document.createTextNode("X");
	  x.appendChild(texto);

    imag.appendChild(x);
    imag.appendChild(panda);
    fotos.appendChild(imag);
    }

// Ocultar Imagenes
var imgTotales = document.getElementsByClassName('img');
var eliminarElem = document.getElementsByClassName('x');

  for (var i = 0; i < eliminarElem.length; i++) {
    imgTotales[i].addEventListener("click",ocultarImagen);
    }
   
    function ocultarImagen() {
      this.style.display = "none";
    }


// Restaurar Imagenes
var botonRestaurar = document.getElementById('restaurando');
    botonRestaurar.addEventListener("click",restaurar);

  function restaurar(){
    for(var i=0; i < eliminarElem.length;i++){
      imgTotales[i].style.display="inline-block";
    }
}



// Origen ... ocultar texto izquierdo
var botonOrigen = document.getElementById("origen");
botonOrigen.onclick =function origen(){
  var textoIzquierda = document.getElementById("parrafo01");
  if (textoIzquierda.style.display == "none") {
    textoIzquierda.style.display = "inline-block"
  } 
  else {
      textoIzquierda.style.display = "none"
  }
}

// Extincion ... ocultar texto derecho
var botonExtincion = document.getElementById("extincion");
botonExtincion.onclick = function extincion(){
  var textoDerecha = document.getElementById("parrafo02");
  if (textoDerecha.style.display == "none") {
    textoDerecha.style.display = "inline-block"
  } else {
      textoDerecha.style.display = "none"
  }
}

