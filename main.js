/*DEFINIZIONE DELLE VARIABILI*/
var name;
var surname;
var favoriteColor;
var number;

/*VALORIZZAZIONE VARIABILI DI OUTPUT*/

//Nome dell'utente
name = prompt("Inserisci il tuo nome");

//Cognome dell'utente
surname = prompt("Inserisci il tuo cognome");

//Colore preferito dell'utente
favoriteColor = prompt("Inserisci il tuo colore preferito");

number = "19";

//Visualizzazione in pagina
document.getElementById("pwdgen").innerHTML= name + surname + favoriteColor + number;
