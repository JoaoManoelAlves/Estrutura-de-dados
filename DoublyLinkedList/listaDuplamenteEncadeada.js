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
                        //dupla verificação de parametros: se o nó informado existe e se ele tem um próximo vizinho (next)
    if (node && node.next) {
        return node.next; //caso os dois parametros sejam verdadeiros, retorna o vizinho
    }
    return null;            //caso um dos parametros seja falso, retorna null
}
getPrev(node) {
    if (node && node.prev) {//retorna o vizinho anterior ao nó caso os parametros sejam verdadeiros
        return node.prev;
    }
    return null;
}

// MÉTODOS DE BUSCA:
indexOf(element) {             //retorna a posição de determinado elemento
    let atual = this.head;     //atual serve como ponteiro que recebe o valor de head
    let index = 0;             //contador que representa o indice
    while (atual != null) {    //loop criado pra percorrer a lista enquanto atual for diferente de null
        if (atual.data === element) { //se o valor de atual for igual ao valor do elemento digitado
            return index;       //o loop termina e retorna o valor do contador/indice
        }
        atual = atual.next;     //se a condição acima nao for satisfeita, a variavel atual recebe 
        index++;                //o valor do próximo vizinho (next) e o contador soma +1. o loop repete.
    }
    return null;                //retorna null caso o loop não encontre um item igual ao solicitado na lista.
}

getNodeAt(index) {              //retorna o nó através do índice
    //se o indice solicitado for menor que zero e maior/igual ao tamanho da lista, retorna undefined, pois esse indice nao existe
    if (index < 0 || index >= this.count) return undefined;
    
    let atual = this.head; //atual serve como ponteiro que recebe o valor de head
    let i = 0; //contador
    while (i < index) { //loop: enquanto o contador for menor que o indice solicitado
        atual = atual.next; //avança para o proximo nó
        i++; //acrescenta +1 ao contador
    }
    //quando o loop para, significa que o ponteiro atual está posicionado no nó do indice solicitado
    return atual; //retorna o nó inteiro
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
