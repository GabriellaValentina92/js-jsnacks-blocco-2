// Generatore di “nomi cognomi” casuali: 
// il Grande Gatsby ha una lista di 
// nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.

let Name = ['Anna', 'Marco', 'Giulio', 'Antonio', 'Elena', 'Piera'];
let lastName = ['Foglietta', 'Russo', 'Ranno', 'Coniglio', 'Barretta', 'Giordano'];


let falseName = Name[Math.floor(Math.random() * Name.length)];
let falseLastName = lastName[Math.floor(Math.random() * lastName.length)];

let falseList = [];

for ( let i = 0; i < Name.length && i < lastName.length; i++){
    
    falseName = Name[Math.floor(Math.random() * Name.length)];
    // console.log(falseName)
    falseLastName = lastName[Math.floor(Math.random() * lastName.length)];
    // console.log(falseLastName)

    const listName = falseName.concat(falseLastName)

    falseList.push(listName);
    console.log(falseList)
    
}