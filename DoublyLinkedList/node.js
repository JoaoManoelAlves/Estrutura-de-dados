//comando module.exports serve pra permitir que a classe seja chamada em outros arquivos
module.exports = class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
};
