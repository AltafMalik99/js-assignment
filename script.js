let count = 0;

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


// second

document.getElementById("chk").onclick = function(){
    let p = document.getElementById("pass");

    if(p.type === "password"){
        p.type = "text";
    }else{
        p.type = "password";
    }
}

// thrid




document.getElementById("btn").onclick = function(){

    let n = parseInt(document.getElementById("num").value);
    let res = "";

    if(n % 2 === 0){
        res += "Even Number<br>";
    }else{
        res += "Odd Number<br>";
    }

    let prime = true;

    if(n < 2) prime = false;

    for(let i=2; i<=Math.sqrt(n); i++){
        if(n % i === 0){
            prime = false;
            break;
        }
    }

    res += prime ? "Prime Number" : "Not Prime Number";

    document.getElementById("result").innerHTML = res;
}
