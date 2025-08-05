/*
let intentos = 0;
let numeroMaximo = 10;
let listaNumerosSorteados = [];
let numeroSecreto = generarNumeroSecreto();


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){

        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
    
        //Si el número generado está incluido en la lista se opera, sino hace otra cosa
        if (listaNumerosSorteados.includes(numeroGenerado)){

            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto de seba');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos =1;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); 
    

    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");

    } else { //El usuario no acertó 
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }

        intentos++;
        limpiarCaja();
    }
        
        
    return;
}
*/
/*
function limpiarCaja(){ //se puede usar querySelector o getElementByID
    document.querySelector('#valorUsuario').valorCaja.value = '';
}
*/
 //es lo mismo que arriba solo que más extenso arriba está simplificado.

/*

function limpiarCaja(){ //se puede usar querySelector o getElementByID
    let valorCaja =document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function reiniciarJuego(params) {
    //limpiar la caja
    limpiarCaja();
    //indicar me3nsaje de intervalo de números
    //generar número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el número de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
*/

//HASTA AQUÍ TERMINA EL EJERCICIO DEL NÚMERO SECRETO EL RESTO SOLO SON DESAFIOS.
//
//



/* Ejercicio 1
let hola = saludo();

function saludo (){
    console.log('¡Hola, mundo!')
}

*/

/* hace lo mismo que arriba
function mostrarHola(){
    console.log("!Hola, mundo¡");
}

mostrarHola();
*/

/* Ejercicio 2
let hola = saludo();

function saludo (){
    let nombre = prompt('Ingrese su nombre:');
    console.log(`¡Hola, ${nombre}`);
}
*/
/* de esa manera recibie parametros

function mostrarHolaNombre(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

mostrarHolaNombre("Alice"); /aquí esta recibiendo parametros

*/
/*
let numeroRecibido = valor();

function valor(){
    let numero = parseInt(prompt('Ingrese un número:'));
    console.log(numero*2);
}
*/
/* hace lo mismo que arriba solo que con un parametro incorporado

function calcularDoble(numero) {
  return numero * 2;
}

let resultadoDoble = calcularDoble(5);
console.log(resultadoDoble);
*/
/* Ejercicio 4 - recibe 3 parametros y calcula promedio
function calcularPromedio(a, b, c) {
  return (a + b + c) / 3;
}

let promedio = calcularPromedio(4, 7, 10);
console.log(promedio);
*/
/* Ejericicio 5 busca el mayor de 2 números
function encontrarMayor(a, b) {
  return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15, 9);
console.log(numeroMayor);
*/

/*Ejercicio 6 - calcula numero al cuadrado
function cuadrado(numero) {
  return numero * numero;
}

let resultado = cuadrado(2);
console.log(resultado);
*/
/*
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

function calcularPromedio(nota1, nota2, nota3, nota4){
        let promedio = (nota1 + nota2 + nota3 + nota4)/4
        return promedio;
}

function verificarAprobacion(promedio){
        return promedio >= 5 ? 'Aprobado' : 'Reprobado';
     
}

*/

/* Ejercicio 1

const altura = 1.75;
const peso = 70;

function calculoIMC(altura, peso){
    const imc = (peso / (altura*altura));
    return imc;
    
}

const imcCalculado = calculoIMC(altura, peso);

console.log(`Su IMC es: ${imcCalculado}`);

*/

/* Ejercicio 2
let numero = 4;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`);

function calcularFactorial(numero){
    if (numero === 0 || numero ===1){
        return 1;
    } else {
        return numero * calcularFactorial(numero-1);
    }

}
    
*/

/*Ejercicio 3
function convertirDolaresAPesoCL(dolares) {
  var cotizacionDolar = 900;
  var pesoCL = dolares * cotizacionDolar;
  return pesoCL;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnPesoCL = convertirDolaresAPesoCL(valorEnDolar);
console.log(`${valorEnDolar} dólares  es $${valorEnPesoCL} pesos chilenos`);
*/

/*  // Ejercicio 4

function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);
*/


/*  Ejercicio 5
function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);
*/

/* Ejercicio 6
function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 15; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);
*/

/*
let listaGenerica = [];

    console.log(listaGenerica);
*/
/*
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

let maslenguaje = lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');


function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesSeparadamente();

function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesReversoSeparadamente();

*/

/*
function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
console.log('Média:', media);

*/
/*
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeros = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeros);

*/
/*
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);
*/
/*

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

function sumarListas(lista1, lista2) {
    return lista1.map((num, index) => num + lista2[index]);
}

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];
const resultado = sumarListas(lista1, lista2);
console.log(resultado);  

*/
function cuadradoLista(lista) {
    return lista.map(num => num ** 2);
}

const lista = [2, 3, 4];
const resultado = cuadradoLista(lista);
console.log(resultado);  
