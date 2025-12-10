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
    
//metódos de inserção
    
//inserir no inicio
insertFront(element) 
    //verifica se a lista está completamente vazia
    {
    if (this.isEmpty()) return this.insert(element);
//cria um nó novo que será colocado na frente:
    const newNo = new NodeList(element);
// o nó que foi inserido passa a apontar para o nó que antes era a cabeça
    newNo.next = this.head;
// o nó que era a cabeça antiga aponta de volta para o nó que entrou
    this.head.prev = newNo;
//atualiza a cabeça da lista para ser o novo nó
    this.head = newNo;
//incrementa o contador total de elementos que há na lista
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
    //Pra deletar o primeiro nó
    if (this.isEmpty()) return undefined; //Se a lista estiver vazia retorna undefined
    const removedNode = this.head;
    if (this.count === 1) { //Se o count for apenas 1, o head e tail recebem Nulls
        this.head = null;
        this.tail = null;
    } else { //O head agora recebe o next do head
        this.head = this.head.next; 
        this.head.prev = null; //O previous do head agora é Null 
    }
    this.count--; //O count vai diminuindo conforme os elementos são removidos
    return removedNode.data;
}
deleteBack() {
    //Pra deletar o ultimo nó
    if (this.isEmpty()) return undefined; //Se a lista estiver vazia retorna undefined
    const removedNode = this.tail;
    if (this.count === 1) { //Se o count for apenas 1 Head e tail recebem Nulls
        this.head = null;
        this.tail = null;
    } else { //Tail recebe o Previous do Tail
        this.tail = this.tail.prev;
        this.tail.next = null; //Next do Tail agora é Null
    }
    this.count--; //Count vai diminuindo conforme os elementos são removidos
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
        return node.next;       //caso os dois parametros sejam verdadeiros, retorna o vizinho
    }
    return null;                //caso um dos parametros seja falso, retorna null
}
getPrev(node) {
    if (node && node.prev) {    //retorna o vizinho anterior ao nó caso os parametros sejam verdadeiros
        return node.prev;
    }
    return null;
}

// MÉTODOS DE BUSCA:
indexOf(element) {              //retorna a posição de determinado elemento
    let atual = this.head;      //atual serve como ponteiro que recebe o valor de head
    let index = 0;              //contador que representa o indice
    while (atual != null) {     //loop criado pra percorrer a lista enquanto atual for diferente de null
        if (atual.data === element) { //se o valor de atual for igual ao valor do elemento digitado
            return index;       //o loop termina e retorna o valor do contador/indice
        }
        atual = atual.next;     //se a condição acima nao for satisfeita, a variavel atual recebe 
        index++;                //o valor do próximo vizinho (next) e o contador soma +1. o loop repete.
    }
    return null;                //retorna null caso o loop não encontre um item igual ao solicitado na lista.
}

getNodeAt(index) {              //retorna o nó através do índice
    if (index < 0 || index >= this.count) return undefined;  //se o indice solicitado for menor que zero e maior/igual ao tamanho da lista, retorna undefined, pois esse indice nao existe
    
    let atual = this.head;      //atual serve como ponteiro que recebe o valor de head
    let i = 0;                  //contador
    while (i < index) {         //loop: enquanto o contador for menor que o indice solicitado
        atual = atual.next;     //avança para o proximo nó
        i++;                    //acrescenta +1 ao contador
    }
                                //quando o loop para, significa que o ponteiro atual está posicionado no nó do indice solicitado
    return atual;               //retorna o nó inteiro
}                 

//MÉTODOS ACESSÓRIOS: 
head() { //Retorna o head
    return this.head;
}
tail() { //Retorna tail
    return this.tail;
}
size() { //Retorna o tamanho da lista, ou seja o Count 
    return this.count;
}
isEmpty() { //Verifica se a lista está vazia
    return this.count === 0;
}
clear() { //Limpa toda a lista, transformando o head e tail em Nulls e limpando o Count (assim como no início da lista no constructor)
    this.head = null;
    this.tail = null;
    this.count = 0;
}
 elementos() { //o método elementos() auxilia a depuração criando um array que guarda os valores adicionados na lista dupla
        let atual = this.head;
        let elementos = [];
        while (atual !== null) {
            // elementos.push(atual)
            elementos.push(atual.data);
            elementos.push("<=>");
            atual = atual.next;
        }
        elementos.pop(); //remove a ultima seta solta
        return console.log(elementos.join(" "));
    }
}
