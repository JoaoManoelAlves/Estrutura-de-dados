import { DoubleLinkedList } from './ListaDuplamenteEncadeada.mjs';

export class MusicPlaylist {
    constructor() {
        this.playlist = new DoubleLinkedList();
        this.currentSong = null;
    }

    //adicionar música
    addSong(title) {
        this.playlist.insert(title);
        console.log(`${title} foi adicionada à playlist.`)
        
        //se for a primeira musica ela se torna a atual
        if (this.currentSong === null) {
            this.currentSong = this.playlist.head;
        }
    }

    //avançar pra proxima musica
    next() {
        //só avança se tiver uma música atual e também uma próxima
        if (this.currentSong && this.currentSong.next) {
            this.currentSong = this.currentSong.next;
            console.log(`Avançou para: ${this.currentSong.data}`);
        } else {
            console.log("Você ja está na ultima música.");
        }
    }

    //retornar pra musica anterior
    previous() {
        //so retorna se tiver uma música atual e tambem se tiver uma anterior
        if (this.currentSong && this.currentSong.prev) {
            this.currentSong = this.currentSong.prev;
            console.log(`Voltou para a música ${this.currentSong.data}`);
        } else {
            console.log("Você já está na primeira música.");
        }
    }

    //retornar o nome da música atual
    current() {
        if (this.currentSong) {
            return this.currentSong.data;
        }
        return "Nenhuma música tocando.";
    }

    //remover a música atual
    removeCurrent() {
        if (!this.currentSong) return; // Se não tem música, não faz nada

        const nodeToRemove = this.currentSong;
        let nextNode = nodeToRemove.next;
        let prevNode = nodeToRemove.prev;

        this.playlist.remove(nodeToRemove);
        console.log(`A música "${nodeToRemove.data}" foi removida da playlist.`);

        if (nextNode) {
            this.currentSong = nextNode;
            console.log(`Tocando agora: ${this.currentSong.data}`);
        } else if (prevNode) {
            this.currentSong = prevNode;
            console.log(`Tocando agora: ${this.currentSong.data}`);
        } else {
            this.currentSong = null;
            console.log("A playlist ficou vazia.");
        }
    }

    //limpa a playlist
    reset() {
        this.playlist.clear();
        this.currentSong = null;
    }

    showPlaylist() { //retorna todas as musicas da playlist e qual está tocando no momento
        this.playlist.elementos();
        if (this.currentSong) return console.log(`Tocando agora: ${this.currentSong.data}`);
    }
    size() {
        return this.playlist.size(); 
    }
    isEmpty() {
        return this.playlist.isEmpty();
    }

}
