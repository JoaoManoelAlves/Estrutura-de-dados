class NodeList {
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

//MÉTODOS DE INSERÇÃO:

//inserir no inicio
insertFront(element) {
    if (this.isEmpty()) return this.insert(element);
    const newNo = new NodeList(element);
    newNo.next = this.head;
    this.head.prev = newNo;
    this.head = newNo;
    this.count++;
}

//inserir no final
insert(element) {
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
    if (index === this.size()) return this.insert(element);

    const newNo = new NodeList(element);
    const currentNode = this.getNodeAt(index);

    const previousNode = currentNode.prev;

    newNo.prev = previousNode;
    newNo.next = currentNode;

    currentNode.prev = newNo;
    previousNode.next = newNo;

    this.count++;
}

//MÉTODOS DE REMOÇÃO:

deleteFront() {
    //Deletará o primeiro nó
    if (this.isEmpty()) return undefined;
    const removedNode = this.head;
    if (this.count === 1) {
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
    if (this.count === 1) {
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
    if (index === this.count - 1) return this.deleteBack();

    const atual = this.getNodeAt(index);
    const previous = atual.prev;

    previous.next = atual.next;
    atual.next.prev = previous;

    this.count--;
    return atual.data;
}

// Remover um nó específico sem precisar buscar pelo índice:
remove(node) {
    //se não houver nenhum nó
    if (!node) return undefined;

    //se o nó for a cabeça
    if (node === this.head) {
        return this.deleteFront();
    }

    //se o nó for a cauda
    if (node === this.tail) {
        return this.deleteBack();
    }

    //se estiver no meio (ajusta os ponteiros dos vizinhos)
    const anterior = node.prev;
    const proximo = node.next;

    if (anterior) anterior.next = proximo;
    if (proximo) proximo.prev = anterior;

    this.count--;
    return node.data;
}

// MÉTODOS DE NAVEGAÇÃO:
getNext(node) {
    if (node && node.next) {
        return node.next;
    }
    return null;
}
getPrev(node) {
    if (node && node.prev) {
        return node.prev;
    }
    return null;
}

// MÉTODOS DE BUSCA:
indexOf(element) { //retorna a posição de determinado elemento
    let atual = this.head;
    let index = 0;
    while (atual != null) {
        if (atual.data === element) {
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

//MÉTODOS ACESSÓRIOS: 
head() {
    return this.head;
}
tail() {
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
}
