let frutas = [];
let numeros = [];
function agregarFruta() {
  let fruta = document.getElementById("frutaInput").value;
  if (fruta === "") {
    alert("Escribe una fruta");
    return;
  }
  frutas.push(fruta);
  document.getElementById("frutaInput").value = "";
  document.getElementById("frutasSalida").innerHTML =
    "Frutas: " + frutas.join(", ");
}


function agregarNumero() {
  let numero = document.getElementById("numeroInput").value;
  if (numero === "") {
    alert("Escribe un número");
    return;
  }
  numeros.push(Number(numero));
  document.getElementById("numeroInput").value = "";
  document.getElementById("numerosSalida").innerHTML =
    "Números: " + numeros.join(", ");
}