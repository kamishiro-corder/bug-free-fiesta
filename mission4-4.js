function omikujihiku(){
    var array =["super lucky","博多華丸・大吉","だいきち★","DAIKITI","だいだいだいだい大吉","だいきちっきち"];
    var n = Math.floor(Math.random()*6);
    var message = array[n];
    var object = document.getElementById("omikuji");
    object.innerText = message;
    message.style.fontSize = "100px";
}
