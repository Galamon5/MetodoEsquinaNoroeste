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
  var formu   = document.createElement("form");
  formu.setAttribute("id","tabla");
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
  var boton = document.createElement("input");
  boton.setAttribute("id","datos_table");
  boton.setAttribute("value","Resolver");
  boton.setAttribute("type","button");
  boton.setAttribute("onclick","resuelve()");
  tabla.appendChild(tblBody);
  formu.appendChild(tabla);
  formu.appendChild(boton);
  body.appendChild(formu);
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
  var lol1 = document.getElementById("tablas")
  if(lol1){
    lol1.parentNode.removeChild(lol1);
  }
}

function resuelve() {
  var tabla=new Array();
  var fuentes = parseInt(document.getElementById('fil').value);
  var destinos = parseInt(document.getElementById('col').value);
  for (var i = 1; i <= fuentes+1; i++) {
    var col=new Array();
    for (var j = 1; j <= destinos+1; j++) {
      if(i<=fuentes || j <= destinos){
        col[j-1]=parseInt(document.getElementById("t".concat(i.toString(),"_",j.toString())).value);
      }
    }
    tabla[i-1] = col;
  }
  var resultado=algoritmoEsquina(tabla);
  alert("El resultado es: "+ resultado);
}
function algoritmoEsquina(tabla) {
  var res = new Array();
  var res1 = new Array();
  var res2 = new Array();
  var resultado = 0;
  var es = 0;
  var dem = 0;
  var offer = 0;
  var i = 0;
  var j = 0;
  var lol = document.getElementById("tabla1")
  var body = document.getElementsByTagName("body")[0];

  while(tabla.length>1){
    es=tabla[i][i];
    dem=tabla[i][tabla[i].length-1];
    offer=tabla[tabla.length-1][i];
    if(dem>offer){
      res1[j]=es;
      res2[j]=offer;
      res[j]=es*offer;
      tabla[i][tabla[i].length-1]-=offer;
      for (var z = 0; z < tabla.length; z++) {
        tabla[z].splice(0,1);
      }
      console.log(tabla);
    } else if (dem < offer){
      res1[j]=es;
      res2[j]=dem;
      res[j]=es*dem;
      tabla[tabla.length-1][i]-=dem;
      tabla.splice(0,1);
      console.log(tabla);
    } else{
      res[j]=es*dem;
      res1[j]=es;
      res2[j]=dem;
      tabla.splice(0,1);
      for (var z = 0; z < tabla.length; z++) {
        tabla[z].splice(0,1);
      }
      console.log(tabla);
    }
    j++;
  }
  console.log(res);
  for (var k = 0; k < res.length; k++) {
    resultado+=res[k];
  }
  var lol = document.getElementById("tablas")
  if(lol){
    lol.parentNode.removeChild(lol);
  }
  var final=new Array();
  final[0]=res1;
  final[1]=res2;
  final[2]=res;
  //-----------------------------------------------------------------
  var body = document.getElementsByTagName("body")[0];

 // Crea un elemento <table> y un elemento <tbody>
 var tabla   = document.createElement("table");
 var tblBody = document.createElement("tbody");
tabla.setAttribute("id","tablas");

 // Crea las celdas
 for (var i = 0; i < res1.length; i++) {
   // Crea las hileras de la tabla
   var hilera = document.createElement("tr");

   for (var j = 0; j < 3; j++) {
     // Crea un elemento <td> y un nodo de texto, haz que el nodo de
     // texto sea el contenido de <td>, ubica el elemento <td> al final
     // de la hilera de la tabla
     var celda = document.createElement("td");
     var textoCelda = document.createTextNode(final[j][i]);
     celda.appendChild(textoCelda);
     hilera.appendChild(celda);
   }

   // agrega la hilera al final de la tabla (al final del elemento tblbody)
   tblBody.appendChild(hilera);
 }
 var hilera = document.createElement("tr");
 var celda = document.createElement("td");
 var textoCelda = document.createTextNode('');
 celda.appendChild(textoCelda);
 hilera.appendChild(celda);
 tblBody.appendChild(hilera);
 tabla.appendChild(tblBody);
 var celda = document.createElement("td");
 var textoCelda = document.createTextNode('');
 celda.appendChild(textoCelda);
 hilera.appendChild(celda);
 tblBody.appendChild(hilera);
 tabla.appendChild(tblBody);
 var celda = document.createElement("td");
 var textoCelda = document.createTextNode(resultado);
 celda.appendChild(textoCelda);
 hilera.appendChild(celda);
 tblBody.appendChild(hilera);
 tabla.appendChild(tblBody);
 // appends <table> into <body>
 body.appendChild(tabla);
 // modifica el atributo "border" de la tabla y lo fija a "2";
 tabla.setAttribute("border", "2");
  //------------------------------------------------------------------
  return resultado;
}
