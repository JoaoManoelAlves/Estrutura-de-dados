const no = require('./node.js')

module.exports = class CircularLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.count = 0
        this.currentNode = null
    }

    insert(element){
        const newNo = new no(element)
        if(this.isEmpty()){
            this.head = newNo
            this.tail = newNo
            this.currentNode = newNo
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
            this.currentNode = this.currentNode.next
        }
        return this.currentNode
    }

    current() {
        if(this.currentNode == null){
            return undefined
        }else{
            return this.currentNode.data
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
        this.currentNode = null
    }
}
