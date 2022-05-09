var nomi = window.prompt('Inserisci il tuo nome');
var cognome = window.prompt('Inserisci il tuo cognome');
var eta = window.prompt('Inserisci la tua età');
var citta = window.prompt('Inserisci il la tua città');
var email = window.prompt('Inserisci la tua email');
var tutto = nomi + ' '+ cognome + 'anni '+eta +'città  '+citta+' '+ email ;

var a = document.getElementById('nome').innerHTML = nomi;
var b = document.getElementById('cognome').innerHTML = cognome;
var c = document.getElementById('eta').innerHTML = eta;
var d = document.getElementById('citta').innerHTML = citta;
var e = document.getElementById('email').innerHTML = email;



console.log(tutto);
window.alert(tutto);

document.write(tutto);
