var Cocas = 0, Sandwich = 0, Choco = 0, Total = 0;

const Coke = document.getElementsByName('B1');
const Sand = document.getElementsByName('B2');
const Choc = document.getElementsByName('B3');
const Entreg = document.getElementById('Entregado');
const Proc = document.getElementById('Procesado');
const Tot = document.getElementById('Total');

Coke.forEach(function (boton) {
    boton.addEventListener('click', function () {
        Cocas++;
        Total += 1;
        Modificar();
    })
})

Sand.forEach(function (boton) {
    boton.addEventListener('click', function () {
        Sandwich++;
        Total += 0.75;
        Modificar();
    })
})

Choc.forEach(function (boton) {
    boton.addEventListener('click', function () {
        Choco++;
        Total += 0.5;
        Modificar();
    })
})

function Modificar(){
    for (var i = 10; i > 0; i--) {
        setTimeout(Mod, 1000);
    }
    //console.log("Entregados: (" + Cocas + ") Cocas, (" + Sandwich + ") Sandwich, (" + Choco + ") Chocolates");
    Entreg.innerHTML = "Entregados: (" + Cocas + ") Cocas, (" + Sandwich + ") Sandwich, (" + Choco + ") Chocolates";
    Tot.innerHTML = "Total: $" + Total;
}

function Mod() {
    Proc.innerHTML = "Procesando ( " + i + " )";
    //console.log("Entregados: (" + Cocas + ") Cocas, (" + Sandwich + ") Sandwich, (" + Choco + ") Chocolates");
    setTimeout(1000);
}

