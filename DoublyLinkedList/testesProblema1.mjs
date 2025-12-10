import { DoubleLinkedList } from "./ListaDuplamenteEncadeada.mjs";
import { MusicPlaylist } from "./solucaoProblema1.mjs";

// Testes da lista Duplamente Linkada Normal
const doubleLinkedList = new DoubleLinkedList();
doubleLinkedList.insertEnd(1);
doubleLinkedList.insertEnd(2);
doubleLinkedList.insertEnd(3);
doubleLinkedList.insertAnyWhere(3,4);
doubleLinkedList.insertEnd(5);
doubleLinkedList.elementos();
doubleLinkedList.deleteAnyWhere(4);
doubleLinkedList.elementos();

// Testes da PlayList de Músicas
const PlayList = new MusicPlaylist()
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

//teste 2 da playlist

const NovaPlaylist = new MusicPlaylist();
NovaPlaylist.addSong("musicaA");
NovaPlaylist.addSong("musicaB");
NovaPlaylist.addSong("musicaC");
console.log("Tamanho da playlist: " + NovaPlaylist.size());
NovaPlaylist.showPlaylist();
NovaPlaylist.next();
NovaPlaylist.next();
NovaPlaylist.next();
NovaPlaylist.previous();
NovaPlaylist.previous();
NovaPlaylist.previous();
NovaPlaylist.next();
NovaPlaylist.showPlaylist()
