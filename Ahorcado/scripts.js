var imgName = document.getElementById("avanzar");
var limit = 8;
var wrongPicks = 0;
var questions = ["papaya", "mango", "guayaba", "uva", "limon", "naranja", "tamarindo", "toronja", "mora", "fresa"];
var question = "";
var strSize = 0;
var blankCounter = 0;

function reloadQText(letter) 
{
    if (letter == "") 
    {
        generateQuestion();
        blankCounter = question.length;
        document.getElementById("changeImage").setAttribute("src", "res/1.png");
    }
    else 
    {
        var p = document.getElementById("qString");
        var pText = p.innerText;
        var text = "";
        var searchPattern = new RegExp(letter, 'g');
        if (question.match(searchPattern)) 
        {            
            for (var i = 0; i < strSize; i++) 
            {
                if (question[i] == letter[0] && pText[i + i] == "_") 
                {
                    text += letter + " ";
                    blankCounter--;
                }
                else 
                {
                    if(pText[i + i] != "_ ")
                    {
                        text += pText[i + i] + " ";
                    }
                    else
                    {
                        text += "_ ";
                    }
                }
            }
            p.innerText = text;
            if(blankCounter == 0)
            {
                alert("Ganaste!!!!!");
            }
        }
        else 
        {
            nextImage();
            wrongPicks++;
            var p = document.getElementById("wrongPicks");
            p.innerText = "Wrong picks: " + wrongPicks;
        }
    }
    
}

function generateQuestion()
{
    var questionIndex = Math.floor(Math.random() * 9 ) + 1;
    question = questions[questionIndex];
    var text = "";
    strSize = question.length;
    for (var i = 0; i < strSize; i++) 
    {
        text += "_ ";
    }
    var p = document.getElementById("qString");
    p.innerText = text;
}

function getBlankSpaces()
{
    var p = document.getElementById("qString");
    var pText = p.innerText;
    for (var i = 0; i < pText.length; i++) 
    {
        if(pText[i] == "_")
        {
            blankCounter++;
        }
    }
}

function nextImage() 
{
    var image = document.getElementById("changeImage").getAttribute("src");
    var pattern = [0 - 9];
    number = image.match(/\d+/)[0];
    if (number < limit) 
    {
        number++;
        document.getElementById("changeImage").setAttribute("src", "res/" + number + ".png");
    }
    else 
    {
        alert("YOU DIED!!!! :(");
    }
}