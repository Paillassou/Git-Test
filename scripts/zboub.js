"use strict";
window.onload = function () {
    var patate = document.getElementById("patate");
    var pCreated = document.createElement("p");
    pCreated.classList.add("instruction");
    pCreated.innerHTML = "CLIQUE SUR LE TITRE, il y a une surprise et inspecte le code"
    patate.appendChild(pCreated);
    var patateme = function () {
        for (let i = 0; i < 20; i++) {
            var divCreated = document.createElement("div");
            divCreated.classList.add("fromage");
            divCreated.innerHTML = "Regarde, je suis une div avec la classe 'fromage' et je te spam";
            patate.appendChild(divCreated);
            console.log("ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ZBOUB ");
            
        }
    }
    patate.addEventListener("click", patateme);
}
