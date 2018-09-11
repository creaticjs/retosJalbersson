function getRequestGit() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            datos = this.responseText
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "https://api.github.com/users/carlosmolano", true);
    xhttp.send();
}