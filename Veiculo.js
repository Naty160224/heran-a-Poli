class Veiculo{
    constructor(velocidade, modelo, cor, passageiros){
        this.velocidade = velocidade,
        this.modelo = modelo
        this.cor = cor,
        this.passageiros = passageiros
    }
    acelerar = function () {
        this.velocidade+=10
        console.log(`A velocidade atual é ${this.velocidade}`)
        return
}
freiar = function () {
    this.velocidade>=0 ? this. velocidade-=5: true
    console.log(`A velocidade atual é ${this.velocidade}`)
    return
    }
    toString = function () {
    return `o veiculo modelo ${this.modelo} esta a ${thi.velocidade}`
    }
}
module.exports = Veiculo;