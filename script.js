var count = 0;

document.getElementById("inc").onclick = function(){
    count++;
    document.getElementById("num").innerText = count;
}

document.getElementById("dec").onclick = function(){
    count--;
    document.getElementById("num").innerText = count;
}

document.getElementById("reset").onclick = function(){
    count = 0;
    document.getElementById("num").innerText = count;
}

// second.....

var pass = document.getElementById("pass");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(pass.type === "password"){
        pass.type = "text";
        icon.textContent = "👁️"; 
    }else{
        pass.type = "password";
        icon.textContent = "👁️"; 
    }
}


