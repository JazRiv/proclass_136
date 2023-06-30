estatus = false;
objeto = "";

function setup(){
    canvas = createCanvas(300, 300);
    background("red")
    camara = createCapture(VIDEO);
    modelo = ml5.objectDetector("cocossd", listo);
    camara.hide();
}


function draw(){
    image(camara, 0, 0, 300, 300);
}

function listo(){
    console.log("Yaaaa");
    estatus = true;
}


function buscar(){
    objeto = document.getElementById("texto").value;
    console.log(objeto);
    
}
