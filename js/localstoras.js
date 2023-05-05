const n = document.querySelector("#datoNombre")
const a = document.querySelector("#datoApellido")
const f = document.querySelector("#datoFecha")
const d = document.querySelector("#datoDireccion")

function almacenarData() {
    let nom, ape, fec, dir
nom = document.getElementById("nombre").value /* se escribe en el html */
ape = document.getElementById("apellido").value
fec = document.getElementById("fecha").value
dir = document.getElementById("direccion").value

//Almacenamiento local con localStorsge
localStorage.setItem("Nombre", nom); /* Se guarda o almacena la informacion que registre */
localStorage.setItem("Apellido", ape);
localStorage.setItem("Fecha", fec);
localStorage.setItem("Direccion", dir);

//limpiando los campos o inputs
document.getElementById("nombre").value = "";
document.getElementById("apellido").value = "";
document.getElementById("fecha").value = "";
document.getElementById("direccion").value = "";
}

function cargarData() {
    let nombre, apellido, fecha, direccion
nombre = localStorage.getItem("Nombre");
apellido = localStorage.getItem("Apellido");
fecha = localStorage.getItem("Fecha");
direccion = localStorage.getItem("Direccion");

//mostrar datos almacenados
n.innerHTML= nombre;
a.innerHTML= apellido;
f.innerHTML= fecha;
d.innerHTML= direccion; 
}