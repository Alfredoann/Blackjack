let juegos = ['Zelda', 'SuperSmashBrowsBrwal', 'Metroid', 'Crhono'];

console.log('Largo: ' , juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length -1]

console.log({primero, ultimo });

juegos.forEach((elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
});

let nuevalong = juegos.push('Spyro');
console.log({nuevalong, juegos})

 nuevalong = juegos.unshift("Rakion");
console.log({nuevalong, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let pos = 1;

console.log(juegos);

let juegosborrados =juegos.splice( pos, 2);
console.log({juegosborrados, juegos});

let metroidIndex = juegos.indexOf('Metroid'); //Case_Sensitive
console.log({metroidIndex});