const Veiculo = require('./Veiculo')
class Moto extends Veiculo {
constructor (cilindrada, rodas, velocidade, modelo, cor,){
super (velocidade, modelo, cor, passageiros)
this.cilindrada = cilindrada;
this.rodas = rodas;
}
acelerar = function() {
    this.velocidade += 5
    console.log(`a velocidade atual e ${this.velocidade}`)
}
}
const ninja = new Moto (500, 2, 150, 'ninja', 'azul', 1)
ninja.acelerar()
ninja.acelerar(

)