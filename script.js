let x = 0;


function updateDisplay(){
    document.getElementById("display").innerText = x;
}

function increase(){
    document.getElementById("display").innerText = x++;
    updateDisplay();
}
function decrease(){
    document.getElementById("display").innerText = x--;
    updateDisplay();
}
function reset(){
    x = 0
    updateDisplay();
}

