var count = 0;
var max = 33;

function add(){
    if(count < max){
        count++;
        document.getElementById("display").innerText = count;

        if(count === max){
            alert("Tasbih Completed");
        }
    }
}

function minus(){
    if(count > 0){
        count--;
        document.getElementById("display").innerText = count;
    }
}

function clearCount(){
    count = 0;
    document.getElementById("display").innerText = count;
}


// Password toggle
function togglePass(){
    var p = document.getElementById("password");

    if(p.type === "password"){
        p.type = "text";
    }else{
        p.type = "password";
    }
}


// Even Odd + Prime
function checkNum(){
    var n = document.getElementById("numberInput").value;
    var eo = document.getElementById("eoResult");
    var prime = document.getElementById("primeResult");

    if(n === ""){
        eo.innerText = " Enter a number";
        eo.className = "red";
        prime.innerText = "";
        return;
    }

    if(n % 2 == 0){
        eo.innerText = n + " is Even";
        eo.className = "green";
    }else{
        eo.innerText = n + " is Odd";
        eo.className = "red";
    }

    var isPrime = true;

    if(n <= 1){
        isPrime = false;
    }else{
        for(var i=2;i<=Math.sqrt(n);i++){
            if(n % i === 0){
                isPrime = false;
                break;
            }
        }
    }

    prime.innerText = isPrime ? "Prime Number" : "Not Prime";
    prime.className = isPrime ? "green" : "red";
}
