
// No completados: TABLERO DE AJEDREZ (pag.40) y RECURSION (pag.58).







// ---------------------------------------------------------------------------------------------------- EJERCICIOS DE LA PAG. 39

/* -------------------------------------------------- FizzBuzz

for(let i=1; i<=100; i++){
    if(i % 3 == 0    &&    i % 5 == 0){
        console.log("FizzBuzz");
    } else if (i % 3 == 0){
        console.log("Fizz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
*/



/* -------------------------------------------------- Ciclo de un triangulo

let gato = "#";
for(let i=1; i<=10; i++){
    console.log(gato);
    gato = gato + "#";
}
*/







// ---------------------------------------------------------------------------------------------------- EJERCICIOS DE LA PAG. 58

/* -------------------------------------------------- Minimo

function minimo(num1, num2){
    min = (Math.min(num1,num2));
    return min;
}

console.log(minimo(6,4));
*/



/* -------------------------------------------------- Conteo de frijoles

function contarFs(word){
    let contador = 1;
    for(let i=1; i<=word.length; i++){
        if(word[i] === "F"){
            contador = contador + 1;
        }
    }
    return contador
}

console.log(contarFs("FeFito esta Feliz"));

//------------------------- Segunda parte

function contarCaracteres (word){
    let contador = 0;
    for(let i=1; i<=word.length; i++){
        contador = contador + 1;
    }
    return contador;
}

console.log(contarCaracteres("Fefito"));
*/







// ---------------------------------------------------------------------------------------------------- EJERCICIOS DE LA PAG. 

