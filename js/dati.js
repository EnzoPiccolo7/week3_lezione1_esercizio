var nomi = window.prompt('Inserisci il tuo nome');
var cognome = window.prompt('Inserisci il tuo cognome');
var eta = window.prompt('Inserisci la tua età');
var citta = window.prompt('Inserisci il la tua città');
var email = window.prompt('Inserisci la tua email');
var tutto = nomi + ' '+ cognome + ' '+eta +' '+citta+' '+ email ;

var a = document.getElementById('nome').innerHTML = nomi;
var a = document.getElementById('cognome').innerHTML = cognome;
var a = document.getElementById('eta').innerHTML = eta;
var a = document.getElementById('citta').innerHTML = citta;
var a = document.getElementById('email').innerHTML = email;


console.log(tutto);
window.alert(tutto);

