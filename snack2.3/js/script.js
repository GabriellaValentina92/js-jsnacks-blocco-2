// Crea un array di numeri interi e fai la somma di tutti gli elementi che 
// sono in posizione dispari


const arr = [1, 2, 3, ,4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 1){
        // sum = sum + arr[i];
        sum += arr[i] 
    }
}

console.log('la somma di tutti gli elementi in posizione dispari è:' + sum);