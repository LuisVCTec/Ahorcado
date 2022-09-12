const pantallaPrin = document.getElementById("principal");
const pantallaP = document.getElementById("palabra");
const pantallaJ = document.getElementById("juego");
var arrPalabras = ["JAVA", "CSS", "HARDWARE", "SOFTWARE", "LAPTOP", "MOUSE"];
const aggP = document.getElementById("AddPalabra");
const p = document.getElementById("alerta");
const generarBox = document.getElementById("canva");

//CONDICIONES DE ALERTA

//FUNCIÓN PARA CAMBIAR DE PANTALLA
function cambiarPantalla(pantalla) {
  switch (pantalla) {
    case "principal":
      pantallaPrin.style.display = "flex";
      pantallaP.style.display = "none";
      pantallaJ.style.display = "none";
      break;
    case "palabra":
      pantallaPrin.style.display = "none";
      pantallaP.style.display = "flex";
      pantallaJ.style.display = "none";
      break;
    case "juego":
      pantallaPrin.style.display = "none";
      pantallaP.style.display = "none";
      pantallaJ.style.display = "flex";
      generarCuadros();
      break;
    default:
      pantallaPrin.style.display = "flex";
      pantallaP.style.display = "none";
      pantallaJ.style.display = "none";
  }
}

//FUNCIÓN PARA AGREGAR UNA PALABRA EN EL ARRAY
function agregarPalabra() {
  const value = aggP.value; //SACAR CADENA DEL TEXTAREA
  const upperCase = value.toUpperCase();
  let parametros = /[0-9]/;
  let result = value.match(parametros);

  //RESTRICCIONES AL INGREGAR UN DATO
  if (upperCase == "") {
    p.innerHTML =
      "<img class='inlineBlock' src='/img/senal.svg'> Escribe una palabra";
    p.style.color = "red";
    //CAMBIO DE TEXTO
    setTimeout(() => {
      p.innerHTML =
        "<img class='inlineBlock' src='/img/senal.svg'> Maximo de 8 letras y minimo 3 letras";
      p.style.color = "#999999";
    }, 4000);
  } else if (upperCase.length > 8) {
    p.innerHTML =
      "<img class='inlineBlock' src='/img/senal.svg'> No puede ser mayor a 8 letras";
    p.style.color = "red";
    setTimeout(() => {
      p.innerHTML =
        "<img class='inlineBlock' src='/img/senal.svg'> Maximo de 8 letras y minimo 3 letras";
      p.style.color = "#999999";
    }, 4000);
  } else if (upperCase.length <= 2) {
    p.innerHTML =
      "<img class='inlineBlock' src='/img/senal.svg'> No puede ser menor a 2 letras";
    p.style.color = "red";
    setTimeout(() => {
      p.innerHTML =
        "<img class='inlineBlock' src='/img/senal.svg'> Maximo de 8 letras y minimo 3 letras";
      p.style.color = "#999999";
    }, 4000);
  } else if (result) {
    p.innerHTML =
      "<img class='inlineBlock' src='/img/senal.svg'> No puede agregar numeros";
    p.style.color = "red";
    setTimeout(() => {
      p.innerHTML =
        "<img class='inlineBlock' src='/img/senal.svg'> Maximo de 8 letras y minimo 3 letras";
      p.style.color = "#999999";
    }, 4000);
  } else {
    p.innerHTML =
      "<img class='inlineBlock' src='/img/senal.svg'> Se agrego correctamente";
    p.style.color = "#3D597D";
    arrPalabras.unshift(upperCase);
    setTimeout(() => {
      p.innerHTML =
        "<img class='inlineBlock' src='/img/senal.svg'> Maximo de 8 letras y minimo 3 letras";
      p.style.color = "#999999";
    }, 4000);
  }
}

function generarCuadros() {
  const arrP = Math.floor(Math.random() * arrPalabras.length);
  const selectArr = arrPalabras[arrP];
  const palabraNum = selectArr.length;

  let cadena = "<p id='cuadros'></p>"; //VARIABLE "cadena" PARA PODER REPETIRLA
  const cadenaRepetida = cadena.repeat(palabraNum); //REPEDIR NUMERO DE VECES LA VARIABLE "cadena"
  generarBox.innerHTML = cadenaRepetida; //SALIDA DE LA VARIABLE "cadenaRepetida"
}
