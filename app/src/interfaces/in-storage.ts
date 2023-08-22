import { LocalStorage } from "../LocalStorage/gerencia-local-storage.js"

export interface inStorage {
    getItem(): any
    gerenciador: LocalStorage<inStorage>
    index: number
}