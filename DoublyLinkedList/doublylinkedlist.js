//A classe doublylinkedlist é um tipo especial de LinkedList que nós já conhecemos, portanto iremos importar as propriedades e métodos já desenvolvidos em sala de aula e adicionar a nova função que irá ligar o nó ao seu elemento anterior (prev).

const Node = require("./node.js");
const LinkedList = require("./linkedlist.js");

function defaultEquals(a, b) {
    return a === b;
}

class DoublyNode extends Node {
    constructor(element, next, previous) {
        super(element, next);
        this.previous = previous;
    }
}
class DoublyLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals) {
        super(equalsFn);
        this.tail = undefined; //Além disso, precisamos manter também uma referência ao último elemento da lista (tail).
    }


    //Inserindo um novo elemento em qualquer posição: 
    // Na classe doublylinkedlist, iremos alterar o método inserir que conhecemos da LinkedList comum, pois além de controlar a propriedade next, temos a adição do ponteiro prev que indica o elemento anterior.

    inserir(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new DoublyNode(element);
            let current = this.head;
            if (index === 0) {
                if (this.head == null) {
                    this.head = node;
                    this.tail = node;
                } else {
                    node.next = this.head;
                    current.previous = node;
                    this.head = node;
                }

            } else if (index === this.count) {
                current = this.tail;
                current.next = node;
                node.previous = current;
                this.tail = node;
            } else {
                const previous = this.getElementAt(index - 1);
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.previous = node;
                node.previous = previous;
            }
            this.count++;
            return true;
        }
        return false;
    }
    
    removeAt(index) {
        if (index >= 0 && index < this.count) {
            let current = this.head;
        if (index === 0) {
            this.head = current.next; 
        if (this.count === 1) { // Se houver apenas um item atualiza-se o tail         
            this.tail = undefined;
        } else {
            this.head.previous = undefined;
}
        } else if (index === this.count - 1) {
            current = this.tail;
            this.tail = current.previous; 
            this.tail.next = undefined; 

}




