export class NodeList {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
export class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    //inserir no inicio
    insertFront(element) {
        if (this.isEmpty()) return this.insertEnd(element);
        const newNo = new NodeList(element);
        newNo.next = this.head;
        this.head.prev = newNo;
        this.head = newNo;
        this.count++;
    }

    //inserir no final
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

    //inserir em qualquer lugar
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
        if (this.isEmpty()) return undefined;
        const removedNode = this.head;
        if (this.count === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.count--;
        return removedNode.data;
    }
    deleteBack() {
        //Deletará o ultimo nó
        if (this.isEmpty()) return undefined;
        const removedNode = this.tail;
        if (this.count === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.count--;
        return removedNode.data;
    }
    deleteAnyWhere(index) {//Deletará de qualquer nó através do índice
        // se o indice for menor que zero ou maior que o numero de elementos, retorna undefined
        if (index < 0 || index >= this.count) return undefined;

        //reutilizando os metodos deleteFront e deleteBack
        if (index === 0) return this.deleteFront();
        if (index === this.count -1) return this.deleteBack();

        const atual = this.getNodeAt(index);
        const previous = atual.prev;

        previous.next = atual.next;
        atual.next.prev = previous;

        this.count--;
        return atual.data;

    }

    // MÉTODOS DE BUSCA:
    indexOf(element){ //retorna a posição de determinado elemento
        let atual = this.head;
        let index = 0;
        while (atual != null){
            if(atual.data === element){
                return index;
            }
            atual = atual.next;
            index++;
        }
        return -1;
    }

    getNodeAt(index) { //retorna o nó através do índice
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
           // elementos.push(atual)
            elementos.push(atual.data)
            elementos.push("<=>");
            atual = atual.next;
        }
        elementos.pop(); //remove a ultima seta solta
        return console.log(elementos.join(" "));
    }
}

const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.insertEnd(1);
doubleLinkedList.insertEnd(2);
doubleLinkedList.insertEnd(3);
doubleLinkedList.insertAnyWhere(3,4);
doubleLinkedList.insertEnd(5);
doubleLinkedList.elementos();
doubleLinkedList.deleteAnyWhere(4);
doubleLinkedList.elementos();
