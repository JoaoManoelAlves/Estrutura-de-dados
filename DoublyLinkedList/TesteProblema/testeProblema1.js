const doubleLinkedlist  = require("./DoubleLinkedList.mjs")
const playList = require("./solucaoProblema1.mjs")
// Testes da lista Duplamente Linkada Normal
const doubleLinkedList = new doubleLinkedlist();
doubleLinkedList.insertEnd(1);
doubleLinkedList.insertEnd(2);
doubleLinkedList.insertEnd(3);
doubleLinkedList.insertAnyWhere(3,4);
doubleLinkedList.insertEnd(5);
doubleLinkedList.elementos();
doubleLinkedList.deleteAnyWhere(4);
doubleLinkedList.elementos();*/

// Testes da PlayList de Músicas
const PlayList = new playList()
PlayList.addSong("Música 1")
PlayList.addSong("Música 2")
PlayList.addSong("Música 3")
PlayList.addSong("Música 4")
console.log(PlayList)
PlayList.showPlaylist()//Saída esperada: Musica 1 <-> Musica 2 <-> Musica 3 <-> Musica 4 e tocando agora música 1
PlayList.removeCurrent()
PlayList.showPlaylist()//Musica 2 <-> Musica 3 <-> Musica 4 e tocando agora música 2
PlayList.reset()//Lista vazia e sem música selecionada
PlayList.showPlaylist()
console.log(PlayList)
