var tabla =  new Array();
function generaTabla(){
  var fuentes = parseInt(document.getElementById('fil').value);
  var destinos = parseInt(document.getElementById('col').value);
  var div   = document.createElement("div");
  var div = document.getElementsByTagName("body")[0];
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
  for (var i = 0; i < fuentes; i++) {
    var hilera = document.createElement("tr");
    for (var j = 0; j < destinos; j++) {
      var celda = document.createElement("td");
      var textoCelda = document.createTextNode("celda en la hilera "+i+", columna "+j);
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }
    tblBody.appendChild(hilera);
  }
  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  tabla.setAttribute("border", "2");
}
