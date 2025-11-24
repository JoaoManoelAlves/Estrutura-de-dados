const listaLinkadaCircular = require('./CircularlinkedList.js')

module.exports = class Roulette{
    constructor(){
        //lista recebeu todos os metodos e classe da listaCircular
        this.lista = new listaLinkadaCircular
    }
    addSetor(element){
        //chamamos a lista e a função da listaCircular com os métodos
        this.lista.insert(element)
        console.log(`Número ${element} adicionado a lista`)
    }
    spin(){
        //Verifica se está vazia
        if(this.lista.isEmpty()) return console.log("Roleta Vazia")
        //Pega o tamanho, o máximo do giro e calcula o quanto irá girar
        const tamanho = this.lista.size()
        const maxGiro = tamanho * 3
        const steps = Math.floor(Math.random() * maxGiro) + 1
        //Gira baseado nos steps
        this.lista.rotate(steps)
        //Entrega o número que saiu
        const resultado = this.currentSector()
        console.log(`O número que parou foi [${resultado}]`)
        return resultado
    }

    currentSector(){
        //Retorna o número que girou após a função spin
        return this.lista.current()
    }

    isEmpty(){
        return this.lista.isEmpty()
    }
    size(){
        return this.lista.size()
    }
    clear(){
        return this.lista.clear()
    }
}
