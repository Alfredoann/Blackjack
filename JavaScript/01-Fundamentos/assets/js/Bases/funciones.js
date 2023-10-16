
function saludar(nombre ) {
    console.log(arguments);
    console.log('Hola Mundo' + nombre );
    return [1,0,0,2,0];
//DESPUES RETURN NADA SE EJECUTA
    console.log('CODIGO DESOUES RETURN')
}

const saludar2 = function(nombre) {
    console.log('Hola Mundo' + nombre )
}

const saludarFlecha = () => {
    console.log('Hola FFLLEECCCHAAA')
}
saludar('Alfredo');
saludar2('Alfredo');

const retornoDeSaludar= saludar ('Fernando', 40,true,'osta Rica');
console.log(retornoDeSaludar);
saludarFlecha();


function sumar (a,b){
    return a+b;
}
const sumar2 = (a,b) => a +b;

//function getAleatorio() {
   // return Math.random();
//}
const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());