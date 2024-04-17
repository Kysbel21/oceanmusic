//String
const mensaje = 'Instituto Alfa Carabobo'


//Number
const numero = 7.452


//Boolean
const condicion = false

//Aray es una lista de datos que se guarana en memoria de forma sucesiva
const mercado = [
    'Tomates',
    'Lechuga',
    'Salsa Maíz',
    'Yogurt',
    'Pan',
]

//Object es u tipo de dato que nos permite crear/guardar valores dentro de él pero asignandolé una clave especifica a cada valores
const usuario = {
    email: 'pedrooutlook',
    password: '1234*',
    username: 'Pedro54',
    address: {
        city: 'Valencia',
        state: 'Carabobo',
        street: 'Madison',
        code: '520',
    },
    children: [
        'Maria',
        'Ana',
        'Paola',
    ]



}
 
const indefinido= undefined

const vacio= null

/**
 * OPERADORES LÓGICOS
 * 
 *      AND o también y
 * ||     OR o también o
 * =    Asignación
 * ==   Comparación igual
 * !=   desigualdad
 * <    menor
 * <=   menor o igual
 * >    mayor
 * >=   mayor o igual
 * 
 * 
 * OPERADORES MATEMÁTICOS
 * +   suma o adicion
 * -   resta o sustracción 
 * *   multiplicación
 * /   división
 * %   ?
 */



// if (1==1) {
//     console.log("se cumple")
// }
// else {
//     console.log("no se cumple")
// }




// console.log(usuario.Address.code)

// Una función es un bloque de código que contiene una serie de instrucciones o sentencias
// Conatante o variable es un espacio en memoria que vamos a utilizar después 
// Una función recibe (parametros): son como variables que existen dentro de la función 


const suma = (num1, num2) => {
    return num1 + num2
}

const elemento= document.getElementById('identify')
console.log(elemento)