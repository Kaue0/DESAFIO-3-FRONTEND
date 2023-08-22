import { Turno } from "../enums/turno.js"
import { inStorage } from "../interfaces/in-storage.js"
import { LocalStorage } from "../LocalStorage/gerencia-local-storage.js"

export class Cliente implements inStorage {

    gerenciador: LocalStorage<Cliente> = new LocalStorage()
    public readonly index: number = 0

    constructor(public readonly nome: string, public readonly telefone: string, public readonly endereco: string, public readonly data: Date, public readonly turno: string, public readonly nomeDoAnimal: string, public readonly idadeDoAnimal: number, public readonly porteDoAnimal: string) {}

    public getItem(): string {
        return "*"
    }

    public guarda(): void {
        this.gerenciador.salvarNoLocalStorage(this) 
    }

    public static iteraClientes(): Array<Cliente> {

        const query =  JSON.parse(LocalStorage.procurar("*") || "[]")
        return query.map((item: any) => new Cliente(
            item.nome,
            item.telefone,
            item.endereco,
            new Date(item.data),
            item.turno,
            item.nomeDoAnimal,
            item.idadeDoAnimal,
            item.porteDoAnimal
        ))
    }
}