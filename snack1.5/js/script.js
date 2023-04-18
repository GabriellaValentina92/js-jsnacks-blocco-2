// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


let OddNum = [];
let size = 6;


for(let i=0; i<size; i++) {
	let Num = parseInt(prompt('inserisci un numero'));

    if (Num % 2 == 1){
        OddNum[i] = Num;
    }
}

console.log(OddNum)
