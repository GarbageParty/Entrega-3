// Declara un arreglo llamado frutas con varios tipos de frutas.
// Crea un objeto para almacenar la cantidad de cada tipo de fruta.
// Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
// Imprime en la consola la cantidad de cada tipo de fruta.

frutas = (["🍎","🍎","🍎","🍎","🍎","🍎","🍎","🍐","🍐","🍐","🍐","🍌","🍌","🍊","🍊","🍊","🍇","🍈","🍈"])
let contenedorFrutas = {}

console.log (frutas)



frutas.push("🍐","🍎","🍊","🍌","🍌","🍇","🍇","🍇","🍇")

console.log(frutas)

for (let i = 0; i <= frutas.length; i++){

    const fruta = frutas[i] 

    if (contenedorFrutas[fruta]) {
        contenedorFrutas[fruta]++
    }
    else {
        contenedorFrutas[fruta] = 1
    }
}
console.log(contenedorFrutas)

frutaEspecifica = ("🍎")

cantidad = contenedorFrutas[frutaEspecifica]



console.log(frutaEspecifica+ " Esta es la cantidad de la fruta seleccionada " + cantidad)





// Opcional: intenta implementar la solución con el otro ciclo también (for/while).


frutas = (["🍎", "🍎", "🍎", "🍎", "🍎", "🍎", "🍎", "🍐", "🍐", "🍐", "🍐", "🍌", "🍌", "🍊", "🍊", "🍊", "🍇", "🍈", "🍈"])
let contenedorFrutasWhile = {}

console.log(frutas)

frutas.push("🍐", "🍎", "🍊", "🍌", "🍇")

console.log(frutas)

let i = 0  

while (i < frutas.length) { 

    const fruta = frutas[i]

    if (contenedorFrutasWhile[fruta]) {
        contenedorFrutasWhile[fruta]++
    }
    else {
        contenedorFrutasWhile[fruta] = 1
    }
    
    i++  
}

console.log(contenedorFrutasWhile)

frutaEspecifica = "🍇"


cantidad = contenedorFrutasWhile[frutaEspecifica]

console.log(frutaEspecifica+ " Esta es la cantidad de la fruta seleccionada " + cantidad)