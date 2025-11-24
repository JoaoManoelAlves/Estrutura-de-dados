const no = require('./node.js')

module.exports = class CircularLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.count = 0
        this.noAtual = null
    }

    insert(element){
        const newNo = new no(element)
        if(this.isEmpty()){
            this.head = newNo
            this.tail = newNo
            this.noAtual = newNo
            this.tail.next = this.head
        }else{
            this.tail.next = newNo
            newNo.next = this.head
            this.tail = newNo
        }
        this.count++
    }

    rotate(steps){
        if(this.isEmpty()) return;

        for(let i=0;i<steps;i++){
            this.noAtual = this.noAtual.next
        }
        return this.noAtual
    }

    current() {
        if(this.noAtual == null){
            return undefined
        }else{
            return this.noAtual.data
        }
    }

    size(){
        return this.count
    }

    isEmpty(){
        return this.count == 0
    }

    clear(){
        this.head = null
        this.count = 0
        this.tail = null
        this.noAtual = null
    }
}
