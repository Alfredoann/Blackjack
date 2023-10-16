const dia = 1; // 0 domingo ... 1:Luness
const horaActual = 11;

let HoraApertura;
let mensaje; // Esta Abierto, Est Cerrado, hoy abrimos a las XX

//if (dia === 0 ||  dia === 6) {
//   if ([0,6].includes(dia) ){
//        console.log('Fin de semana');
//    HoraApertura = 9;
//} else {
//console.log('Dia de semana');
//HoraApertura = 11;
//}

HoraApertura =([0,6].includes(dia) ) ? 9 : 11

//if (horaActual >= HoraApertura) {
  //  mensaje = 'Esta Abierto'
//} else {
  //  mensaje =` Esta cerrado , hot abrimos a las ${HoraApertura}`;

//}
mensaje = (horaActual >= HoraApertura) ? 'Esta Abierto' : ` Esta cerrado , hot abrimos a las ${HoraApertura}`;

console.log({HoraApertura, mensaje });



