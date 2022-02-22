/* User info const */
let kmUser = parseFloat(prompt("Quanti km vuoi fare?"));
const ageUser =parseFloat(prompt("Quanti anni hai?"));

/* display User info inside the html */
document.getElementById("my-km").innerHTML = kmUser;
document.getElementById("my-age").innerHTML = ageUser;

/* convalida dei dati */
/* !convalida km */
if(isNaN(kmUser)){
   kmUser = Math.floor(Math.random() * 100) + 1; 
    document.getElementById("my-km").innerHTML = ("km inseriti dal pc ") +  kmUser;
    
} 

