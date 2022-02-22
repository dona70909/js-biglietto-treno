/* User info const */
let kmUser = parseFloat(prompt("Quanti km vuoi fare?"));
let ageUser =parseFloat(prompt("Quanti anni hai?"));
let calcoloPrice;
const kmPrice = 0.21;


/* display User info inside the html */
document.getElementById("my-km").innerHTML = kmUser;
document.getElementById("my-age").innerHTML = ageUser;

/* convalida dei dati : dati creati random se non sono giusti or non calcolo il prezzo direttamente  */
/* !convalida km */
if(isNaN(kmUser)){
    kmUser = Math.floor(Math.random() * 100) + 1; 
    document.getElementById("my-km").innerHTML = ("km inseriti dal pc ") +  kmUser;
} 

/* !convalida age */
if(isNaN(kmUser)){
    ageUser = Math.floor(Math.random() * 10) + 1; 
    document.getE
}

calcoloPrice = (kmUser * kmPrice);
document.getElementById("my-price").innerHTML = calcoloPrice + (" euro");

