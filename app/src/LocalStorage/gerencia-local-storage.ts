import { inStorage } from "../interfaces/in-storage.js"

export class LocalStorage<T extends inStorage> {
    private localStorage: Storage = localStorage
    private static depot: Storage = localStorage

    public salvarNoLocalStorage(item: T): void {
        const chaveItem = this.localStorage.getItem(item.getItem())    
        let listaItens: Array<T> = []
        if(chaveItem) {
            listaItens = JSON.parse(chaveItem, (key, value) => {
                return value as T
            })
        }

        const newItem = {...item, gerenciador: undefined}

        listaItens.push(newItem)

        this.localStorage.setItem(item.getItem(), JSON.stringify(listaItens))
    }

    public remover(item: T): void {
        const chaveItem = this.localStorage.getItem(item.getItem())
        let listaItens: Array<T> = []
        if(chaveItem) {
            listaItens = JSON.parse(chaveItem, (key, value) => {
                return value as T
            })
        }
        
        listaItens = listaItens.filter(unidade => {
            return unidade.index !== item.index
        })

        this.localStorage.setItem(item.getItem(), JSON.stringify(listaItens))
    }

    public static procurar(item: string): string | null {
        const chaveItem = this.depot.getItem(item)
        return chaveItem
    }
}
