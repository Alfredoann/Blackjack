
const elMayor = (a, b ) => (a > b) ? a : b;

const tieneMenbresia = (miembro) => (miembro) ? '2 dolares' : '10 Dolares';

console.log(elMayor(20, 15));
console.log(tieneMenbresia(true));


const amigo = false

const amigosArrr = [
    'peter',
    'Tony',
    'Dr Strange',
    amigo ? 'Thor' : 'Loki',
   // (() => 'Nick Fury') ()
   elMayor (10,15
    )
];
 console.log(amigosArrr);

 const nota = 82.5; // A+ A B+ 

 const grado =  nota >= 95 ? 'A+':
                nota >= 90 ? 'A' :
                nota >= 85 ? 'B+':
                nota >= 80 ? 'B' :
                nota >= 75 ? 'C+' :
                nota >= 70 ? 'C' : 'F';
console.log({nota, grado});




