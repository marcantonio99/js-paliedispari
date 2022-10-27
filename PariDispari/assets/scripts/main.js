//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//Generiamo un numero randoma da 1 a 5 per il pc.
//Sommiamo i due numeri. Stabiliamo se pari o dispari. E dichiariamo chi ha vinto:

//opzioni
let choise = prompt('scegli se pari o dispari');
choise = choise.toLowerCase();

//check
Check(choise);

//inserisce il numero
let number = prompt('Inserisci il numero');

Check(number);

//dopo i check
number = parseInt(number);

Hand(number);

Game(choise, number);

//funzioni
function Check(x){
    if( x == '' ){
        alert('devi inserire qualcosa!')
        location.reload();
    }else{
        console.log('Ben fatto');
    }
}

function Hand(x){
    if( x <= 5 && x > 0 ){
        console.log('Ben fatto');
    }else{
        alert('devi inserire un numero compreso tra 1 e 5!');
        location.reload();
    }
}

function Game( x, y ){
    let randomNumber = Math.round(Math.random() * 5);

    if( (y+randomNumber) % 2 == 0 ){
        console.log('pari');
        if( x == 'pari' ){
            console.log('Hai vinto!');
        }else{
            console.log('Hai perso...');
        }
    }else{
        console.log('dispari');
        if( x == 'dispari' ){
            console.log('Hai vinto!');
        }else{
            console.log('Hai perso...');
        }
    }
}