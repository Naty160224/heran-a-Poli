const Veiculo = require('./veiculo')
class Barco extends Veiculo {
    #noz;
    constructor( noz,velocidade, modelo, cor, passageiros) {
      super(velocidade, modelo, cor, passageiros);
      this.#noz = noz
    }
    acelerar = function() {
        (this.#noz += 1);
        console.log 
        ('a velocidade atual e ${this.noz}')
        }
}
const lancha = new Barco (5, 0, 'lancha', 'branca', 5)
lancha.acelerar()
lancha.acelerar()
lancha.acelerar()
Lancha.noz = 0
lancha.acelerar()
