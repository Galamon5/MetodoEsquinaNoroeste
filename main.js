function generaTabla(){
  var fuentes = parseInt(document.getElementById('fil').value);
  var destinos = parseInt(document.getElementById('col').value);
  var lol = document.getElementById("tabla")
  var body = document.getElementsByTagName("body")[0];
  var d=1;
  var f=1;
  if(lol){
    lol.parentNode.removeChild(lol);
  }
  var div   = document.createElement("div");
  div.setAttribute("id","tabla");
  var tabla   = document.createElement("table");
  var tblBody = document.createElement("tbody");
  for (var i = 0; i <= fuentes+1; i++) {
    var filas = document.createElement("tr");
    for (var j = 0; j <= destinos+1; j++) {
      var columnas = document.createElement("td");
      if(i==0 && j>0 && j<=destinos){
        var textoCelda1= document.createTextNode("Dest".concat(d.toString()));
        d++;
        columnas.appendChild(textoCelda1);
      } else if( j==0 && i > 0 && i<=fuentes){
        var textoCelda2= document.createTextNode("Fuente".concat(f.toString()));
        f++;
        columnas.appendChild(textoCelda2);
      }else if( j>0 && i > 0 && (i!=fuentes+1 || j!=destinos+1)){
        var textoCelda3 = document.createElement("input");
        textoCelda3.setAttribute("id","t".concat(i.toString(),"_",j.toString()));
        textoCelda3.setAttribute("width","5px");
        columnas.appendChild(textoCelda3);
      }
      filas.appendChild(columnas);
    }
    tblBody.appendChild(filas);
  }
  tabla.appendChild(tblBody);
  div.appendChild(tabla);
  body.appendChild(div);
  tabla.setAttribute("border", "2");
    document.getElementById("form1").style.display="none";
  document.getElementById("datos_table").style.display="block";
  document.getElementById("repito").style.display="block";
}

function atras(){
  document.getElementById("form1").style.display="block";
  document.getElementById("datos_table").style.display="none";
  document.getElementById("repito").style.display="none";
  var lol = document.getElementById("tabla")
  if(lol){
    lol.parentNode.removeChild(lol);
  }
}
function resuelve() {
  var tabla=new Array();
  var fuentes = parseInt(document.getElementById('fil').value);
  var destinos = parseInt(document.getElementById('col').value);
  for (var i = 1; i <= fuentes+1; i++) {
    for (var j = 1; j <= destinos+1; j++) {
      col[j]=parseInt(document.getElementById("t".concat(i.toString(),"_",j.toString())).value);
    }
    tabla[i] = col;
  }
  console.log(tabla);
}
