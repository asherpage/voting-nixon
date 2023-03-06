function fileLoad(){
    console.log("loaded");
}
let square = document.getElementById("nixon");
        square.addEventListener("mouseover", green);


let second = document.getElementById("mcgovern");
    second.addEventListener("mouseover", red);
    second.addEventListener("mouseout", white);
    second.addEventListener("click", yellow);
    second.addEventListener("contextmenu", purple);

let body = document.getElementById("body");
    body.addEventListener("mousemove", pink);

    function pink(){
    this.style.backgroundColor = "pink";
}

function green(){
    this.style.backgroundColor = "lime";
}
function purple(){
    this.style.backgroundColor = "purple";
    document.getElementById("mcgovern").innerHTML = "that dont work either"
}
function yellow(){
    this.style.backgroundColor = "yellow";
    document.getElementById("mcgovern").innerHTML = "Error try other options:/"
}
function white(){
    this.style.backgroundColor = "white";
}
function red(){
    this.style.backgroundColor = "red";
    console.log("test")
}
function fileClick(){
    console.log("Bro is trying to vote McGovern lol")
}
function outp(){
    document.getElementById("output").innerHTML = "Good Job!! u voted";
}