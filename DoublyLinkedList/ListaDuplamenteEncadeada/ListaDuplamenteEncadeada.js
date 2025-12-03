class NodeList {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    insertEnd(element) {
        //Cria o novo nó
        const newNo = new NodeList(element);
        //Se não haver cabeça
        if (this.head == null) {
            //Cabeça é criada
            this.head = newNo;
            //A cauda aponta para a cabeça
            this.tail = newNo;
        } else {
            //Se houver
            //o next da cauda aponta para o novo nó
            this.tail.next = newNo;
            //O previous do novo nó aponta para a antiga cauda
            newNo.prev = this.tail;
            //A nova cauda recebe o novo nó
            this.tail = newNo;
        }
        this.count++;
    }
    insertFront(element) {
    if (this.isEmpty()) return this.insertEnd(element);
    const newNo = new NodeList(element);
    newNo.next = this.head;
    this.head.prev = newNo;
    this.head = newNo;
    this.count++;
}
    insertAnyWhere(index, element) {
        if (index < 0 || index > this.count) return undefined;
        if (index === 0) return this.insertFront(element);
        if (index === this.size()) return this.insertEnd(element);

        const newNo = new NodeList(element);
        const currentNode = this.getNodeAt(index);

        const previousNode = currentNode.prev;

        newNo.prev = previousNode;
        newNo.next = currentNode;

        currentNode.prev = newNo;
        previousNode.next = newNo;

        this.count++;

    }
    deleteFront() {
        //Deletará o primeiro nó
    }
    deleteBack() {
        //Deletará o ultimo nó
    }
    deleteAnyWhere() {
        //Deletará de qualquer nó
    }
    getNodeAt(index) {
        if (index < 0 || index >= this.count) return undefined;
        let atual = this.head;
        let i = 0;
        while (i < index) {
            atual = atual.next;
            i++;
        }
        return atual;
}
    cabeca() {
        return this.head;
    }
    cauda() {
        return this.tail;
}
    size() {
        return this.count;
}
    isEmpty() {
        return this.count === 0;
}
    clear() {
        this.head = null;
        this.tail = null;
        this.count = 0;
}
    elementos() {
        let atual = this.head;
        let elementos = [];
        while (atual !== null) {
            elementos.push(atual)
            //elementos.push(atual.data)
            //elementos.push("<=>");
            atual = atual.next;
        }
        return console.log(elementos);
    }
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.insertEnd(2);
doubleLinkedList.insertEnd(3);
doubleLinkedList.insertEnd(5);
doubleLinkedList.insertAnyWhere(3, 5);
doubleLinkedList.insertEnd(99);
doubleLinkedList.elementos();
