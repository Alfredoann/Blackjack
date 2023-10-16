//function crearPersona(nombre, apellido) {
  //  return {nombre,apellido}
//}


 const crearPersona = (nombre, apellido) => ( {nombre,apellido});


const persona = crearPersona ('Alfredo', 'Noriega');
console.log(persona);


function imprimeArgumentos() {
    console.log(arguments);
}
    imprimeArgumentos(10,true,false,'Lola', 'Hola');
