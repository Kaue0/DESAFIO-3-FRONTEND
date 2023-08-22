import { inStorage } from "../interfaces/in-storage.js"
import { LocalStorage } from "../LocalStorage/gerencia-local-storage.js"
import { Porcao } from "../interfaces/porcao.js"
import { ClienteController } from "../controllers/cliente-controller.js"

export class Produto implements inStorage {
    gerenciador:LocalStorage<inStorage> = new LocalStorage<inStorage>()
    
    constructor(public readonly titulo: string, public readonly tipo: string, public readonly precoTotal: Porcao[], protected precoPonteiro: Porcao = precoTotal[0], public readonly foto: string, public index = 0) { }
        
        
    get valorPonteiroAtual(): Porcao {
        return this.precoPonteiro
    }

    set valorPonteiroAtual(preco: Porcao) {
        this.precoPonteiro = preco
    }
    
    public getItem(): string {
        return "**"
    }
}