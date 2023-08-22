import { LocalStorage } from "../LocalStorage/gerencia-local-storage.js";
export class Cliente {
    constructor(nome, telefone, endereco, data, turno, nomeDoAnimal, idadeDoAnimal, porteDoAnimal) {
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.data = data;
        this.turno = turno;
        this.nomeDoAnimal = nomeDoAnimal;
        this.idadeDoAnimal = idadeDoAnimal;
        this.porteDoAnimal = porteDoAnimal;
        this.gerenciador = new LocalStorage();
        this.index = 0;
    }
    getItem() {
        return "*";
    }
    guarda() {
        this.gerenciador.salvarNoLocalStorage(this);
    }
    static iteraClientes() {
        const query = JSON.parse(LocalStorage.procurar("*") || "[]");
        return query.map((item) => new Cliente(item.nome, item.telefone, item.endereco, new Date(item.data), item.turno, item.nomeDoAnimal, item.idadeDoAnimal, item.porteDoAnimal));
    }
}
