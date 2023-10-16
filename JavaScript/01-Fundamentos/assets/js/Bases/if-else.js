

let a = 5;


if ( a>=10   ){  // undefined , null o ua asigancion.

    console.log("A es mayor o = a 10");
} else {
    console.log('A es menor a 10')
}

//console.log('Fin de programa');

const hoy = new Date(); // {}

console.log(hoy);
let dia = hoy.getDay (); // 0:Domingo , 1:lunes, 2: Martes.....

console.log({dia});

if ( dia === 0 )
{ console.log('Domingo');
} else {
    console.log("No es Domingo");
}
