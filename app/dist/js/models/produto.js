import { LocalStorage } from "../LocalStorage/gerencia-local-storage.js";
export class Produto {
    constructor(titulo, tipo, precoTotal, precoPonteiro = precoTotal[0], foto, index = 0) {
        this.titulo = titulo;
        this.tipo = tipo;
        this.precoTotal = precoTotal;
        this.precoPonteiro = precoPonteiro;
        this.foto = foto;
        this.index = index;
        this.gerenciador = new LocalStorage();
    }
    get valorPonteiroAtual() {
        return this.precoPonteiro;
    }
    set valorPonteiroAtual(preco) {
        this.precoPonteiro = preco;
    }
    getItem() {
        return "**";
    }
}
