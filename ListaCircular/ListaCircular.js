const no = require('./node.js')

function defaultEquals(a,b) {
    return a===b;
}

class CircularLinkedList{
    constructor(equalFn = defaultEquals){
        this.head = null
        this.count = 0
        this.equalFn = equalFn
    }

    insert(element){
        const newNo = new no(element)
        if(this.head == null){
            this.head = newNo
            newNo.next = this.head
        }else{
            let atual = this.head
            while(atual.next != this.head){
                atual = atual.next
            }
            atual.next = newNo
            newNo.next = this.head
        }
        this.count++
        return true
    }

    size(){
        return this.count
    }
}

const listaCircular = new CircularLinkedList
listaCircular.insert(2)
listaCircular.insert(3)
console.log(listaCircular)
