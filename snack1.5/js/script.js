// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


let OddNum = [];
let Size = 6;


for(let i=0; i<=Size; i++) {
	let Num = parseInt(prompt('inserisci un numero'));

    if (Num % 2 == 1){
        OddNum.push(Num);
    }
}

console.log(OddNum)
