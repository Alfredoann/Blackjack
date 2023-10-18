


class Persona {

nombre='';
codigo='';
frase='';

    constructor (nombre= 'Sin nombre',codigo='Sin codigo',frase='Sin frase') {
        if (!nombre ) throw Error("NomBRE")
        this.nombre =nombre;
        this.codigo =codigo;
        this.frase =frase;
    }

quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
}

miFrse () {
    this.quienSoy();
    console.log(`${this.codigo} dice : ${this.frase}`);
}
}





const spiderman = new Persona('Peter Parker', 'Spiderman','Soy tu amigable vecino Spiderman');
const ironman = new Persona('Tony Parker', 'Spider','Soy tu amigable vecino Spiderman');
console.log(spiderman);
console.log(ironman);

spiderman.miFrse();