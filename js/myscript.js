/* User info const */
let kmUser = parseFloat(prompt("Quanti km vuoi fare?"));
let ageUser =parseFloat(prompt("Quanti anni hai?"));
let calcoloPrice = 0;
const kmPrice = 0.21;
const adultAge = 18;
const discountUnder = 0.2;
const elderlyAge = 65;


/* display User info inside the html */
document.getElementById("my-km").innerHTML = kmUser + (" km");
document.getElementById("my-age").innerHTML = ageUser + (" anni");

/* convalida dei dati : dati creati random se non sono giusti or non calcolo il prezzo direttamente  */
/* !convalida km */
if(isNaN(kmUser)){
    kmUser = Math.floor(Math.random() * 100) + 1; 
    document.getElementById("my-km").innerHTML = ("km inseriti dal pc ") +  kmUser + (" km");
} 

/* !convalida age */
if(isNaN(ageUser)){
    ageUser = Math.floor(Math.random() * 10) + 1; 
    document.getElementById("my-age").innerHTML = ageUser +(" anni");
}



if (ageUser <= adultAge){
    calcoloPrice = ((kmUser * kmPrice) - (((kmUser * kmPrice) * (20)) / 100)).toFixed(2);
    document.getElementById("my-price").innerHTML = ("UNDER 18 PRICE ") + calcoloPrice + (" euro");
} else if(ageUser > elderlyAge){
    calcoloPrice = ((kmUser * kmPrice) - (((kmUser * kmPrice) * (40)) / 100)).toFixed(2);
    document.getElementById("my-price").innerHTML = ("OVER 65 PRICE ") + calcoloPrice + (" euro");
} else{
    calcoloPrice = (kmUser * kmPrice);
    document.getElementById("my-price").innerHTML = calcoloPrice + (" euro");
}