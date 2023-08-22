export class LocalStorage {
    constructor() {
        this.localStorage = localStorage;
    }
    salvarNoLocalStorage(item) {
        const chaveItem = this.localStorage.getItem(item.getItem());
        let listaItens = [];
        if (chaveItem) {
            listaItens = JSON.parse(chaveItem, (key, value) => {
                return value;
            });
        }
        const newItem = Object.assign(Object.assign({}, item), { gerenciador: undefined });
        listaItens.push(newItem);
        this.localStorage.setItem(item.getItem(), JSON.stringify(listaItens));
    }
    remover(item) {
        const chaveItem = this.localStorage.getItem(item.getItem());
        let listaItens = [];
        if (chaveItem) {
            listaItens = JSON.parse(chaveItem, (key, value) => {
                return value;
            });
        }
        listaItens = listaItens.filter(unidade => {
            return unidade.index !== item.index;
        });
        this.localStorage.setItem(item.getItem(), JSON.stringify(listaItens));
    }
    static procurar(item) {
        const chaveItem = this.depot.getItem(item);
        return chaveItem;
    }
}
LocalStorage.depot = localStorage;
