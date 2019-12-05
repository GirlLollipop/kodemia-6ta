var word = "perros"

var singWord = word[0]+word[1]+word[2]+word[3]+word[4]

console.log(singWord)


var number = 200

if (number >= 0 && number <= 100 && number % 10 === 0 ){
    console.log("El número esta en el rango")
} else if( number % 10 === 0){
    console.warn("Solo es multiplo de 10")
} else {
    console.error("No esta en el rango permitido")
}


var wordEnter= "gato"

if(wordEnter.length%2 === 0){
    console.log("La palabra es par")
    if(wordEnter.lenght < 10){
        console.log("La palabra tiene un rango entre 0-10")
    } 
} else if(wordEnter.lenght > 15){
    console.log("La palabra tiene un rango entre 10-15")
}


