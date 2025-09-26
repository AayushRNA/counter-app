let click = document.getElementById("click")

function clickSound(){
click.play();
}


let x = 0;


function stayconsistent(){
    document.getElementById("display").innerText = x;
}

function increase(){
    document.getElementById("display").innerText = x++;
    stayconsistent();
    clickSound();
}
function decrease(){
    document.getElementById("display").innerText = x--;
    stayconsistent();
    clickSound();
}
function reset(){
    x = 0
    stayconsistent();
    clickSound();
}

