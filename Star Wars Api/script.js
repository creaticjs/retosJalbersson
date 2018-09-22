var myIndex = 0;
console.log(window.location.pathname);

if(window.location.pathname == "/index.html");
{
    carousel();    
}


var personajes;
var personaje;
var planetas;
var peliculas;
var naves;

var labelObtenido = document.getElementById("txtObtenido");
var labelNombre = document.getElementById("lblNombre");
var contenedorTarjetas = document.getElementById("main");

function getPersonajes() 
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var personajesR = JSON.parse(this.responseText);
            personajes = personajesR.results;
            generarTarjetasPersonajes(personajes.length);
        }
    };
    xhttp.open("GET", "https://swapi.co/api/people/", true);
    xhttp.send();
}

function getDetallesPersonaje() 
{
    var detallePromise = new Promise(function(resolve, reject)
    {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() 
        {
            if (this.readyState == 4 && this.status == 200) 
            {
                resolve(JSON.parse(this.responseText));
            }
        };
        xhttp.onerror= function(){
            reject(Error("hubo un error"));
        }
        xhttp.open("GET", "https://swapi.co/api/people/1", true);
        xhttp.send();
    });
    detallePromise.then(function(data)
    {
        alert(data.name);
    });
    detallePromise.catch(function()
    {
        alert("No se pudoooo!!!!!");
    });
}

function getPlanetas() 
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var planetasR = JSON.parse(this.responseText);
            planetas = planetasR.results;
            generarTarjetasPlanetas(planetas.length);
        }
    };
    xhttp.open("GET", "https://swapi.co/api/planets/", true);
    xhttp.send();
}

function getPeliculas() 
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var peliculasR = JSON.parse(this.responseText);
            peliculas = peliculasR.results;
            generarTarjetasPeliculas(peliculas.length);
        }
    };
    xhttp.open("GET", "https://swapi.co/api/films/", true);
    xhttp.send();
}

function getNaves() 
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            var navesR = JSON.parse(this.responseText);
            naves = navesR.results;
            generarTarjetasNaves(naves.length);
        }
    };
    xhttp.open("GET", "https://swapi.co/api/starships/", true);
    xhttp.send();
}

function getPersonajes2()
{
    $.ajax({ 
        type: "GET",
        url: "https://swapi.co/api/people/",
        success: function(data)
        {
            $("#aviso").innerText = "cambioooooo";
            alert(data);
        }
    });
}

function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}
function getPersonajes3(){
var request = createCORSRequest("get", "https://swapi.co/api/people/");
if (request){
    request.onload = function() {
        $("#aviso").innerText = "cambioooooo";
        alert("something");
    };
    
    request.send();
}
}

function getPersonajes4()
{
    var jsonResponse = $.getJSON('http://anyorigin.com/go?url=https%3A//swapi.co/api/people/&callback=?', function(data){
        alert(data.contents);
    });
        
}
function generarTarjetasPersonajes(size)
{    
    $("#carrusel").hide();
    limpiarDiv();
    for(var i=0; i<size; i++)
    {
        var imgPersonaje = document.createElement("IMG");
        imgPersonaje.src = "res/personaje" + i + ".jpg";
        imgPersonaje.style = "height: 300px; width: 300px";
        var lblNombreP = document.createElement("H4");
        lblNombreP.style = "color: white";
        lblNombreP.innerHTML = "<b>" + personajes[i].name + "</b>";
        var lblHeigthP = document.createElement("P"); 
        lblHeigthP.style = "color: white";
        lblHeigthP.innerHTML = personajes[i].height + "<br/>";
        
        if(i%4 == 0)
        {
            var divFila = document.createElement("DIV");
            divFila.style = "background: #333333; margin: 5px";
            var divPersonaje = document.createElement("DIV");
            var btnPersonaje = document.createElement("BUTTON");
            btnPersonaje.innerText = "Detalles"
            btnPersonaje.onclick = getDetallesPersonaje;
            divPersonaje.style = "margin: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; padding: 5px; text-align: center"
            divPersonaje.appendChild(imgPersonaje);
            divPersonaje.appendChild(lblNombreP);
            divPersonaje.appendChild(lblHeigthP);
            divPersonaje.appendChild(btnPersonaje);
            divFila.appendChild(divPersonaje);
            contenedorTarjetas.appendChild(divFila);   
        }
        else
        {
            var divPersonaje = document.createElement("DIV");
            var btnPersonaje = document.createElement("BUTTON");
            btnPersonaje.innerText = "Detalles"
            btnPersonaje.onclick = getDetallesPersonaje;
            divPersonaje.style = "margin: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; padding: 5px; text-align: center"
            divPersonaje.appendChild(imgPersonaje);
            divPersonaje.appendChild(lblNombreP);
            divPersonaje.appendChild(lblHeigthP);
            divPersonaje.appendChild(btnPersonaje);
            divFila.appendChild(divPersonaje);
        }
    }
}

function generarTarjetasPlanetas(size)
{    
    $("#carrusel").hide();
    limpiarDiv();
    for(var i=0; i<size; i++)
    {
        var imgPlaneta = document.createElement("IMG");
        imgPlaneta.src = "res/planeta" + i + ".jpg";
        imgPlaneta.style = "height: 300px; width: 300px";
        var lblNombreP = document.createElement("H4");
        lblNombreP.style = "color: white";
        lblNombreP.innerHTML = "<b>" + planetas[i].climate + "</b>";
        var lblHeigthP = document.createElement("P"); 
        lblHeigthP.style = "color: white";
        lblHeigthP.innerHTML = planetas[i].diameter + "<br/>";
        
        if(i%4 == 0)
        {
            
            var divFila = document.createElement("DIV");
            divFila.style = "background: #333333; margin: 5px";
            var divPersonaje = document.createElement("DIV");
            divPersonaje.style = "margin: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; padding: 5px; text-align: center"
            divPersonaje.appendChild(imgPlaneta);
            divPersonaje.appendChild(lblNombreP);
            divPersonaje.appendChild(lblHeigthP);
            divFila.appendChild(divPersonaje);
            contenedorTarjetas.appendChild(divFila);   
        }
        else
        {
            var divPersonaje = document.createElement("DIV");
            divPersonaje.style = "margin: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; padding: 5px; text-align: center"
            divPersonaje.appendChild(imgPlaneta);
            divPersonaje.appendChild(lblNombreP);
            divPersonaje.appendChild(lblHeigthP);
            divFila.appendChild(divPersonaje);
        }
    }
}

function generarTarjetasPeliculas(size)
{    
    $("#carrusel").hide();
    limpiarDiv();
    for(var i=0; i<size; i++)
    {
        var imgPersonaje = document.createElement("IMG");
        imgPersonaje.src = "res/pelicula" + i + ".jpg";
        imgPersonaje.style = "height: 300px; width: 300px";
        var lblNombreP = document.createElement("H4");
        lblNombreP.style = "color: white";
        lblNombreP.innerHTML = "<b>" + peliculas[i].title + "</b>";
        var lblHeigthP = document.createElement("P"); 
        lblHeigthP.style = "color: white";
        lblHeigthP.innerHTML = peliculas[i].release_date + "<br/>";
        
        if(i%4 == 0)
        {
            var divFila = document.createElement("DIV");
            divFila.style = "background: #333333; margin: 5px";
            var divPersonaje = document.createElement("DIV");
            divPersonaje.style = "margin: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; padding: 5px; text-align: center"
            divPersonaje.appendChild(imgPersonaje);
            divPersonaje.appendChild(lblNombreP);
            divPersonaje.appendChild(lblHeigthP);
            divFila.appendChild(divPersonaje);
            contenedorTarjetas.appendChild(divFila);   
        }
        else
        {
            var divPersonaje = document.createElement("DIV");
            divPersonaje.style = "margin: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; padding: 5px; text-align: center"
            divPersonaje.appendChild(imgPersonaje);
            divPersonaje.appendChild(lblNombreP);
            divPersonaje.appendChild(lblHeigthP);
            divFila.appendChild(divPersonaje);
        }
    }
}

function generarTarjetasNaves(size)
{    
    $("#carrusel").hide();
    limpiarDiv();
    for(var i=0; i<size; i++)
    {
        var imgPersonaje = document.createElement("IMG");
        imgPersonaje.src = "res/nave" + i + ".jpg";
        imgPersonaje.style = "height: 300px; width: 300px";
        var lblNombreP = document.createElement("H4");
        lblNombreP.style = "color: white";
        lblNombreP.innerHTML = "<b>" + naves[i].name + "</b>";
        var lblHeigthP = document.createElement("P"); 
        lblHeigthP.style = "color: white";
        lblHeigthP.innerHTML = naves[i].passengers + "<br/>";
        
        if(i%4 == 0)
        {
            var divFila = document.createElement("DIV");
            divFila.style = "background: #333333; margin: 5px";
            var divPersonaje = document.createElement("DIV");
            divPersonaje.style = "margin: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; padding: 5px; text-align: center"
            divPersonaje.appendChild(imgPersonaje);
            divPersonaje.appendChild(lblNombreP);
            divPersonaje.appendChild(lblHeigthP);
            divFila.appendChild(divPersonaje);
            contenedorTarjetas.appendChild(divFila);   
        }
        else
        {
            var divPersonaje = document.createElement("DIV");
            divPersonaje.style = "margin: 15px; box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); transition: 0.3s; padding: 5px; text-align: center"
            divPersonaje.appendChild(imgPersonaje);
            divPersonaje.appendChild(lblNombreP);
            divPersonaje.appendChild(lblHeigthP);
            divFila.appendChild(divPersonaje);
        }
    }
}

function limpiarDiv()
{
    while (contenedorTarjetas.firstChild) 
    {
        contenedorTarjetas.removeChild(contenedorTarjetas.firstChild);
    }
}

function cors() {
    // Allow from any origin
    if (isset($_SERVER['https://swapi.co/api/'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['https://swapi.co/api/']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        exit(0);
    }
}

function carousel() 
{
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) 
    {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 2 seconds
}
